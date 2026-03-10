import React from "react"
import MatchCard from "../components/MatchCard"

function Matches(){

return(

<div className="container">

<h2>Upcoming Matches</h2>

<MatchCard
team1="India"
team2="New Zealand"
status="Tomorrow"
/>

<MatchCard
team1="South Africa"
team2="Sri Lanka"
status="Today"
/>

</div>

)

}

export default Matches