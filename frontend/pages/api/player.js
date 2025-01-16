export default async function handler(req, res) {
    const { name } = req.query;
    const response = await fetch(`http://127.0.0.1:8000/api/player?name=${name}`);
    const data = await response.json();
    res.status(200).json(data);
  }