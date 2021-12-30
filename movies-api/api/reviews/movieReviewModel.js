import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  authorName: { type: String, required: true},
  text: {type: String, required: true },
  rating: {type: String, required: true},
  movieId: {type: Number, required: true}
});

export default mongoose.model('Review', ReviewSchema);