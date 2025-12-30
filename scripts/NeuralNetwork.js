import Neuron from './Neuron.js';

export default class NeuralNetwork {
    constructor() {
        this.sensorsCount = 0; // initial value depends on inputs
        this.outputsCount = 4; // forward, left, right, backward or other actions
        this.hiddenLayers = 4;
        this.layers = [];
    }
    
    createLayers(inputsCount) {
        this.sensorsCount = inputsCount;
        // create empty layers
        for (let i = 0; i < this.hiddenLayers + 2; i++) {
            let layer = [];
            this.layers.push(layer);
        }
        
        // populate first layer
        let lastLayerCount = 0;
        for (let i = 0; i < this.sensorsCount; i++) {
            let neuron = new Neuron;
            neuron.weights.push(1); // always activated
            this.layers[0].push(neuron);
            lastLayerCount = i + 1;
        }
        // populate hidden layers
        // numbers of columns
        let hiddenLayerSize = lastLayerCount * 2;
        for (let i = 0; i < this.hiddenLayers; i++) {
            // numbers of neurons in each column
            for (let j = 0; j < hiddenLayerSize; j++) {
                let neuron = new Neuron;
                // populate neuron weights
                for (let k = 0; k < lastLayerCount; k++) {
                    let rand = Math.round((Math.random() * 2 - 1) * 100) / 100;
                    neuron.weights.push(rand);
                }
                this.layers[i + 1].push(neuron);
            }
            lastLayerCount = hiddenLayerSize;
        }
        // populate output layer
        for (let i = 0; i < this.outputsCount; i++) {
            let neuron = new Neuron;
            // populate neuron weights
            for (let j = 0; j < lastLayerCount; j++) {
                let rand = Math.round((Math.random() * 2 - 1) * 100) / 100;
                neuron.weights.push(rand);
            }
            this.layers[this.hiddenLayers + 1].push(neuron);
        }
    }

    fireNeurons(inputs) {
        // error checking
        if (inputs.length !== this.sensorsCount) {
            console.error(`Expected ${this.sensorsCount} inputs, but got ${inputs.length}`);
            return;
        }
        
        // layers
        let previousOutputs = [];
        console.log(`Layer 0 has ${this.layers[0].length} neurons`);
        for (let i = 0; i < this.layers[0].length; i++) {
            this.layers[0][i].feedForward([inputs[i]]);
            previousOutputs.push(this.layers[0][i].output);
        }
        
        // hidden layers + output layer
        let currentOutputs = [];
        for (let i = 1; i < this.layers.length; i++) {
            console.log(`Layer ${i} has ${this.layers[i].length} neurons`);
            // each neuron in layer
            for (let j = 0; j < this.layers[i].length; j++) {
                this.layers[i][j].feedForward([previousOutputs[i]]);
                currentOutputs.push(this.layers[i][j].output);
            }
            previousOutputs = currentOutputs;
            currentOutputs = [];
        }
        console.log(this.layers[this.layers.length - 1][0].output);
        console.log(this.layers[this.layers.length - 1][1].output);
        console.log(this.layers[this.layers.length - 1][2].output);
        console.log(this.layers[this.layers.length - 1][3].output);
    }
}