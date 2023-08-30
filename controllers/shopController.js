const Shopping = require("../models/shopModel");

const createShopping = async (req, res) => {
  const { shop, productVitagoli, product1,quantity } = req.body;

  try {
    const calculatedPrice = price * quantity;
    const newShopping = await Shopping.create({
      shop: {
        heading: shop.heading,
        subHeading: shop.subHeading,
        description: shop.description,
      },
     
      productVitagoli: {
        name: productVitagoli.name,
        content: productVitagoli.content,
      },
      product1: {
        photos: product1.photos,
        price: product1.price,
        title: product1.title,
        singleProduct1: {
          photos: product1.singleProduct1.photos,
          quantity: product1.singleProduct1.quantity,
          productBannerPhoto: product1.singleProduct1.productBannerPhoto,
          productQualityPhotos: product1.singleProduct1.productQualityPhotos,
          heading: product1.singleProduct1.heading,
          title1: product1.singleProduct1.title1,
          title2: product1.singleProduct1.title2,
          price: product1.singleProduct1.price,
          description: product1.singleProduct1.description,
          fact: {
            heading1: product1.singleProduct1.fact.heading1,
            subHeading1: product1.singleProduct1.fact.subHeading1,
            content1: product1.singleProduct1.fact.content1,
            subHeading2: product1.singleProduct1.fact.subHeading2,
            content2: product1.singleProduct1.fact.content2,
            categoryImages: product1.singleProduct1.fact.categoryImages,
            benefits: {
              heading: {
                main: product1.singleProduct1.fact.benefits.heading.main,
                subheading1: product1.singleProduct1.fact.benefits.heading.subheading1,
                subheading2: product1.singleProduct1.fact.benefits.heading.subheading2,
              },
              content: {
                heading1: product1.singleProduct1.fact.benefits.content.heading1,
                content1: product1.singleProduct1.fact.benefits.content.content1,
                heading2: product1.singleProduct1.fact.benefits.content.heading2,
                content2: product1.singleProduct1.fact.benefits.content.content2,
                heading3: product1.singleProduct1.fact.benefits.content.heading3,
                content3: product1.singleProduct1.fact.benefits.content.content3,
                heading4: product1.singleProduct1.fact.benefits.content.heading4,
                content4: product1.singleProduct1.fact.benefits.content.content4,
                heading5: product1.singleProduct1.fact.benefits.content.heading5,
                content5: product1.singleProduct1.fact.benefits.content.content5,
                heading6: product1.singleProduct1.fact.benefits.content.heading6,
                content6: product1.singleProduct1.fact.benefits.content.content6,
                heading7: product1.singleProduct1.fact.benefits.content.heading7,
                content7: product1.singleProduct1.fact.benefits.content.content7,
                heading8: product1.singleProduct1.fact.benefits.content.heading8,
                content8: product1.singleProduct1.fact.benefits.content.content8,
                heading9: product1.singleProduct1.fact.benefits.content.heading9,
                content9: product1.singleProduct1.fact.benefits.content.content9,
              },
            
            },

            headingNature: {
              main: product1.singleProduct1.fact.headingNature.main,
              sub1: product1.singleProduct1.fact.headingNature.sub1,
              sub2: product1.singleProduct1.fact.headingNature.sub2,
              content2: product1.singleProduct1.fact.headingNature.content2,
              photos: product1.singleProduct1.fact.headingNature.photos,
              fruitname: product1.singleProduct1.fact.headingNature.fruitname,
              fruitContent: product1.singleProduct1.fact.headingNature.fruitContent,
            },
            ingredientsData: {
              title: product1.singleProduct1.fact.ingredientsData.title,
              ingredientImages: product1.singleProduct1.fact.ingredientsData.ingredientImages,
              name: product1.singleProduct1.fact.ingredientsData.name,
            },
            
          },
        
        },
      },
      
    });

    res.status(201).json(newShopping);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error from createShopping API' });
  }
};

const increaseProductQuantity = async (productId, quantityToAdd) => {
  try {
    const shoppingEntry = await Shopping.findById(productId);

    if (!shoppingEntry) {
      throw new Error("Shopping entry not found");
    }

    shoppingEntry.product1.singleProduct1.quantity += quantityToAdd;
    shoppingEntry.product1.singleProduct1.price = shoppingEntry.product1.singleProduct1.price +
      shoppingEntry.product1.singleProduct1.price * quantityToAdd; // Recalculate price
    await shoppingEntry.save();

    return shoppingEntry;
  } catch (error) {
    throw error;
  }
};

const decreaseProductQuantity = async (productId, quantityToSubtract) => {
  try {
    const shoppingEntry = await Shopping.findById(productId);

    if (!shoppingEntry) {
      throw new Error("Shopping entry not found");
    }

    if (shoppingEntry.product1.singleProduct1.quantity < quantityToSubtract) {
      throw new Error("Insufficient quantity");
    }

    shoppingEntry.product1.singleProduct1.quantity -= quantityToSubtract;
    shoppingEntry.product1.singleProduct1.price = shoppingEntry.product1.singleProduct1.price -
      shoppingEntry.product1.singleProduct1.price * quantityToSubtract; // Recalculate price
    await shoppingEntry.save();

    return shoppingEntry;
  } catch (error) {
    throw error;
  }
};


const getAllShop = async (req, res) => {
  try {
    const shoppingEntries = await Shopping.find();
    res.json({
      success: true,
      message: "All shopping entries retrieved successfully",
      shoppingEntries,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const singleProduct=async(req, res)=>{
  const blogId = req.params.id;
  try {
    const blog = await Shopping.findById(blogId);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error from get blog api' });
  }
}



module.exports = { createShopping, getAllShop ,singleProduct,increaseProductQuantity,decreaseProductQuantity};
