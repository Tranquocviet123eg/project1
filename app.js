const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body{
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    font-family: 'Montserrat', sans-serif;
}
.group{
    text-align: center;
}
.group input.checkbox{
    display: none;
}
.group .list{
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 100px);
    gap: 20px;
}
.group .list .item{
    border: 1px solid var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    position: relative;
    transition: 0.5s;
}
.group .list .item .check{
    position: absolute;
    top: 10px;
    left: 10px;
    color: var(--light);
}
.group .list .item .check i:nth-child(2){
    display: none;
}
.group .list .item h2{
    margin: 0;
    font-weight: 100;
    font-size: 15px;
}
.group .list .item .logo-type{
    font-size: 33px;
    margin-bottom: 5px;
}

input.checkbox:checked + .item{
    border: 1px solid var(--blue);
    box-shadow: 0 1px 5px var(--blue);
    color: var(--blue);
}
input.checkbox:checked + .item .check i:nth-child(1){
    display: none;
}
input.checkbox:checked + .item .check i:nth-child(2){
    display: block;
    color: var(--blue);
}
    </style>
</head>
<body>

    <div class="group">
        <h1>Choose your favorites
            Tran Quoc Viet
            Mssv:22810310028
        </h1>
        <div class="list">

            <input type="checkbox" class="checkbox" id="checkbox_1">
            <label class="item" for="checkbox_1">
                <div class="check">
                    <i class="fa-regular fa-circle"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa-regular fa-chess-knight logo-type"></i>
                <h2>Chess</h2>
            </label>

            <input type="checkbox" class="checkbox" id="checkbox_2">
            <label class="item" for="checkbox_2">
                <div class="check">
                    <i class="fa-regular fa-circle"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa-regular fa-circle-play logo-type"></i>
                <h2>Music</h2>
            </label>

            <input type="checkbox" class="checkbox" id="checkbox_3">
            <label class="item" for="checkbox_3">
                <div class="check">
                    <i class="fa-regular fa-circle"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa-regular fa-newspaper logo-type"></i>
                <h2>News</h2>
            </label>

            <input type="checkbox" class="checkbox" id="checkbox_4">
            <label class="item" for="checkbox_4">
                <div class="check">
                    <i class="fa-regular fa-circle"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa-regular fa-map logo-type"></i>
                <h2>Travel</h2>
            </label>

            <input type="checkbox" class="checkbox" id="checkbox_5">
            <label class="item" for="checkbox_5">
                <div class="check">
                    <i class="fa-regular fa-circle"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa-regular fa-futbol logo-type"></i>
                <h2>Sport</h2>
            </label>

            <input type="checkbox" class="checkbox" id="checkbox_6">
            <label class="item" for="checkbox_6">
                <div class="check">
                    <i class="fa-regular fa-circle"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
                <i class="fa-regular fa-images logo-type"></i>
                <h2>Photo</h2>
            </label>

    </div>
    
</body>
</html>
