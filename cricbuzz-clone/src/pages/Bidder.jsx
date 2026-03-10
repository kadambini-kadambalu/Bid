import React, { useState, useEffect } from "react";

function Bidder() {

const [auction,setAuction] = useState({
item:"",
price:0,
highest_bidder:""
});

const [bid,setBid] = useState("");
const [message,setMessage] = useState("");

const [socket,setSocket] = useState(null);

useEffect(()=>{

// connect to FastAPI websocket
const ws = new WebSocket("ws://192.168.1.15:8000/ws");

setSocket(ws);

ws.onopen = ()=>{
console.log("Connected to auction server");
};

ws.onmessage = (event)=>{

const data = JSON.parse(event.data);

// update auction data
setAuction(data);

};

ws.onclose = ()=>{
console.log("Disconnected from server");
};

return ()=>ws.close();

},[]);


const placeBid = async ()=>{

const response = await fetch("http://192.168.1.15:8000/bid",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

bid_amount:parseInt(bid),
bidder_name:"Student Bidder"

})

});

const result = await response.json();

setMessage(result.message);

setBid("");

};


return(

<div style={{padding:"40px",maxWidth:"500px",margin:"auto"}}>

<h2>Live Auction</h2>

<div style={{
border:"1px solid #ccc",
padding:"20px",
borderRadius:"10px",
marginBottom:"20px"
}}>

<h3>Item: {auction.item}</h3>

<h3>Current Price: ${auction.price}</h3>

<p>Highest Bidder: {auction.highest_bidder}</p>

</div>

<input
type="number"
placeholder="Enter your bid"
value={bid}
onChange={(e)=>setBid(e.target.value)}
style={{padding:"10px",width:"100%",marginBottom:"10px"}}
/>

<button
onClick={placeBid}
style={{
padding:"10px",
width:"100%",
background:"#1e88e5",
color:"white",
border:"none",
borderRadius:"5px"
}}
>

Place Bid

</button>

<p>{message}</p>

</div>

);

}

export default Bidder;