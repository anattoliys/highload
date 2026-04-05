package ru.project.highload.post.service;

import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;
import ru.project.highload.post.domain.PostEvent;

//@Component
//@RequiredArgsConstructor
//public class PostEventListener {
//
//    private final AmqpAdmin amqpAdmin;
//    private final SimpMessagingTemplate messagingTemplate;
//    private final TopicExchange postExchange;
//    private final Queue instanceQueue;
//
//    @EventListener
//    public void handleSessionSubscribe(SessionSubscribeEvent event) {
//        StompHeaderAccessor headers = StompHeaderAccessor.wrap(event.getMessage());
//        String destination = headers.getDestination();
//
//        if (destination != null && destination.startsWith("/post/feed/posted/")) {
//            String routingKey = destination.substring(1).replace("/", ".");
//            Binding binding = BindingBuilder.bind(instanceQueue)
//                    .to(postExchange)
//                    .with(routingKey);
//            amqpAdmin.declareBinding(binding);
//        }
//    }
//
//    @RabbitListener(queues = "#{instanceQueue.name}")
//    public void processPostCreated(PostEvent event, @Header(AmqpHeaders.RECEIVED_ROUTING_KEY) String routingKey) {
//        String destination = "/" + routingKey.replace(".", "/");
//        messagingTemplate.convertAndSend(destination, event);
//    }
//}
