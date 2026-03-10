import mysql.connector

db = mysql.connector.connect(
    host="172.74.0.76",
    user="sadriya",
    password="password",
    database="auction"
)

cursor = db.cursor()

cursor.execute("SELECT id, name, amount FROM bidding")

rows = cursor.fetchall()

for row in rows:
    print("ID:", row[0], "Name:", row[1], "Amount:", row[2])