import AppConfig from '../config/AppConfig';
import axios from 'axios';
const {timeOut} = AppConfig;

async function getPosts() {
    const { postsURL } = AppConfig;
    try {
        const promise = await axios({
            method: "GET",
            url: postsURL,
            timeout: timeOut,
        });
        return promise;
    } catch (err) {
        return err.response;
    }
}

module.exports = {
    getPosts,
}