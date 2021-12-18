const baseURL = 'http://localhost:3030';

export const login = async (email, password) =>{
    let res = await fetch(`${baseURL}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = await res.json();

    if(res.ok){
        return jsonResult;
    } else {
        throw jsonResult.message
    }
};

export const register = (email, password) => {
    return fetch(`${baseURL}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({email, password})
   })
   .then(res => res.json())
};

export const logout = (token) =>{
    return fetch(`${baseURL}/users/logout`,{
        headers: {
            'X-Authorizacion': token
        }
    })
};

export const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};