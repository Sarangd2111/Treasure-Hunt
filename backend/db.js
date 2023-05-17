import mysql from "mysql"
const BASE_URL = process.env.REACT_APP_BASE_URL
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ssd@1234567890",
    database:"treasure_hunt"
})

// export default db

