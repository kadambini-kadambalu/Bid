import axios from "axios"

export const getMatches = async () => {

const response = await axios.get(
"https://api.cricapi.com/v1/currentMatches"
)

return response.data

}