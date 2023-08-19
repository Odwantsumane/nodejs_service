import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:7800/test';
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const form = document.getElementById('form');
        const axios1 = ax;

        // class UserService {

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            getUsers();
        });
            
        function getUsers() {
            // return axios.post(USERS_REST_API_URL);
            console.log("hello")
            axios.post(USERS_REST_API_URL,{username: username,email: email}).then(
                function(response) {
                    console.log(response);
                    return(response);
                }).catch(function(error){console.log(error); return error});
        };

// export default new UserService();