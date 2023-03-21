import express from 'express';
import dotenv from 'dotenv';
dotenv.config();





//const steam = new SteamWebAPI(process.env.API_KEY);

const app = express();

app.get('/playerinfo/:id', async (req, res) => {
    const {id} = req.params
    const data = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.API_KEY}&steamids=${ id }`) // 
    const json = await data.json();
    res.send(json);
});

app.get('/playerstats/:id', async (req, res) => {

    //obtengo parametros de la url
    const {id} = req.params

    
    const data = await fetch(` http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=730&key=${process.env.API_KEY}&steamid=${id}`) // 
    const json = await data.json();
    res.send(json);
})

app.get('/playerfriendlist/:id', async (req, res) => {

    //obtengo parametros de la url
    const {id} = req.params

    
    const data = await fetch(` http://api.steampowered.com/ISteamUser/GetFriendList/v1?key=${process.env.API_KEY}&steamid=${id}`) // 
    const json = await data.json();
    res.send(json);
})


// app.get('/playeritems/:id', async (req, res) => {
//     //obtengo parametros de la url
//     const {id} = req.params
//     const data = await fetch(`http://api.steampowered.com/IEconItems_730/GetPlayerItems/v0001/?key=${process.env.API_KEY}&steamid=${id}&format=json`) 
//     const json = await data.json();
//     res.send(json);
// })


app.listen(5500, () => {
    console.log('Example app listening on port 3000!');
});

