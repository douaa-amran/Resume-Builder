import { Schema, model } from 'mongoose';

const ResumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  content: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('Resume', ResumeSchema);
