import { getExternalMatches } from './external-match.service';
import { IMatch } from '../interfaces/match.interface';

export async function getMatches(): Promise<IMatch[]> {
    const externalMatches = await getExternalMatches();

    if(!externalMatches) {        
        return [];
    }

    return externalMatches.matches.map(match => {
        return {
            team1: match.team1,
            team2: match.team2,
            date: new Date(match.date)
        };   
    });
}