# マルチステージビルドとする（ビルド環境と実行環境を分ける）

# ビルド環境
FROM gradle:8.5-jdk17 AS build
WORKDIR /app
COPY . .
# dbコンテナの起動時にmysqlが立ち上がらず、テストコードの通過不可能のため、一旦テストコードスキップ
# RUN gradle build --no-daemon
RUN gradle build --no-daemon -x test

# 実行環境
FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]