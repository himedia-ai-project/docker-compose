const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080", // Docker Compose 내에서 backend 서비스로 요청을 전달
      changeOrigin: true, // CORS 문제 해결
    })
  );
};
