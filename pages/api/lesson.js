import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
  const { lessonId } = req.query;
  await req.db.collection('MRTLessons').find({lessonId : parseInt(lessonId)}).next(function(err, doc) {
    res.status(201).json({lesson:doc});
  });
}
);

export default handler;