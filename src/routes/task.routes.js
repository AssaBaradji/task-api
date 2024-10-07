import { Router } from "express";
import Task from "../models/task.model.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

router.get("/", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
});

router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).send("Task not found");

    await task.update(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (!task) return res.status(404).send("Task not found");

    await task.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

export default router;
