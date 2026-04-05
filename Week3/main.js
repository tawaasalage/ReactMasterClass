// import { fetchUsers as fUsers, fetchCompanies } from "./util.js";
import fetchUsers from "./util.js";

const [users] = await Promise.all([fetchUsers()]);
console.log(users.length);
// console.log(companies.length);
