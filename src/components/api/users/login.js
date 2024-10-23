// api/users/login.js
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../../utils/db'; // Your database connection

export default async function handler(req, res) {
  const { email, password } = req.body;

  // Fetch the user from the database
  const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) return res.status(404).json({ message: 'User not found' });

  // Compare the password
  const validPassword = await compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

  // Create a JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Send the token
  res.status(200).json({ token });
}
