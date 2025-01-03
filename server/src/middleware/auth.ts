import  { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers['authorization'];

  if (authHeader) {
    const token = authHeader && authHeader.split(' ')[1];
    const secretKey = process.env.JWT_SECRET_KEY as string;

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).send('Forbidden');
      }

      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.status(401).send('Unauthorized');
  }
};
