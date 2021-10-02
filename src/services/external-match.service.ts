import { get } from './http.service';
import { IExternalMatch } from '../interfaces/external-match.interface';

export async function getExternalMatches(): Promise<IExternalMatch | null> {
    try {
        return await get<IExternalMatch>(process.env['EXTERNAL_API_HOST'] as string);        
    } catch(error) {        
        console.log(error);
    }
    return null;
}