const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://davideebossolo:ce3rKHjSClBxdx7u@cluster1.dgwrk.mongodb.net/ricetteDB?retryWrites=true&w=majority&appName=Cluster1', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connesso a MongoDB Atlas ✔️');
  } catch (error) {
    console.error('Errore di connessione a MongoDB ❌', error);
  }
}

module.exports = connectDB;
