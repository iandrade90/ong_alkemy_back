const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const usersRoutes = require('./routes/usersRoutes')
const authRoutes = require('./routes/authRoutes')
const entriesRoutes = require('./routes/entriesRoutes')
const organizationRoutes = require('./routes/organizationsRoutes')
const activityRoutes = require('./routes/activityRoutes')
const slideRoutes = require('./routes/slideRoute')
const testimonialsRoutes = require('./routes/testimonialsRoutes')
const contactsRouter = require('./routes/contactsRoutes')
const membersRoutes = require('./routes/membersRoutes')
const categoriesRoutes = require('./routes/categoriesRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const donation = require('./routes/mercadopagoRoutes')

const app = express()
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(fileUpload())

app.use('/api/v1/', [
  entriesRoutes,
  authRoutes,
  organizationRoutes,
  usersRoutes,
  slideRoutes,
  activityRoutes,
  testimonialsRoutes,
  membersRoutes,
  contactsRouter,
  categoriesRoutes,
  categoryRoutes,
  donation,
])

// // catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// // error handler
app.use(function (err, req, res, next) {
  //   // set locals, only providing error in development
  //   console.log(err)
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  //   // render the error page
  res.status(err.status || 500)
  res.json({
    message: err?.message || 'Error desconocido',
    details: err?.details || 'Sin detalles',
  })
})
module.exports = app
