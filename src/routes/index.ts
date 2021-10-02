import matchRoute from './match.routes';

export default function routes(app: any) {
    app.use('/api/match', matchRoute);
}