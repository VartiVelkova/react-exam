import * as request from './requester.js';

const baseURL = 'http://localhost:3030/jsonstore/data';

export const like = (userId, fishId) => request.post(`${baseURL}/likes`, {userId, fishId});

export const getFishLikes = (fishId) => {
    const query = encodeURIComponent(`fishId="${fishId}"`);

    return request.get(`${baseURL}/likes?select=userId&where=${query}`)
    .then(res => res.map(x => x.userId))
};