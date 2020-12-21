const db = require("../Config/db");

class Users {
  async add(data) {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO public.users(email, password, role) VALUES ('${data.email}', '${data.password}', '${data.role}')`)
        .then(resolve(`${data.email} Email registered`))
        .catch((error) => reject(error));
    });
  }

  async getAll() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM public.users ORDER BY id ASC")
        .then((res) => {
          if (res.rows.length === 0) {
            resolve({ msg: "Data Not Found" });
          } else {
            resolve(res.rows);
          }
        })
        .catch((err) => reject(err));
    });
  }

  async getEmail(email) {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM public.users WHERE email = '${email}'`)
        .then((res) => {
          resolve(res.rows);
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = new Users();
