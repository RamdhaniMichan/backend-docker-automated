const db = require("../Config/db");

const history = {};

history.get = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM public.history ORDER BY id ASC")
    .then((res) => {
      if (res.rows.length === 0) {
        resolve("Data Not Found");
      } else {
        resolve(res.rows);
      }
    })
    .catch((err) => reject(err));
});

history.add = (data) => new Promise((resolve, reject) => {
  console.log(data);
  db.query(`INSERT INTO public.history(chasier, amount, orders) VALUES ('${data.chasier}', ${data.amount}, '${data.orders}')`)
    .then(resolve(data))
    .catch((err) => reject(err));
});

history.getTotal = () => new Promise((resolve, reject) => {
  db.query("SELECT COUNT(orders) FROM public.history")
    .then((res) => resolve(res.rows))
    .catch((err) => reject(err));
});

history.getAmount = () => new Promise((resolve, reject) => {
  db.query("SELECT SUM(amount) FROM public.history")
    .then((res) => resolve(res.rows))
    .catch((err) => reject(err));
});

module.exports = history;
