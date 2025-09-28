import { Trash2 } from "lucide-react"
import { useState } from "react"

const fakeCartItems = [
  {
    id: "1",
    name: "iPhone 13 Refurbished",
    image: "https://via.placeholder.com/120x120?text=iPhone+13",
    price: 499,
    qty: 1,
  },
  {
    id: "2",
    name: "Samsung Galaxy S21 Refurbished",
    image: "https://via.placeholder.com/120x120?text=Galaxy+S21",
    price: 399,
    qty: 2,
  },
]

export default function CartPage() {
  const [cart, setCart] = useState(fakeCartItems)

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded"
                />

                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-green-700 font-bold">${item.price}</p>

                  {/* Quantity Selector */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="px-2 py-1 border rounded-l hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-12 text-center border-t border-b outline-none"
                    />
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-2 py-1 border rounded-r hover:bg-gray-100"
                    >
                      +
                    </button>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow rounded-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
