FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY . .
RUN ./gradlew clean bootJar -x test --no-daemon


FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
USER nobody
COPY --from=builder /app/build/libs/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
