const bcrypt = require("bcryptjs");
const users = [
  {
    name: "admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456789", 10),
    isAdmin: true,
  },
  {
    name: "John smith",
    email: "John@example.com",
    password: bcrypt.hashSync("123456789", 10),
  },
  {
    name: "James Blake",
    email: "James@example.com",
    password: bcrypt.hashSync("123456789", 10),
  },
];
export default users;
