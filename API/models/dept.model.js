
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      programme: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Prog"
        }
      ]
    },
    // { timestamps: true }
  );


  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


  const Dept = mongoose.model("Dept", schema);
  return Dept;
};
