export default class Api {

    static getAllUsers() {
        return fetch('http://localhost:3001/api').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
