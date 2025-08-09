const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://backend:8080/", // Docker Compose 내에서 backend 서비스 이름
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api", // API 경로 유지
      },
      onError: (err, req, res) => {
        console.error("Proxy Error:", err);
        res.status(500).send("Proxy Error");
      },
    })
  );
};
