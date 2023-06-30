import { Request, Response } from 'express';

import db from '../db-func';

export async function get(req: Request, res: Response): Promise<Response> {
  try {
    const coaches = await db.getCoaches();
    return res.status(200).json(coaches);
  } catch (e) {
    return res.status(500).json({ message: `could not get coaches: ${e}` });
  }
}

export default {
  get,
};
