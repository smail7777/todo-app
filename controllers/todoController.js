const Todo = require('../models/todoModel');

// Controller methods
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    
    res.render("todos/index", {
      title: "Liste des Todos",
      todos: todos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération des todos");
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).send("Todo non trouvé");
    }
    
    res.render("todos/detail", {
      title: "Détail du Todo",
      todo: todo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération du todo");
  }
};

exports.addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title || !description) {
      return res.status(400).send("Le titre et la description sont requis");
    }
    
    await Todo.create({
      title,
      description,
      completed: false
    });
    
    res.redirect("/todos");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la création du todo");
  }
};

exports.toggleTodoStatus = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).send("Todo non trouvé");
    }
    
    todo.completed = !todo.completed;
    await todo.save();
    
    res.redirect("/todos");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la mise à jour du todo");
  }
};

// Ajouter ces méthodes pour compléter le CRUD
exports.getEditTodoForm = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).send("Todo non trouvé");
    }
    
    res.render("todos/edit", {
      title: "Modifier le Todo",
      todo: todo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la récupération du todo");
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title || !description) {
      return res.status(400).send("Le titre et la description sont requis");
    }
    
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );
    
    if (!todo) {
      return res.status(404).send("Todo non trouvé");
    }
    
    res.redirect(`/todos/${todo._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la mise à jour du todo");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    
    if (!todo) {
      return res.status(404).send("Todo non trouvé");
    }
    
    res.redirect("/todos");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur lors de la suppression du todo");
  }
};

// Endpoint API pour basculer l'état d'un todo
exports.toggleTodoStatusAPI = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
      return res.status(404).json({ success: false, message: "Todo non trouvé" });
    }
    
    todo.completed = !todo.completed;
    await todo.save();
    
    res.json({ 
      success: true, 
      todo: {
        id: todo._id,
        title: todo.title,
        description: todo.description,
        completed: todo.completed
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Erreur lors de la mise à jour du todo" });
  }
};