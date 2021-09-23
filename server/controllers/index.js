const Transaction = require('../model/model');

const getTransaction = async (req, res) => {
  try {
    const budget = await Transaction.find();
    res.status(200);
    res.send(budget);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const postTransaction = async (req, res) => {
  const account_balance = req.body.account_balance;
  const category = req.body.category;
  const amount = req.body.amount;
  const description = req.body.description;
  const created = req.body.created;
  try {
    const transaction = await Transaction.create({
      account_balance,
      category,
      amount,
      description,
      created,
    });
    res.status(200);
    res.send(transaction);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
};

const deleteTransaction = async (req, res) => {
  const id = req.body.id;
  console.log(id);
  Transaction.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    console.log('done');
    res.status(200).send();
  });
};

module.exports = { getTransaction, postTransaction, deleteTransaction };