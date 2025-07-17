import jwt from 'jsonwebtoken';
import 'dotenv/config';

// const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // 'Bearer <token>'
  console.log(token);
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    console.log("JWT_SECRET", process.env.JWT_SECRET);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({'error': error.message });
  }
};

export default authMiddleware;
