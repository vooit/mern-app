export default class Api {

    url = 'http://localhost:3001/api/';

    static getAllUsers() {
        return fetch(this.url).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}
