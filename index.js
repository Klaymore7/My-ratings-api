const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send(topEight);
});

let topEight = [{
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Lionel_Messi_20180626.jpg",
    name: "Lionel Messi",
    nickname: "La Pulga",
    speed: 90,
    accelaration: 90,
    dribbling: 95,
    shooting: 90,
    passing: 95,
    strength: 80,
},
{
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Cristiano_Ronaldo_2018.jpg",
    name: "Cristiano Ronaldo",
    nickname: "CR7",
    speed: 90,
    accelaration: 95,
    dribbling: 90,
    shooting: 95,
    passing: 85,
    strength: 90,
},
{
    id: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/PEL%C3%89_2014_-_Barcelona_vs._Real_Madrid_-_Match_Review.jpg",
    name: "Neymar Jr.",
    nickname: "The Brazilian",
    speed: 90,
    accelaration: 95,
    dribbling: 95,
    shooting: 85,
    passing: 90,
    strength: 80,
},
{
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Messi_20180626.jpg",
    name: "wayne rooney",
    nickname: "Wazza",
    speed: 95,
    accelaration: 90,
    dribbling: 95,
    shooting: 90,
    passing: 95,
    strength: 70,
},
{
    id: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Cristiano_Ronaldo_2018.jpg",
    name: "frank lampard",
    nickname: "super frank",
    speed: 90,
    accelaration: 95,
    dribbling: 90,
    shooting: 95,
    passing: 85,
    strength: 90,
},
{
    id: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Lionel_Messi_20180626.jpg",
    name: "Andres iniesta",
    nickname: "The Magician",
    speed: 90,
    accelaration: 90,
    dribbling: 95,
    shooting: 90,
    passing: 95,
    strength: 80,
},
{
    id: 7,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/PEL%C3%89_2014_-_Barcelona_vs._Real_Madrid_-_Match_Review.jpg",
    name: "Mesut ozil.",
    nickname: "The German Maestro",
    speed: 90,
    accelaration: 95,
    dribbling: 95,
    shooting: 85,
    passing: 90,
    strength: 80,
},
{
    id: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Messi_20180626.jpg",
    name: "Arjen Robben",
    nickname: "The Dutch Speedster",
    speed: 95,
    accelaration: 90,
    dribbling: 95,
    shooting: 90,
    passing: 95,
    strength: 70,
}];


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});