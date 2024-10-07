import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/task.routes.js";
import sequelize from "./database.js";

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use("/tasks", taskRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("🚀 Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });
