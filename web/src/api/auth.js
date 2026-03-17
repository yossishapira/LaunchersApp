const BASE_URL = 'http://localhost:3010/api'


export const login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username,password})
    });
    return await response.json()
}