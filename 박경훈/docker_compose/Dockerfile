FROM openjdk:11-jdk

WORKDIR /app

COPY target/docker-compose-0.0.1-SNAPSHOT.jar /app/app.jar

CMD ["java", "-jar", "/app/app.jar"]

EXPOSE 8080
