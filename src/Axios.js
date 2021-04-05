import axios from 'axios';

const instance =axios.create({
    //http://localhost:8001
    baseURL: '  https://csv-file-uploader-india.herokuapp.com/',
    timeout: 30000,
})

export default instance;