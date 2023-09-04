"use strict";
exports.__esModule = true;
var brain = require("brain.js");
/**
 * Represents a Symptom Checker AI Model.
 * @class
 */
var SymptomCheckerAI = /** @class */ (function () {
    /**
     * Create a SymptomCheckerAI.
     * @constructor
     */
    function SymptomCheckerAI() {
        this.net = new brain.NeuralNetwork();
        this.trainModel();
    }
    /**
     * Train the neural network.
     * @private
     */
    SymptomCheckerAI.prototype.trainModel = function () {
        // Define your training data (input and output)
        var trainingData = [
            { input: { cough: 0, fever: 0, headache: 0 }, output: { none: 1 } },
            { input: { cough: 1, fever: 0, headache: 0 }, output: { mild: 1 } },
            { input: { cough: 0, fever: 1, headache: 0 }, output: { moderate: 1 } },
            { input: { cough: 0, fever: 0, headache: 1 }, output: { severe: 1 } }, // Severe symptoms
            // Add more training data as needed
        ];
        // Train the neural network
        this.net.train(trainingData);
    };
    /**
     * Predict symptom severity.
     * @param {Record<string, number>} symptoms - The input symptoms.
     * @returns {Record<string, number>} - The predicted severity.
     */
    SymptomCheckerAI.prototype.predictSymptoms = function (symptoms) {
        var output = this.net.run(symptoms);
        return output;
    };
    return SymptomCheckerAI;
}());
exports["default"] = SymptomCheckerAI;
