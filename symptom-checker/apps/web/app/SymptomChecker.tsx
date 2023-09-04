"use client"
import React, { useState } from 'react';
import './styles.css'; // Import the CSS file


function Symptoms({ symptoms }) {

    // Map over the object's properties and create an array of React elements
    const symptomElements = Object.entries(symptoms).map(([key, value]) => (
        <div key={key} className="Symptoms">
            <strong>{key}:</strong> {value}
        </div>
    ));

    return (
        <div>
            <h2>Symptoms</h2>
            {symptomElements}
        </div>
    );
}

/**
 * Represents a Symptom Checker Component.
 * @function
 * @component
 */
function SymptomChecker() {
    const [symptoms, setSymptoms] = useState({ cough: 0, fever: 0, headache: 0 });
    const [prediction, setPrediction] = useState('');

    /**
     * Handle changes in symptom inputs.
     * @param {string} name - The name of the symptom.
     * @param {number} value - The severity of the symptom.
     */
    const handleSymptomChange = (name, value) => {
        setSymptoms((prevSymptoms) => ({
            ...prevSymptoms,
            [name]: value,
        }));
    };

    /**
     * Handle form submission and send a POST request to the server.
     * @param {Event} e - The form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3005/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ symptoms }),
            });
            const data = await response.json();
            setPrediction(data.prediction);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="SymptomChecker">
            <h2>Symptom Checker</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Cough Severity:
                        <input
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={symptoms.cough}
                            onChange={(e) => handleSymptomChange('cough', parseInt(e.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Fever Severity:
                        <input
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={symptoms.fever}
                            onChange={(e) => handleSymptomChange('fever', parseInt(e.target.value))}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Headache Severity:
                        <input
                            type="number"
                            min="0"
                            max="1"
                            step="1"
                            value={symptoms.headache}
                            onChange={(e) => handleSymptomChange('headache', parseInt(e.target.value))}
                        />
                    </label>
                </div>
                <button type="submit">Check Symptoms</button>
            </form>
            {prediction && (
                <div>
                    <h3>Symptom Severity Prediction:</h3>
                    <Symptoms symptoms={prediction}/>
                </div>
            )}
        </div>
    );
}

export default SymptomChecker;
