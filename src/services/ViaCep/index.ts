import { viaCepApi } from '../api';

export async function findByCep( txCep : string) {
     const response = await viaCepApi.get(`${txCep}/json`);
     return response.data;
}