# Use OpenJDK 17 base image
FROM openjdk:17-jdk-slim

# Copy jar file from Maven target folder
COPY target/hospital-management-app.jar app.jar

# Expose port 8080 for app access
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "/app.jar"]
