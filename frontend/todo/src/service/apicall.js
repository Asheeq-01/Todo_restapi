import axios from 'axios';

export async function gettodo() {
    return await axios.get('http://127.0.0.1:8000/todos/')
}