const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usersRoutes");
const authRouter = require("./routes/authRoutes");
const entriesRouter = require("./routes/entriesRoutes");
const organizationRoutes = require("./routes/organizationsRoutes");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/organizations", organizationRoutes);
app.use("/api/v1/users", usersRouter);

app.use("/api/v1/", entriesRouter);

app.use("/api/v01/", [usersRouter, authRouter, organizationRoutes]);
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
  res.status(err.status || 500);
  res.json({
    message: err?.message||"Error desconocido",
    details:err?.details || "Sin detalles"  });
});

module.exports = app;
