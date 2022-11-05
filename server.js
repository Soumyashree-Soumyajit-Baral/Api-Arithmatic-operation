const express=require("express");
const path=require("path")
const app=express();

app.listen(5000,(err)=>{
    if(err){
        console.log("error while running the port")
    }else{
        console.log("server is running at 5000")
    }
})


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/",(req,res)=>{
    res.send("hello world!")
})


app.get("/add",(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/add.html"))
})

app.get("/sub",(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/sub.html"))
})

app.get("/multiply",(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/multiply.html"))
})

app.get("/divide",(req,res)=>{
    res.sendFile(path.join(__dirname + "/views/divide.html"))
})


app.post("/add",(req,res)=>{
    if(!Number(req.body.num1) || !Number(req.body.num2)){
        res.status(400).send("Invalid data types")
    }else{
        if(Number(req.body.num1) > 1000000 || Number(req.body.num2)>1000000){
            res.status(400).send("Overflow")
        }else if(Number(req.body.num1) < -1000000 || Number(req.body.num2)< -1000000){
            res.status(400).send("Underflow")
        }else{
            let add=(Number(req.body.num1) + Number(req.body.num2));
            if(add > 1000000){
                res.status(400).send("Overflow")
            }else{
                res.status(200).send(`the sum of two numbers is  : ${add}`)
            }
        }
    }
})

app.post("/sub",(req,res)=>{
    if(!Number(req.body.num1) || !Number(req.body.num2)){
        res.status(400).send("Invalid data types")
    }else{
        if(Number(req.body.num1) > 1000000 || Number(req.body.num2)>1000000){
            res.status(400).send("Overflow")
        }else if(Number(req.body.num1) < -1000000 || Number(req.body.num2)< -1000000){
            res.status(400).send("Underflow")
        }else{
            let sub=(Number(req.body.num1) - Number(req.body.num2));
            res.status(200).send(`the difference of two numbers is  : ${sub}`)
        }
        
    }
    
})

app.post("/multiply",(req,res)=>{
    if(!Number(req.body.num1) || !Number(req.body.num2)){
        res.status(400).send("Invalid data types")
    }else{
        if(Number(req.body.num1) > 1000000 || Number(req.body.num2)>1000000){
            res.status(400).send("Overflow")
        }else if(Number(req.body.num1) < -1000000 || Number(req.body.num2)< -1000000){
            res.status(400).send("Underflow")
        }else{
            let mul=(Number(req.body.num1) * Number(req.body.num2));
            res.status(200).send(`the multiplication of two numbers is  : ${mul}`)
        }
        
    }
    
})

app.post("/divide",(req,res)=>{
    if(Number(req.body.num2)===0){
        res.status(400).send("Cannot divide by zero")
    }
    else if(!Number(req.body.num1) || !Number(req.body.num2)){
        res.status(400).send("Invalid data types")
    }else{
        if(Number(req.body.num1) > 1000000 || Number(req.body.num2)>1000000){
            res.status(400).send("Overflow")
        }else if(Number(req.body.num1) < -1000000 || Number(req.body.num2)< -1000000){
            res.status(400).send("Underflow")
        }else{
            let div=(Number(req.body.num1) / Number(req.body.num2));
            res.status(200).send(`the division of two numbers is  : ${div}`)
        }
        
        
    }
    
})