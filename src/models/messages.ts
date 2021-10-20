import mongoose from 'mongoose';

const messagesCollection = 'messages';
const messagesSchema = new mongoose.Schema({
  emailUser: {
    type: String,
    require: true,
    max: 50,
  },
  text: {
    type: String,
    require: true,
    max: 100,
  },
  date: {
    type: String,
    require: true,
    max: 50,
  }
});

export const msgModel = mongoose.model(messagesCollection, messagesSchema);