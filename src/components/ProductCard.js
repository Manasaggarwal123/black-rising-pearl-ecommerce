function ProductCard({ name, price, image, addToCart }) {
  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300 max-w-sm mx-auto">

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      {/* Product Details */}
      <div className="p-5">

        <h3 className="text-2xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="text-xl font-semibold text-gray-700 mt-2">
          ₹{price}
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-5">

          <button
            onClick={addToCart}
            className="bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            Add to Cart
          </button>

          <button
            onClick={() => window.open("https://amazon.in", "_blank")}
            className="bg-yellow-500 text-white py-3 rounded-xl hover:bg-yellow-600 transition duration-300"
          >
            Buy on Amazon
          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;