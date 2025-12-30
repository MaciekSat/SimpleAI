export default class Submarine {
    constructor() {
        this.oxygen = 10000; // initial oxygen level
        this.co2 = 0; // initial co2 level
        this.energy = 10000000; // initial energy level
        this.crew = 10; // number of crew members [5 - 20]
        this.fuel = 5000; // initial fuel level
        this.food = 20000; // initial food level
        this.depth = 0; // current depth at the sea level
        this.balastTanks = 0; // current balast tanks level [0 - 300]
    }

    spawnSubmarine(body) {
        let submarine = document.createElement("div");
        submarine.className = "submarine";
        submarine.style.top = "60vh";
        submarine.style.left = "30%";
        body.appendChild(submarine);
        
        let engine = document.createElement("div");
        engine.className = "engine";
        submarine.appendChild(engine);

        let chambers = document.createElement("div");
        chambers.className = "chambers";
        submarine.appendChild(chambers);
        
        let bank1 = document.createElement("div");
        bank1.className = "bank1";
        submarine.appendChild(bank1);

        let bank2 = document.createElement("div");
        bank2.className = "bank2";
        submarine.appendChild(bank2);

        let crewQuarters = document.createElement("div");
        crewQuarters.className = "crewQuarters";
        submarine.appendChild(crewQuarters);

        let generator = document.createElement("div");
        generator.className = "generator";
        submarine.appendChild(generator);

        let co2Scrubber = document.createElement("div");
        co2Scrubber.className = "co2Scrubber";
        submarine.appendChild(co2Scrubber);

        let kitchen = document.createElement("div");
        kitchen.className = "kitchen";
        submarine.appendChild(kitchen);

        let controlRoom = document.createElement("div");
        controlRoom.className = "controlRoom";
        submarine.appendChild(controlRoom);
    }
    
    updateStatus(mainLoop) {
        if (this.oxygen <= 0 || this.food <= 0 || this.energy <= 0) {
            console.log("Mission failed: crew perished.");
            clearInterval(mainLoop);
            this.endMission();
            return;
        }
        
        if (this.co2 >= 2000) {
            console.log("Mission failed: crew suffocated.");
            clearInterval(mainLoop);
            this.endMission();
            return;
        }
        
        // update oxygen level
        this.oxygen -= this.crew * 0.1; // crew consumes oxygen
        this.co2 += this.crew * 0.1; // crew produces co2
        
        // update food level
        this.food -= this.crew * 0.001; // crew consumes food
    }
    
    endMission() {

    }

    // co2 scrubber (co2 + energy -> oxygen)
    // generator (fuel -> energy)
    // crew (oxygen + food -> co2 + boost)
    // boosts = more crew members more efficiency
    // control systems (energy -> movement)
    // sensors (energy -> data {obstacles visible})
    // reactor (energy -> movement)
}