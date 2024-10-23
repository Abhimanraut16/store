// api/users/signup.js
import { hash } from 'bcryptjs';
import { validate } from 'joi';
import db from '../../utils/db'; // Your database connection

const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().required(),
});

export default async function handler(req, res) {
  const { email, password, username } = req.body;

  // Validate input
  const { error } = signupSchema.validate({ email, password, username });
  if (error) return res.status(400).json({ message: error.details[0].message });

  // Hash the password
  const hashedPassword = await hash(password, 12);

  // Save the user to the database
  await db.query(
    'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
    [email, hashedPassword, username]
  );

  res.status(200).json({ message: 'Signup successful' });
}
