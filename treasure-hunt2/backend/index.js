import express from "express"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import  cors from 'cors'
import mysql from "mysql"
import cookieParser from "cookie-parser"
import {db} from '../backend/db.js'

const app = express()
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use("/backend/auth", authRoutes);
app.use("/backend/users", userRoutes);


 
app.get("/leaderboard1",async (req,res)=>{
    const q = "SELECT * FROM clue1 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            // console.log(result)
            res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})

app.get("/leaderboard2",async (req,res)=>{
    const q = "SELECT * FROM clue2 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})

app.get("/leaderboard3",async (req,res)=>{
    const q = "SELECT * FROM clue3 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})
app.get("/leaderboard4",async (req,res)=>{
    const q = "SELECT * FROM clue4 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})
app.get("/leaderboard5",async (req,res)=>{
    const q = "SELECT * FROM clue5 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})
app.get("/leaderboard6", async (req,res)=>{
    const q = "SELECT * FROM clue6 ORDER BY `score` DESC LIMIT 10"
    db.query(q, (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(JSON.parse(JSON.stringify(result)));
        }
    })
})


app.get("/user", async (req,res)=>{
    const q = "SELECT * FROM clue1 WHERE `username` = ?";
    db.query(q,[req.body?.username],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})


app.listen(8800,()=>{
    console.log("Connected!")
})