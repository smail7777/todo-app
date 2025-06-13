const mongoose = require('mongoose');
const Todo = require('../../models/todoModel');
const connectDB = require('../../config/database');

const seedTodos = [
  { 
    title: "Apprendre Express", 
    description: "Étudier les bases d'Express.js", 
    completed: false 
  },
  {
    title: "Créer une application MVC",
    description: "Implémenter une architecture MVC avec Express",
    completed: true,
  },
  {
    title: "Ajouter des formulaires",
    description: "Apprendre à gérer les formulaires avec Express",
    completed: false,
  },
];

const seedDB = async () => {
  try {
    await connectDB();
    
    // Supprimer tous les todos existants
    await Todo.deleteMany({});
    console.log('Todos supprimés');
    
    // Ajouter les nouveaux todos
    await Todo.insertMany(seedTodos);
    console.log('Todos ajoutés');
    
    // Fermer la connexion
    mongoose.connection.close();
  } catch (error) {
    console.error(`Erreur: ${error.message}`);
    process.exit(1);
  }
};

seedDB();