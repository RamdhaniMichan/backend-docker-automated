const db = require("../Config/db");
require("../Controllers/product");

const product = {};

product.get = () => new Promise((resolve, reject) => {
  db.query("SELECT * FROM public.product ORDER BY id DESC")
    .then((res) => {
      if (res.rows.length === 0) {
        resolve("Data Not Found");
      } else {
        resolve(res.rows);
      }
    })
    .catch((err) => reject(err));
});

product.getByName = (name) => new Promise((resolve, reject) => {
  db.query(`SELECT * FROM public.product WHERE name LIKE '%${name}%'`)
    .then((res) => {
      resolve(res.rows);
    })
    .catch((err) => reject(err));
});

product.findBy = (queryCategory, queryPrice, querySort, orderBy = "id") => new Promise((resolve, reject) => {
  db.query(`SELECT *
            FROM product
            INNER JOIN category ON (product.idfood = category.id)
            WHERE category.category = '${queryCategory}' OR product.price = '${queryPrice}'
            ORDER BY product.${orderBy} ${querySort}`)
    .then((res) => {
      resolve(res.rows);
    })
    .catch((err) => reject(err));
});

product.add = (data) => new Promise((resolve, reject) => {
  db.query(`INSERT INTO public.product(name, description, price, image, idfood) 
            VALUES ('${data.name}', '${data.description}', ${data.price}, '${data.image}', ${data.idfood})`)
    .then(resolve(data))
    .catch((err) => reject(err));
});

product.update = (data) => new Promise((resolve, reject) => {
  db.query(`UPDATE public.product SET name = '${data.name}', description = '${data.description}', price = ${data.price}, image = '${data.image}' WHERE id = ${data.id}`)
    .then(resolve(data))
    .catch((err) => { reject(err); });
});

product.del = (id) => new Promise((resolve, reject) => {
  db.query(`DELETE FROM public.product WHERE id = ${id}`)
    .then(resolve(id))
    .catch((err) => reject(err));
});

module.exports = product;
