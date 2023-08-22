const CartItem = require('../models/cartModel');

const createNewCartProduct = async (req, res) => {
  const { itemId, quantity, price,title1,title2,title3,title4,title5} = req.body;

  try {
    const newCartItem = await CartItem.create({ itemId, quantity, price,title1,title2,title3,title4,title5});
    res.status(201).json(newCartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error from create cart item API" });
  }
};

const getAllCartProducts = async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json({ success: true, message: "All cart items retrieved successfully", cartItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const singleCartProduct = async (req, res) => {
  const cartItemId = req.params.id;
  try {
    const cartItem = await CartItem.findById(cartItemId);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.json(cartItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error from get cart item API" });
  }
};

const removeCartProduct = async (req, res) => {
  const cartItemId = req.params.id;
  try {
    const removedCartItem = await CartItem.findByIdAndRemove(cartItemId);

    if (!removedCartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.json({ success: true, message: "Cart item removed", removedCartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error from remove cart item API" });
  }
};

const updateCartProduct = async (req, res) => {
    const cartItemId = req.params.id;
    const { quantity, price } = req.body;
  
    try {
      const cartItem = await CartItem.findById(cartItemId);
  
      if (!cartItem) {
        return res.status(404).json({ error: "Cart item not found" });
      }
  
      const total = quantity * price;
      const subtotal = total;
  
      const updatedCartItem = await CartItem.findByIdAndUpdate(
        cartItemId,
        { quantity, price, total, subtotal },
        { new: true }
      );
  
      if (!updatedCartItem) {
        return res.status(404).json({ error: "Cart item not found" });
      }
  
      res.json({ success: true, message: "Cart item updated", updatedCartItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error from update cart item API" });
    }
  };
  

module.exports = {
  getAllCartProducts,
  createNewCartProduct,
  singleCartProduct,
  removeCartProduct,
  updateCartProduct
};
