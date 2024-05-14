import axios from "axios";

const API_URL = "http://localhost:5000";

/* 
    INSTRUCTION: 
    - Create a function to fetch games from the API. 
    - API call may include query parameters for pagination, search, genre, and sort. 
*/
export const fetchGames = async (searchQuery, genre, sort, limit, page) => {
    // Define parameters for the API request
    let params = {
        search: searchQuery,
        genre: genre,
        limit: limit,
        page: page,
    };

    if ( sort !== "" ) {
        params.sort = sort;
      }
      

    const query = new URLSearchParams(params);
    
    const response = await axios.get(`${API_URL}/games?${query.toString()}`);
    
    return response.data;  
};

/* INSTRUCTION: Create a function to fetch genres from the API */
export const fetchGenres = async () => {
    // Make GET request to the API to fetch types
    const response = await axios.get(`${API_URL}/genres`);
    
    // Return the data fetched from the API
    return response.data;
};
