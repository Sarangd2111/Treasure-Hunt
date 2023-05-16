import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = (req, res) => {
  console.log(req.url);
  //check existing user
  const q = "SELECT * FROM user WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Captain already exists !!");
    // if (data.length) return alert("Captain already exists")

    //hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO user(`username`,`password`, `age`, `mobile`,`email`) VALUES (?)";
    const values = [
      req.body.username,
      hash,
      req.body.age,
      req.body.mobile,
      req.body.email,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      // return alert("Now you have became a Captain !!");
      return res.status(200).json("Now you have became a Captain !!");
    });
  });
};
export const login = (req, res) => {
  // check if user exists

  const q = "SELECT * FROM user WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0)
      return res.status(404).json("Unknown Captain to our crew!!");

    //check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong Passkey captain !!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};
export const logout = (req, res) => {
  // const navigate = useNavigate();

  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("See you soon Captain !!");
};

export const clue1 =(req,res)=>{
    const q = "INSERT INTO clue1(`username`,`score`,`days`,`hours`, `minutes`, `seconds`) VALUES (?)";
    const values = [
        req.body?.username,
        req.body?.score,
        req.body?.days,
        req.body?.hours,
        req.body?.minutes,
        req.body?.seconds,
    ];
    // console.log(req.body);
    
    db.query(q, [values], (err, data) => {
        if (err) {return res.json(err);}
        
        return res.status(200).json("Scores !!");
    });
}

export const clue2 =(req,res)=>{
    const q = "INSERT INTO clue2(`username`,`score`,`days`,`hours`, `minutes`, `seconds`) VALUES (?)";
    const values = [
        req.body?.username,
        req.body?.score,
        req.body?.days,
        req.body?.hours,
        req.body?.minutes,
        req.body?.seconds,
    ];
    // console.log(req.body);
    
    db.query(q, [values], (err, data) => {
        if (err) {return res.json(err);}
        
        return res.status(200).json("Scores !!");
    });
}
export const clue3 =(req,res)=>{
    const q = "INSERT INTO clue3(`username`,`score`,`days`,`hours`, `minutes`, `seconds`) VALUES (?)";
    const values = [
        req.body?.username,
        req.body?.score,
        req.body?.days,
        req.body?.hours,
        req.body?.minutes,
        req.body?.seconds,
    ];
    // console.log(req.body);
    
    db.query(q, [values], (err, data) => {
        if (err) {return res.json(err);}
        
        return res.status(200).json("Scores !!");
    });
}
export const clue4 =(req,res)=>{
    const q = "INSERT INTO clue4(`username`,`score`,`days`,`hours`, `minutes`, `seconds`) VALUES (?)";
    const values = [
        req.body?.username,
        req.body?.score,
        req.body?.days,
        req.body?.hours,
        req.body?.minutes,
        req.body?.seconds,
    ];
    // console.log(req.body);
    
    db.query(q, [values], (err, data) => {
        if (err) {return res.json(err);}
        
        return res.status(200).json("Scores !!");
    });
}
export const clue5 =(req,res)=>{
    const q = "INSERT INTO clue5(`username`,`score`,`days`,`hours`, `minutes`, `seconds`) VALUES (?)";
    const values = [
        req.body?.username,
        req.body?.score,
        req.body?.days,
        req.body?.hours,
        req.body?.minutes,
        req.body?.seconds,
    ];
    // console.log(req.body);
    
    db.query(q, [values], (err, data) => {
        if (err) {return res.json(err);}
        
        return res.status(200).json("Scores !!");
    });
}
export const clue6 =(req,res)=>{
    const q = "INSERT INTO clue6(`username`,`score`,`days`,`hours`, `minutes`, `seconds`) VALUES (?)";
    const values = [
        req.body?.username,
        req.body?.score,
        req.body?.days,
        req.body?.hours,
        req.body?.minutes,
        req.body?.seconds,
    ];
    // console.log(req.body);
    
    db.query(q, [values], (err, data) => {
        if (err) {return res.json(err);}
        
        return res.status(200).json("Scores !!");
    });
}

