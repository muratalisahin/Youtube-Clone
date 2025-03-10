import axios from "axios";

const api = axios.create({
    baseURL:"https://yt-api.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'f883fcd567mshc7950d5e1e81018p1daff4jsn12eba6ebe2be',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }
   
    // headers: {
    //     'x-rapidapi-key': '050fb30c86mshcc86268b494664ap192a04jsnb20b2c780357',
    //     'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    // },
});

export default api;