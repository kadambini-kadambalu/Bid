from fastapi import FastAPI, WebSocket
from sqlalchemy.orm import Session
from database import engine, SessionLocal, Base
from models import Auction

app = FastAPI()

Base.metadata.create_all(bind=engine)

clients = []

def get_db():
    return SessionLocal()


@app.post("/start-auction")
def start_auction(item: str, price: int):

    db: Session = get_db()

    auction = Auction(
        item=item,
        current_price=price,
        highest_bidder="None"
    )

    db.add(auction)
    db.commit()

    return {"message": "Auction Started"}


@app.get("/auction")
def get_auction():

    db = get_db()

    auction = db.query(Auction).first()

    return {
        "item": auction.item,
        "price": auction.current_price,
        "bidder": auction.highest_bidder
    }


@app.post("/bid")
async def place_bid(name: str, amount: int):

    db = get_db()

    auction = db.query(Auction).first()

    if amount > auction.current_price:

        auction.current_price = amount
        auction.highest_bidder = name
        db.commit()

        for client in clients:
            await client.send_text(f"New High Bid: {amount} by {name}")

        return {"message": "Bid Accepted"}

    return {"message": "Bid Too Low"}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):

    await websocket.accept()
    clients.append(websocket)

    while True:
        await websocket.receive_text()