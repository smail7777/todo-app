const express = require("express");
const todoController = require("../controllers/todoController");

const router = express.Router();

// Route pour afficher tous les todos
router.get("/", todoController.getAllTodos);

// Route pour afficher un todo spécifique
router.get("/:id", todoController.getTodoById);

// Routes pour ajouter un nouveau todo
router.post("/", todoController.addTodo);

// Routes pour basculer l'état d'un todo
router.post("/:id/toggle", todoController.toggleTodoStatus);

// Routes pour éditer un todo
router.get("/:id/edit", todoController.getEditTodoForm);
router.post("/:id/update", todoController.updateTodo);

// Route pour supprimer un todo
router.post("/:id/delete", todoController.deleteTodo);

// Endpoint API pour basculer l'état d'un todo
router.get("/api/:id/toggle", todoController.toggleTodoStatusAPI);

module.exports = router;