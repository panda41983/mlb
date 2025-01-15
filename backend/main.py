from fastapi import FastAPI

app = FastAPI()

@app.get("/api/player")
async def get_player(name: str):
    return {"name": name, "team": "Example Team", "stats": "100"}
