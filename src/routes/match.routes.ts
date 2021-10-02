import express from 'express';
import { getMatches } from '../services/match.service';

const router = express.Router();

router.get('', async (req, res) => {
    const matches = await getMatches();
    if(matches.length > 0) {
        res.status(200).send(matches);
    } else {
        res.status(204).send();
    }
});

export default router;