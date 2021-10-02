export interface IExternalMatchData {
    round:string;
    date: string;
    team1: string;
    team2: string;
}

export interface IExternalMatch {
    name: string;
    matches: IExternalMatchData[];
}