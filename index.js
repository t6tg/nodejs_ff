import express from 'express'
import user_route from './routes/user.route.js'
import bodyParser from 'body-parser'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
import swaggerUi from 'swagger-ui-express'
const swaggerDocument = require('./swagger.json')
import cors from 'cors'

const app = express()
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, { explorer: true })
)
app.use('/api/v1/users', user_route)

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})
