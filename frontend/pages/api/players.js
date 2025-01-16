export default async function handler(req, res) {
    const { season } = req.query;
  
    try {
      // Call the MLB Stats API (replace with the real API endpoint)
      const response = await fetch('https://statsapi.mlb.com/api/v1/sports/1/players?season={season}');
      const data = await response.json();
  
      // Transform the data if needed, e.g., extract player names
      const players = data.map((player) => ({
        name: player.name,
      }));
  
      res.status(200).json(players);
    } catch (error) {
      console.error('Error fetching player data:', error);
      res.status(500).json({ error: 'Failed to fetch player data' });
    }
  //use backend!!!!
    const response = await fetch(`http://127.0.0.1:8000/api/player?name=${name}`);
    const data = await response.json();
    res.status(200).json(data);
  }
  