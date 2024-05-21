import mongoose from 'mongoose';

const interactionsSchema = new mongoose.Schema(
  {
    guests_involved: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
    conversation: { type: [String] },
    outcome: { type: String },
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone_number: { type: String },
    email: { type: String },
    interests: { type: [String] },
    social_styles: { type: String },
    status: { type: String },
    eventHistory: [
      {
        interactions: { type: [interactionsSchema] },
      },
    ],
    messages: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model('User', userSchema);
