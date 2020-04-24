import nextConnect from 'next-connect';
import bcrypt from 'bcryptjs';
import middleware from '../../middlewares/middleware';
import { extractUser } from '../../lib/api-helpers';

const handler = nextConnect();

handler.use(middleware);

// POST /api/users
handler.post(async (req, res) => {
    console.log(req.body);
  const { name, password } = req.body;
  const email = req.body.email;
  if (!email || email === "") {
    res.status(400).send('The email you entered is invalid.');
    return;
  }
  if (!password || !name) {
    res.status(400).send('Missing field(s)');
    return;
  }
  // check if email existed
  if ((await req.db.collection('MRTUsers').countDocuments({ email })) > 0) {
    res.status(403).send('The email has already been used.');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await req.db
    .collection('MRTUsers')
    .insertOne({ email, password: hashedPassword, name })
    .then(({ ops }) => ops[0]);
  req.logIn(user, (err) => {
    if (err) throw err;
    // when we finally log in, return the (filtered) user object
    res.status(201).json({
      user: extractUser(req),
    });
  });
});

export default handler;