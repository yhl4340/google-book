// GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
// api -- AIzaSyBBwRGK36ppBI1vuGJGi4qjriZfg60vFKA
// https://www.googleapis.com/books/v1/volumes?q=search+terms
// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

import axios from 'axios';
const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    // get all saved
    getAll: function(){
        console.log('got all')
        return axios.get('/api/all');
    },
    delBook: function(id){
        console.log('gone',id)
        return axios.delete('/api/delbook/' + id);
    },
    saveBook: function(data){
        console.log('data',data)
        return axios.post('/api/book',data )
    },
    search: function(query){
        return axios.get(baseUrl+ query);
        console.log('getting anything?');
    }
};
