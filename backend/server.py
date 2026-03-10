import asyncio
import websockets
import json

clients = {}

async def handler(websocket):

    ip = websocket.remote_address[0]
    client_id = len(clients) + 1

    clients[websocket] = {
        "id": client_id,
        "ip": ip
    }

    print(f"Client {client_id} connected | IP: {ip}")
    print(f"Total devices connected: {len(clients)}")

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
        print(f"Client {clients[websocket]['id']} disconnected")

    finally:
        del clients[websocket]
        print(f"Total devices connected: {len(clients)}")


async def main():
    server = await websockets.serve(handler, "0.0.0.0", 3000)
    print("Server started on port 3000")
    await server.wait_closed()

asyncio.run(main())