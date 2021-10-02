import axios from 'axios';

export async function get<T>(url: string): Promise<T> {
    try {
        const res = await axios.get(url);
        
        return res.data as T;
    } catch(error) {        
        throw error;
    }
}