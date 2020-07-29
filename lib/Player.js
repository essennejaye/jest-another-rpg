const Potion = require('../lib/Potion');
const Character = require('./Character');

// returns an object with various player properties
class Player extends Character {
    constructor(name = '') {
        // call parent constructor
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    }
    // get players stats
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        }
    }

    // returns the inventory array or false if empty
    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    // add potion to player's inventory
    addPotion(potion) {
        this.inventory.push(potion);
    }

    // uses a potion from player's inventory
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
            case 'strehgth':
                this.strength += potion.value;
                break
        }
    }
}
module.exports = Player;