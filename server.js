const express = require('express');
const connectDB = require('./db');
const Pasto = require('./models/Pasto');


const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
connectDB();

// ✅ POST - Salva un nuovo pasto
app.post('/api/ricette', async (req, res) => {
  try {
    const nuovoPasto = new Pasto(req.body);
    await nuovoPasto.save();
    res.status(200).json({ messaggio: "Ricetta salvata in MongoDB ✅" });
  } catch (error) {
    console.error('Errore nel salvataggio:', error);
    res.status(500).json({ errore: "Errore durante il salvataggio ❌" });
  }
});

// ✅ GET - Recupera tutti i pasti
app.get('/api/ricette', async (req, res) => {
  try {
    const pasti = await Pasto.find().sort({ createdAt: -1 }); // ultimi prima
    res.status(200).json(pasti);
  } catch (error) {
    console.error('Errore nel recupero dei pasti:', error);
    res.status(500).json({ errore: "Errore durante il recupero dei pasti ❌" });
  }
});

app.listen(port, () => {
  console.log(`Server attivo su http://localhost:${port}`);
});
