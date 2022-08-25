const config = {
  MONGODB_USER: "adminblogapp",
  MONGODB_PASSWORD: "n1yNntmwV39t0653",
  PORT: 3000,
  BASE_URL: "/api",
  MONGODB_NAME: "blogapp-db",
  BLOG_COLLECTION: "blogs",
  USER_COLLECTION: "user",
  SERVER_SECRET: "secret-key",
};

function parseMongoDBURL() {
  return `mongodb+srv://${config.MONGODB_USER}:${config.MONGODB_PASSWORD}@cluster0.ymxnpxe.mongodb.net/?retryWrites=true&w=majority`;
}

export { config, parseMongoDBURL };
