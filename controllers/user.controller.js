import fetch from 'node-fetch'
/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
export const Login = (req, res) => {
    // const { username, password } = req.query
    // loc->8080/api/v1/users/login/james/12335
    // const {username,password} = req.params
    const data = req.body
    // const newPass = `${password}-onePoint`
    console.log(data)
    res.json({
        ...data,
        gender: 'male',
    })
}

/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
export const Graph = (req, res) => {
    const { x, y } = req.body
    x.forEach((r, index) => {
        x[index] = x[index] + 10
    })
    y.forEach((r, index) => {
        y[index] = y[index] + 10
    })
    res.json({
        x,
        y,
    })
}

/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
export const Users = async (req, res) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await data.json()
    const { id } = req.params
    const value = json.filter((r) => r.company.name === id)
    res.json({
        msg: 'users',
        data: value,
    })
}

export default { Login, Users, Graph }
