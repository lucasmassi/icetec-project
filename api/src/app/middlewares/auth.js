import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const userHeader = req.headers.authorization;

  if (!userHeader) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  const [, token] = userHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
