const BASE_URL = 'http://localhost:3010/api'


export const createUser = async (userData, token) => {
    const response = await fetch(`${BASE_URL}/auth/register/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','authorization':token},
        body: JSON.stringify(userData)
    });
    return await response.json()
}