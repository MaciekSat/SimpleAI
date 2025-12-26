import NeuralNetwork from './scripts/NeuralNetwork.js'

function init() {
    let neuralNetwork = new NeuralNetwork;
    neuralNetwork.createLayers();
    console.log(neuralNetwork.layers);
    neuralNetwork.fireNeurons([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
}

window.init = init;