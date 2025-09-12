import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    furnished: {
      type: Boolean,
      required: true,
    },
    parking: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: [String],
      default: [
        "https://cdn.pixabay.com/photo/2022/04/06/22/58/street-7116489_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/02/11/07/37/homes-3988906_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        "https://cdn.pixabay.com/photo/2025/09/05/18/31/cave-9817865_1280.jpg",
        "https://cdn.pixabay.com/photo/2025/09/08/19/50/ivy-9823003_1280.jpg",
      ],
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
