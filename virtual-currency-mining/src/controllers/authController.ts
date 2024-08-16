import { Request, Response } from 'express';
import {registerUser, loginUser} from '../services/authService'






export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unexpected error occurred' });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const { user, token } = await loginUser(username, password);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(401).json({ message: error.message });
    } else {
      res.status(401).json({ message: 'An unexpected error occurred' });
    }
  }
};

export default { register, login };
