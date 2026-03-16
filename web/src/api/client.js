const BASE_URL = 'http://localhost:3010/api'

export const getAllLaunchers = async (path) => {
    try {
        const response = await fetch(`${BASE_URL}/${path}`);
        if (!response.ok) {
            throw new Error('Failed to fetch launcher');
        }

        const data = await response.json();
        return data
    } catch (error) {
        return error.message;
    }
}

export const getLaunchersById = async (path, id) => {
    const response = await fetch(`${BASE_URL}/${path}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch launcher');
    }

    const data = await response.json();
    return data

}

export const deleteLaunchers = async (path, id) => {
    const response = await fetch(`${BASE_URL}/${path}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to fetch launcher');
    }
    return await response.json();

}

export const createLaunchers = async (path, launcher) => {
    const response = await fetch(`${BASE_URL}/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(launcher)
    });
    return await response.json()
}