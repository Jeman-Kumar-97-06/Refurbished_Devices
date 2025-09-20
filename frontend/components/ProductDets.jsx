import { useState } from "react";

export default function ProductDetail() {
  const product = {
    id: 1,
    name: "Refurbished iPhone 12",
    price: 399.99,
    description:
      "This refurbished iPhone 12 is in excellent condition with 6 months warranty. Fully tested, cleaned, and ready to use.",
    images: [
      "https://via.placeholder.com/400x400?text=iPhone+Front",
      "https://via.placeholder.com/400x400?text=iPhone+Back",
      "https://via.placeholder.com/400x400?text=iPhone+Side",
    ],
    reviews: [
      { id: 1, user: "Alice", comment: "Amazing quality, looks brand new!" },
      { id: 2, user: "Bob", comment: "Battery health was great. Worth the price." },
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Image + Carousel */}
        <div>
          <img
            src={mainImage}
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumbnail"
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === img ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-green-600 font-semibold mt-2">
            ${product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Quantity Toggle + Buttons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center border rounded-lg">
              <button
                className="px-3 py-1 text-lg font-bold"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 text-lg font-bold"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom: Reviews */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-lg shadow-sm">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
