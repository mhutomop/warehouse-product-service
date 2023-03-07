module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true
    }
  });
  
  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })

  const Category = mongoose.model('categories', schema);
  
  return Category;
}