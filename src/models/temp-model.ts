import mongoose from 'mongoose';

const tempSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    callId: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Temp || mongoose.model('Temp', tempSchema);
