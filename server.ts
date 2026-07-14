import express from "express";
import path from "path";

async function startServer() {
  const app = express();
  // Standard port assignment, supports deployment environment port injection
  const PORT = process.env.PORT || 3000;

  // Use Vite middleware in development
  if (process.env.NODE_ENV !== "production") {
    // Dynamic import to prevent loading Vite in production
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, server.cjs is in the 'dist' directory, so __dirname refers to 'dist'
    app.use(express.static(__dirname));
    
    // SPA fallback
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "index.html"));
    });
  }

  app.listen(PORT as number, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
