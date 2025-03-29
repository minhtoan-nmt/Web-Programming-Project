import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  plot: String,
});

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);