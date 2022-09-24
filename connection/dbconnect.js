
import mongoose from 'mongoose'


let connection = {};

let mongoOpt = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const mongoURI = process.env.ATLAS_URI;

const base = async () => {
  try {
    let db = await mongoose.connect(mongoURI, mongoOpt);
    connection.isConnected = db.connections[0].readyState;
    console.log('Base status: ', connection.isConnected);
  } catch (err) {
    console.error(err)
  }
}

export default base