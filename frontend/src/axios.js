import axios from 'axios'

const getAPI = axios.create({
    baseURL:'http://172.0.0.1:8000',
    timeout:1000,
})

export{getAPI}