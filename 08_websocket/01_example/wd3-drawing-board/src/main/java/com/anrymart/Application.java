package com.anrymart;

import com.anrymart.model.Message;
import com.anrymart.util.HerokuUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.javalin.Javalin;
import io.javalin.websocket.WsContext;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import static io.javalin.apibuilder.ApiBuilder.*;

public class Application {

    private final ObjectMapper objectMapper = new ObjectMapper();

    private final Map<WsContext, String> contextMap = new ConcurrentHashMap<>();
    private final List<String> messageList = Collections.synchronizedList(new ArrayList<>());

    public void run() {
        Javalin app = Javalin.create(config -> {
            config.addStaticFiles("/public");
        }).start(HerokuUtil.getHerokuAssignedPort());

        app.ws("/board", ws -> {
            ws.onConnect(ctx -> {
                String username = getUser(ctx);
                contextMap.put(ctx, username);
                broadcastMessage(new Message("notification", username + " joined the board"));
            });
            ws.onClose(ctx -> {
                String username = contextMap.get(ctx);
                contextMap.remove(ctx);
                broadcastMessage(new Message("notification", username + " left the board"));
            });
            ws.onMessage(ctx -> {
                messageList.add(ctx.message());
                broadcastMessage(ctx.message());
            });
        });

        app.routes(() -> {
            path("history", () -> {
                get(ctx -> {
                    ctx.json(messageList);
                });
                delete(ctx -> {
                    messageList.clear();
                    Map<String, String> data = new HashMap<>();
                    data.put("action", "clear");
                    broadcastMessage(new Message("history", data));
                });
            });
        });
    }

    private String getUser(WsContext context) {
        return context.queryParam("user");
    }

    private void broadcastMessage(Message message) {
        try {
            broadcastMessage(objectMapper.writeValueAsString(message));
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    private void broadcastMessage(String message) {
        contextMap.keySet().stream()
                .filter(context -> context.session.isOpen())
                .forEach(context -> {
                    context.send(message);
                });
    }

    public static void main(String[] args) {
        new Application().run();
    }
}
