import { authenticateToken } from '../../middleware/auth';

export default function handler(req, res) {
  authenticateToken(req, res, () => {
    res.status(200).json({ message: 'Protected content' });
  });
}
