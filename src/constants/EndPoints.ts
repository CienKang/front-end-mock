export const BACKEND_URL = 'http://localhost:8080/';

export const GET_ALL_SONGS_DATA = {
    url: 'api/records',
    method: 'get',
};

export const GET_LIKES_OF_SONG = (songId: string) => ({
    url: `api/records/${songId}/likes`,
    method: 'get',
});

export const UPDATE_A_SONG = (songId: string) => ({
    url: `api/records/${songId}/likes`,
    method: 'patch',
});

export const authToken = 'Bearer QWlzaHdhcnlhIE4=';