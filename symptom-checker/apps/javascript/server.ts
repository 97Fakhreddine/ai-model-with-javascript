import { Request, Response } from 'express';
import express from 'express';
import SymptomCheckerAI from './symptomChecker';
import cors from 'cors'; // Import the cors package

// Create an Express app instance
const app = express();
const port = process.env.PORT || 3005;

// Add the CORS middleware to your Express app
app.use(cors());

// Use JSON middleware to parse request bodies as JSON
app.use(express.json());

/**
 * POST endpoint for predicting symptoms.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
app.post('/predict', (req: Request, res: Response) => {
    // Extract symptoms from the request body
    const symptoms = req.body.symptoms;

    // Initialize the SymptomCheckerAI
    const ai = new SymptomCheckerAI();

    // Predict symptoms using the AI model
    const prediction = ai.predictSymptoms(symptoms);

    // Send the prediction as JSON response
    res.json({ prediction });
    // res.send(prediction);
});

app.get('', (req: Request, res: Response) => {
    res.send('Hello world');
});

// Start the Express server on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
