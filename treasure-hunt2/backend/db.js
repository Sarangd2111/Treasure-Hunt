import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ssd@1234567890",
    database:"treasure_hunt"
})

// export default db

