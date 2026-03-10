import asyncio
import websockets
import json

clients = set()

async def handler(websocket):
    clients.add(websocket)
    print("Client connected")

    try:
        async for message in websocket:
            data = json.loads(message)

            item = data["item"]
            price = data["price"]

            print("Auction started:", item, price)

            response = json.dumps({
                "item": item,
                "price": price
            })

            for client in clients:
                await client.send(response)

    except:
        print("Client disconnected")

    finally:
        clients.remove(websocket)

async def main():
    server = await websockets.serve(handler, "0.0.0.0", 5000)
    print("Server started")
    await server.wait_closed()

asyncio.run(main())