import { Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import EnvVariable from '../config';

function AuthMiddleware(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>> {
  const token: string | undefined = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token not provided.' });
  }
  
  try {
    const tokenValue = token.startsWith('Bearer ') ? token.slice(7) : token;
    
    const decodedToken: any = jwt.verify(tokenValue, EnvVariable.JWT_SECRET_KEY);
    res.locals.user = decodedToken;
    next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ error: 'Invalid token.' });
    }

    if (error instanceof TokenExpiredError) {
      return res.status(401).json({ error: 'Token has expired.' });
    }
    return res.status(500).json({ error: 'Internal server error.' });
  }
}

export default AuthMiddleware;
