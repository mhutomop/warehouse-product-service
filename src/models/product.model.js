module.exports = (mongoose) => {
  const schema = mongoose.Schema({
    categoryId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "categories",
      required: true
    },
    type: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    measurementId: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "measurements",
      required: true
    },
    inventories: [
      {
        locationId: {
          type: mongoose.Schema.Types.ObjectId, 
          ref: "locations"
        },
        quantity: {
          type: Number
        }
      }
    ]
  });
  
  schema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })

  const Product = mongoose.model('products', schema);

  return Product;
}