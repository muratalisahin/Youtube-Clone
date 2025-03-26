import axios from "axios";

const api = axios.create({
    baseURL:"https://yt-api.p.rapidapi.com",
    params: {
        geo: "TR",
        lang: "tr",
        
    },

    headers: {
        'x-rapidapi-key': 'fa6a67aa3amsh7a75da0a0abdc1cp117cd3jsn7de9c5d421eb',
        'x-rapidapi-host': 'yt-api.p.rapidapi.com'
    }

  
});

export default api;