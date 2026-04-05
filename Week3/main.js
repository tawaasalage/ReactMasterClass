import { fetchUsers as fUsers, fetchCompanies } from "./util.js";

const [users, companies] = await Promise.all([fUsers(), fetchCompanies()]);
console.log(users.length);
console.log(companies.length);
