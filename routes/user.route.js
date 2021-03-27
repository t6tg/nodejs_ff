import express from 'express'
import { Login, Users, Graph } from '../controllers/user.controller.js'
const user_route = express.Router()

user_route.post('/login', (req, res) => Login(req, res))
user_route.post('/graph', (req, res) => Graph(req, res))
user_route.get('/:id', (req, res) => Users(req, res))

export default user_route
