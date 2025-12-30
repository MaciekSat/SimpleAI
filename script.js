import NeuralNetwork from './scripts/NeuralNetwork.js'
import Environment from './scripts/Environment.js'
import Submarine from './scripts/Submarine.js'

function init() {
    // Environment setup
    let sky = document.getElementById("sky");
    let ocean = document.getElementById("ocean");
    let deepVoid = document.getElementById("deepVoid");
    let environment = new Environment(sky, ocean, deepVoid);
    environment.spawnClouds();
    
    // Submarine setup
    let submarine = new Submarine();
    submarine.spawnSubmarine(document.body);

    // Neural Network setup
    let inputs = [0.0, 0.0, 0.0] // min 3 inputs
    // let neuralNetwork = new NeuralNetwork;
    // neuralNetwork.createLayers(inputs.length);
    // console.log(neuralNetwork.layers);
    // neuralNetwork.fireNeurons(inputs);

    // Main loop
    let mainLoop = setInterval(() => {
        submarine.updateStatus(mainLoop);
        environment.updateTimer();
    }, 600 / 60 * 1000); // 60 FPS
}

window.init = init;