const router = require('express').Router();
const {
  getTransaction,
  postTransaction,
  deleteTransaction,
} = require('./controllers/index');

router.get('/transaction', getTransaction);
router.post('/transaction', postTransaction);
router.delete('/transaction', deleteTransaction);

module.exports = router;