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
  db.query(`INSERT INTO public.history(invoice, chasier, amount, date, orders) VALUES (${data.invoice}, '${data.chasier}', ${data.amount}, ${data.date}), '{"${data.orders}"}'`)
    .then(resolve(data))
    .catch((err) => reject(err));
});

module.exports = history;
