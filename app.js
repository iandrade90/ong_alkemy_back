const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const organizationRoutes = require('./routes/organizations')
const { errorMonitor } = require("events");
const slideRouter = require('./routes/slideRoute')

const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use('/api/v01/', [
  slideRouter,
  usersRouter,
  authRouter,
  organizationRoutes
])
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  // res.status(err.status || 500);
  // res.render("error");

  // Modifico la estructura del 'error handler' para debugear las validaciones y devolver un detalle de los errores
  const code = err.code || 500;
  const body = {
    error: { code: code, message: err.message, details: err.detail },
  };
  res.status(code).json(body);
});

module.exports = app;
