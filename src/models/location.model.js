module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    site: {
      type: String,
      required: true
    },
    building: {
      type: String,
      required: true
    },
    floor: {
      type: String,
      required: true
    },
    rack: {
      type: String,
      required: true
    },
    rackLevel: {
      type: String,
      required: true
    }
  });

  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })

  const Location = mongoose.model('locations', schema);
  
  return Location;
}