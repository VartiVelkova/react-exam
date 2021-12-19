import * as request from './requester.js';

const baseURL = 'http://localhost:3030/jsonstore/data';

export const getAll = () => request.get(`${baseURL}/fishing`);

export const getMyFish = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseURL}/fishing?where=${query}`)
};

export const getOne = (fishId, signal) => {
    return fetch(`${baseURL}/fishing/${fishId}`, { signal })
    .then(res => res.json())
};

export const create = async (fishData, token) => {
    let response = await fetch(`${baseURL}/fishing`,{
        method:'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...fishData, likes: []})
    });

    let result = await response.json();

    return result;
};

export const edit = (fishId, data) => request.put(`${baseURL}/fishing/${fishId}`, data);

export const deleteFish = (fishId, token) => {
    return fetch(`${baseURL}/fishing/${fishId}`, {
        method: 'DELETE',
        headers : {
            'X-Authorization': token
        }
    })
    .then(res => res.json())
};

export const like = (fishId, fish, token) => {
    return fetch(`${baseURL}/fishing/${fishId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token  
        },
        body: JSON.stringify(fish)
    })
    .then(res => res.json())
};

