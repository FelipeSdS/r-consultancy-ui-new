import axios from 'axios';

export const viaCepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
})

export const rConsultancyApi = axios.create({
    baseURL: 'https://r-consultancy-api.herokuapp.com/',
})