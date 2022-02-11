import Cliente from '../../models/Cliente/Cliente';
import { rConsultancyApi } from '../api';


export async function findAllClients() {
    const response =  await rConsultancyApi.get('/cliente');
    return response.data;
}

export async function findByIdClient(id : number) {
    const response =  await rConsultancyApi.get(`/cliente/${id}`);
    return response.data;
}

export async function deleteById(id : number) {
    return new Promise((resolve, reject) =>
    rConsultancyApi
        .delete(`/cliente/${id}`)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            if ('message' in error.response.data) reject(error.response.data.message);
            else reject(error.response.data.error);
        }),
);
}

export  function createNewClient( cliente : Cliente) {
    return new Promise((resolve, reject) =>
        rConsultancyApi
            .post('/cliente', cliente)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                if ('message' in error.response.data) reject(error.response.data.message);
                else reject(error.response.data.error);
            }),
  );
}