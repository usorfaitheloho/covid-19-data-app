import axios from 'axios';

const apiUrl = 'https://api.covid19tracking.narrativa.com/api/';

export default axios.create({
    baseURl: apiUrl,
    headers: {
        'Content-type': 'application/json',
    },
});