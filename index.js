const { response } = require("express");
let express = require("express");
let app = express();

let pokemon = {
    "data" : [
        {
            name: "nidoran",
            info: "Nidoran is a Poison type Pokémon introduced in Generation 1 . It is known as the Poison Pin Pokémon ."
        },
        
        {
            name: "nidorino",
            info: "Nidorino is a male-only species. Nidorino is independent and fierce, often described as violent and easily angered. It uses its ears to check its surroundings. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might."
        },

        {
            name: "nidoking",
            info: "Nidoking is a Poison & Ground Pokémon which evolves from Nidorino. It is vulnerable to Water, Ground, Ice and Psychic moves. Nidoking's strongest moveset is Poison Jab & Earthquake and it has a Max CP of 2,567."
        }

    ] 
}

app.get('/', (require,response) => {
    response.send("this is a root page");
})

app.get('/about', (require,response) => {
    response.send("try to smile :)")
})

app.get('/pokemon', (requrie,response)=>{
    response.json(pokemon);
})

app.get('/pokemon/:sign', (require,response)=> {
    console.log(require.params.sign);
    let user_sign = require.params.sign;
    let user_obj;
    for (let i=0; i<pokemon.data.length; i++) {
        if (user_sign == pokemon.data[i].name){
            user_obj = pokemon.data[i];
        }
    }
    console.log(user_obj);

    if (user_obj) {
        response.json(user_obj);
    }else{response.json({status:"info not present"});
    }
})

app.listen(3000,()=>{
    console.log("listening at localhost:3000");
})