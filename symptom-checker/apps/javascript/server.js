"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import SymptomCheckerAI from './symptomChecker';
// Create an Express app instance
var app = (0, express_1.default)();
var port = process.env.PORT || 3005;
// Use JSON middleware to parse request bodies as JSON
app.use(express_1.default.json());
/**
 * POST endpoint for predicting symptoms.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
// app.post('/predict', (req: Request, res: Response) => {
//     // Extract symptoms from the request body
//     const symptoms = req.body.symptoms;
//
//     // Initialize the SymptomCheckerAI
//     const ai = new SymptomCheckerAI();
//
//     // Predict symptoms using the AI model
//     const prediction = ai.predictSymptoms(symptoms);
//
//     // Send the prediction as JSON response
//     res.json({ prediction });
// });
app.get('', function (req, res) {
    res.send('Hello world');
});
// Start the Express server on the specified port
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
