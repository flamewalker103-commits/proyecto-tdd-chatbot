const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta para el chatbot
app.post('/chat', (req, res) => {
    const message = req.body.message;
    // Lógica de respuesta del chatbot
    const response = respondToMessage(message);
    res.json({ reply: response });
});

function respondToMessage(message) {
    // Aquí iría la lógica del chatbot
    if (message === 'Hola') {
        return '¡Hola! ¿Cómo puedo asistirte hoy?'; // Updated response
    }
    return 'Lo siento, no entiendo tu pregunta.';
}

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});