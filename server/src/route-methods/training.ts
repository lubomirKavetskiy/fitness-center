import { Request, Response } from 'express';

import db from '../db-func';

export async function get(req: Request, res: Response): Promise<Response> {
  try {
    const trainings = await db.getTrainings();
    return res.status(200).json(trainings);
  } catch (e) {
    return res.status(500).json({ message: `could not get trainings: ${e}` });
  }
}

export default {
  get,
};
