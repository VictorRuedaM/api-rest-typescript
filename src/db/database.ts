import 'dotenv/config';
import mongoose, { connect } from 'mongoose';


const DB_URI = <string> process.env.DB_URI;

export default async function dbConnect(): Promise<void> {

  mongoose.set('strictQuery', false);
  await connect(DB_URI);
  
}

 

