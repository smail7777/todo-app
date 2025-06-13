const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Todo = require('../models/todoModel');

// Connecter à la base de données avant tous les tests
beforeAll(async () => {
  // Assurez-vous que la connexion est établie
  await mongoose.connection.asPromise();
});

// Nettoyer la base de données après chaque test
afterEach(async () => {
  await Todo.deleteMany({});
});

// Fermer la connexion après tous les tests
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Todo Routes', () => {
  // Test pour vérifier que la page d'accueil redirige vers /todos
  test('GET / should redirect to /todos', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe('/todos');
  });

  // Test pour vérifier que la page des todos s'affiche correctement
  test('GET /todos should display todos page', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Liste des Todos');
  });

  // Test pour vérifier qu'on peut ajouter un todo
  test('POST /todos should create a new todo', async () => {
    const todoData = {
      title: 'Test Todo',
      description: 'This is a test todo'
    };

    const response = await request(app)
      .post('/todos')
      .send(todoData)
      .expect(302); // Redirection après création

    // Vérifier que le todo a été créé dans la base de données
    const todos = await Todo.find({});
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe(todoData.title);
    expect(todos[0].description).toBe(todoData.description);
    expect(todos[0].completed).toBe(false);
  });

  // Test pour vérifier qu'on peut basculer l'état d'un todo via l'API
  test('GET /todos/api/:id/toggle should toggle todo status', async () => {
    // Créer un todo pour le test
    const todo = await Todo.create({
      title: 'Test Toggle',
      description: 'Testing toggle functionality',
      completed: false
    });

    // Appeler l'API pour basculer l'état
    const response = await request(app)
      .get(`/todos/api/${todo._id}/toggle`)
      .expect(200);

    // Vérifier la réponse
    expect(response.body.success).toBe(true);
    expect(response.body.todo.completed).toBe(true);

    // Vérifier que l'état a été mis à jour dans la base de données
    const updatedTodo = await Todo.findById(todo._id);
    expect(updatedTodo.completed).toBe(true);
  });
});