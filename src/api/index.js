// Config
import { root } from './config';

export const api = Object.freeze({
    weather: {
        fetch: () => {
            return fetch(`${root}`, {
                method: 'GET',
            })
        },
    },
});
