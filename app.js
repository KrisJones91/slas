let health = 100;

let attackAction = {
    punch: {
        name: "backhand",
        damage: 30,
    },
    slap: {
        name: "slap",
        damage: 30,
    },
    kick: {
        name: "kick",
        damage: 30,
    },

}

let playerOne = {
    name: "player",
    hits: 0
}

function play(attack) {
    //player attack
    let playerAction = attackAction[attack].damage
    console.log(playerAction)

    //health is
    health -= playerAction
    console.log(health)
    if (health <= 0) {
        window.alert("You Win")
        setTimeout(() => {
            health = 100
            drawHealth()
        }, 2000);
    }

    drawHealth()
}

function player() {
    document.getElementById('player').innerText = playerOne.toString()
}



function drawHealth() {
    document.getElementById('health').innerText = health.toString()
}

drawHealth()