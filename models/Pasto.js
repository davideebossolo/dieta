const mongoose = require('mongoose');

const RicettaSchema = new mongoose.Schema({
  nome_ricetta: String,
  ingredienti: mongoose.Schema.Types.Mixed,
  quantità: String, // opzionale
  valori_nutrizionali_approssimativi: {
    calorie: Number,
    proteine: String,
    carboidrati: String,
    grassi: String,
  },
});

const PastoSchema = new mongoose.Schema({
  pasto: { type: String, required: true },
  portate: [RicettaSchema],
  valori_nutrizionali_totali: {
    calorie: Number,
    proteine: String,
    carboidrati: String,
    grassi: String,
  },
  note: String,
}, { timestamps: true });

module.exports = mongoose.model('Pasto', PastoSchema);
