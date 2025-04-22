const express = require("express")
var cors = require('cors')
var fs = require("fs/promises")


const app = express()
app.use(express.json())

app.use(express.static('Public'));
app.use(cors({origin: "*"}))

app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use('/Images', express.static('Images'))



const aboutMe = {
    name: "Daler Nazarov",
    birthDate: "17, July, 2006",
    country: "Sirdarya, Uzbekistan",
    status: "student",
    skills: "English, Programming, Teaching, Tennis, Track & Field, Skiing"
}

app.get("/", (req, res) => {
    res.render("aboutMe", {
        aboutMe
    })
})

app.get("/images", (req, res) => {
    const images = [
        "/Images/Image1_me.jpg",
        "/Images/Image2_me.jpg",
        "/Images/Image3_me.jpg",
        "/Images/Image4_me.jpg",
    ];
    
    res.render("moreinfo", { images });
});




app.listen(5555, () => {
    console.log("Server running on port 5555");
    
})

