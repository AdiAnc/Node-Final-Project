const axios = require('axios');


exports.GetAllMovies =  () =>
{
    return  axios.get("https://api.tvmaze.com/shows")
 
}


// GetAllMovies().then(data => {console.log(data)})

