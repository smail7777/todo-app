const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const todoRoutes = require("./routes/todoRoutes");
const connectDB = require('./config/database');

// Connect to database
connectDB();

const app = express();

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set up express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Pour les requêtes API

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/todos", todoRoutes);

// Redirect root to todos
app.get("/", (req, res) => {
  res.redirect("/todos");
});

module.exports = app;