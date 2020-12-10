let items = {
    fire: {
        total: 0,
        modifier: 5,
        quantity: 0,
        description: "SPICY!"
    },
    acid: {
        total: 0,
        modifier: 3,
        quantity: 0,
        description: "Juicy!"
    },
    ice: {
        total: 0,
        modifier: 6,
        quantity: 0,
        description: "Frosty!"
    }
}

let player = {
    name: "Ryu",
    hits: 0,
    health: 100,
    attacks: {
        slap: 5,
        punch: 10,
        kick: 15
    }
}

let enemy = {
    name: "Practice Dummy",
    hits: 0,
    health: 100,
    attacks: {
        slap: 5,
        punch: 10,
        kick: 15
    }
}

function play(attack) {
    // Apply Damage
    enemy.hits++
    enemy.health -= player.attacks[attack] + items.fire.total + items.acid.total + items.ice.total
    if (enemy.health <= 0) {
        enemy.health = 0
        window.alert("You Win")
        setTimeout(() => {
            enemy.health = 100
            enemy.hits = 0
            update()
        }, 2000);
    }

    // have dummy attack back
    // use a for in loop or Object.keys to get a random attack for the enemy

    update()
}


function update() {
    document.getElementById('player').innerText = player.name.toString()
    document.getElementById('enemy').innerText = enemy.name.toString()
    document.getElementById('health').innerText = player.health.toString()
    document.getElementById('hits').innerText = player.hits.toString()
    document.getElementById('enemy-health').innerText = enemy.health.toString()

    document.getElementById('enemy-hits').innerText = enemy.hits.toString()
    document.getElementById('fire').innerText = '+' + items.fire.total
    document.getElementById('acid').innerText = '+' + items.acid.total
    document.getElementById('ice').innerText = '+' + items.ice.total
}

function addItem(type) {
    items[type].quantity++
    items[type].total = items[type].quantity * items[type].modifier
    update()
}



update()