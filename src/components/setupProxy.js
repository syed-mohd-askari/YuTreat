// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api', // This is the endpoint you'll use in your app
      createProxyMiddleware({
        target: 'https://www.swiggy.com', // The target URL you want to access
        changeOrigin: true,
        pathRewrite: { '^/api': '' }, // Rewrite URL
      })
    );
  
    // If you want to specifically handle requests to IMG_URL as well
    app.use(
      '/img', // You can create a specific endpoint for images
      createProxyMiddleware({
        target: 'https://media-assets.swiggy.com', // Image asset URL
        changeOrigin: true,
        pathRewrite: { '^/img': '' }, // Remove /img from the path
      })
    );
  };