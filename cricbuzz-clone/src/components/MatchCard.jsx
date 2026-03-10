import React from "react";

function MatchCard({match}) {

return (

<div className="match-card">

<div className="series">
{match.series}
<span className="badge">{match.type}</span>
</div>

<div className="team-row">
<span>{match.team1}</span>
<span className="score">{match.score1}</span>
</div>

<div className="team-row">
<span>{match.team2}</span>
<span className="score">{match.score2}</span>
</div>

<div className="result">
{match.result}
</div>

<div className="match-links">
<span>FORECAST</span>
<span>TABLE</span>
<span>SCHEDULE</span>
</div>

</div>

)

}




export default MatchCard