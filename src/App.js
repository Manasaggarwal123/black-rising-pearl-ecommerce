import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [category, setCategory] = useState("all");

  const products = [
    {
      name: "Pearl Necklace",
      price: 499,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
      category: "necklace"
    },
    {
      name: "Gold Earrings",
      price: 299,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      category: "earrings"
    },
    {
      name: "Silver Bracelet",
      price: 399,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
      category: "bracelet"
    }
  ];

  const addToCart = (product) => {
    alert(product.name + " added to cart ✅");
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  return (
    <div className="bg-[#f8f6f2] min-h-screen">

      <Navbar cartCount={cart.length} setPage={setPage} />

      {/* HOME PAGE */}
      {page === "home" && (
        <>

          {/* HERO SECTION */}
          <section className="bg-black text-white h-[60vh] flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide leading-tight">
              BLACK RISING PEARL ✨
            </h1>

            <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl">
              Luxury imitation jewellery crafted for elegance,
              confidence, and timeless beauty.
            </p>

            <button className="mt-10 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Collection
            </button>

          </section>

          {/* SEARCH + FILTERS */}
          <section className="bg-[#f8f6f2] px-6 pb-16 max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row justify-center gap-4 items-center">

              {/* Search */}
              <input
                type="text"
                placeholder="Search jewellery..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-3 rounded-lg border w-72"
              />

              {/* Price Filter */}
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-3 rounded-lg border"
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹300</option>
                <option value="mid">₹300 - ₹500</option>
                <option value="high">Above ₹500</option>
              </select>

              {/* Category Filter */}
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border"
              >
                <option value="all">All Categories</option>
                <option value="necklace">Necklace</option>
                <option value="earrings">Earrings</option>
                <option value="bracelet">Bracelet</option>
              </select>

            </div>

          </section>

          {/* PRODUCTS */}
          <section className="bg-[#f8f6f2] px-6 pb-16">

            <h2 className="text-4xl font-bold text-center mb-10">
              Featured Collection 💎
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {products
                .filter((item) =>
                  item.name.toLowerCase().includes(search.toLowerCase())
                )

                .filter((item) => {
                  if (priceFilter === "low") return item.price < 300;
                  if (priceFilter === "mid") {
                    return item.price >= 300 && item.price <= 500;
                  }
                  if (priceFilter === "high") return item.price > 500;
                  return true;
                })

                .filter((item) => {
                  if (category === "necklace") {
                    return item.category === "necklace";
                  }

                  if (category === "earrings") {
                    return item.category === "earrings";
                  }

                  if (category === "bracelet") {
                    return item.category === "bracelet";
                  }

                  return true;
                })

                .map((item, index) => (
                  <ProductCard
                    key={index}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    addToCart={() => addToCart(item)}
                  />
                ))}

            </div>

          </section>

        </>
      )}

      {/* CART PAGE */}
      {page === "cart" && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />
      )}

    </div>
  );
}

export default App;