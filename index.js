const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server connected');
});

app.post('/task', async (req, res) => {
    try {
        const task = await prisma.task.create({
            data: {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                priority: req.body.priority,
                date: new Date(req.body.date),
            }
        });

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating task" });
    }
});

app.get('/task', async (req, res) => {
    try {
        let tasks = [];

        if (req.query) {
            tasks = await prisma.task.findMany({
                where: {
                    status: req.query.status,
                    priority: req.query.priority,
                }
            });
        } else {
            tasks = await prisma.task.findMany();
        }

        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error listing task" });
    }
});

app.put('/task/:id', async (req, res) => {
    try {
        const task = await prisma.task.update({
            where: {
                id: req.params.id,
            },
            data: {
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                priority: req.body.priority,
                date: new Date(req.body.date),
            }
        });

        res.status(200).json({ message: "Task deleted successfully", task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating task" });
    }
});

app.delete('/task/:id', async (req, res) => {
    try {
        const tasks = await prisma.task.delete({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting task" });
    }
});