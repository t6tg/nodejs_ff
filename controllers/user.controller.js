import fetch from 'node-fetch'
/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
export const Login = (req, res) => {
    // const { username, password } = req.query
    // loc->8080/api/v1/users/login/james/12335
    // const {username,password} = req.params
    const { username, password } = req.body
    const newPass = `${password}-onePoint`
    res.json({
        username,
        newPass,
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

export default { Login, Users }
