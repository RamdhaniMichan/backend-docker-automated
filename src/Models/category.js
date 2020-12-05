const db = require("../Config/db");

const category = {};

category.get = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM public.category")
    .then((res) => {
      if (res.rows.length === 0) {
        resolve("Data Not Found");
      } else {
        resolve(res.rows);
      }
    })
    .catch((err) => reject(err));
});

category.add = (data) => new Promise((resolve, reject) => {
  db.query(`INSERT INTO public.category(name) VALUES ('${data.name}')`)
    .then(resolve(data))
    .catch((err) => reject(err));
});

category.update = (data) => new Promise((resolve, reject) => {
  db.query(`UPDATE public.category SET name = '${data.name}' WHERE id = ${data.id}`)
    .then(resolve(data))
    .catch((err) => reject(err));
});

category.del = (id) => new Promise((resolve, reject) => {
  db.query(`DELETE FROM public.category WHERE ${id}`)
    .then(resolve(id))
    .catch((err) => reject(err));
});

module.exports = category;
