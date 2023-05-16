import {db} from '../db.js'


export const getLeaders1 = (req, res)=>{
    const q = "SELECT * FROM clue1 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,data)=>{
        if(err) return res.send(err)

        return res.status(200).jsonn(data);
    })
}
export const getLeaders2 = (req, res)=>{
    const q = "SELECT * FROM clue2 ORDER BY `score` DESC LIMIT 10"
}
export const getLeaders3 = (req, res)=>{
    const q = "SELECT * FROM clue3 ORDER BY `score` DESC LIMIT 10"
}
export const getLeaders4 = (req, res)=>{
    const q = "SELECT * FROM clue4 ORDER BY `score` DESC LIMIT 10"
}
export const getLeaders5 = (req, res)=>{
    const q = "SELECT * FROM clue5 ORDER BY `score` DESC LIMIT 10"
}
export const getLeaders6 = (req, res)=>{
    const q = "SELECT * FROM clue6 ORDER BY `score` DESC LIMIT 10"
}
export const getLeader = (req, res)=>{
    res.json("from controller")
}