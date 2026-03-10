import React, { useState, useEffect } from "react";
import MatchCard from "./MatchCard";

function MatchSlider() {

const [liveMatch, setLiveMatch] = useState({
series:"Final • ICC Men's T20 World Cup 2026",
type:"T20I",
team1:"IND",
score1:"255-5 (20)",
team2:"NZ",
score2:"159 (19)",
result:"India won by 96 runs"
});

const matches = [
{
series:"Only Test • India Women tour of AUS",
type:"Test",
team1:"INDW",
score1:"198 & 149",
team2:"AUSW",
score2:"323 & 28-0",
result:"Australia Women won by 10 wkts"
},
{
series:"2nd ODI • Zimbabwe Women tour",
type:"ODI",
team1:"ZIMW",
score1:"102 (29.1)",
team2:"NZW",
score2:"106-2 (16.2)",
result:"New Zealand Women won by 8 wkts"
},
{
series:"2nd Semi Final • ICC Men's T20 WC",
type:"T20I",
team1:"IND",
score1:"253-7 (20)",
team2:"ENG",
score2:"246-7 (20)",
result:"India won by 7 runs"
}
];

useEffect(() => {

const socket = new WebSocket("ws://172.74.0.87:3000"); 
// replace with your friend's IP

socket.onopen = () => {
console.log("Connected to WebSocket server");
};

socket.onmessage = (event) => {

const data = JSON.parse(event.data);

console.log("received data :",data);

setLiveMatch(prev => ({
...prev,
team1: data.team,
score1: data.score
}));

};

return () => socket.close();

}, []);

return (

<div className="match-slider">

{/* LIVE CARD */}
<MatchCard match={liveMatch} />

{/* STATIC CARDS */}
{matches.map((match,index)=>(
<MatchCard key={index} match={match}/>
))}

</div>

)

}

export default MatchSlider;