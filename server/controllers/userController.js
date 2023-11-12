import fetch from "node-fetch"

export const getUsers = async (req, res) => {
    const response = await fetch(`https://api.github.com/users/github`);
    const resData = await response.json()
    res.status(200).json(resData)
}

export const getUser = async (req, res) => {
    const response = await fetch(`https://api.github.com/users/${req.params.id}`);
    const resData = await response.json();
    console.log(resData)
    res.status(200).json(resData)

}