const getProducts = (req, res) => {
    res.json({
        products: [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
        ]

    })
}


const postProducts = (req, res) => {
    res.json({
        message: "Product Added Successfully"
    })

}

const getAllproducts = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const allproducts = await product.find()
        res.json({
            product: allproducts
        })

    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}


const getproductByID = async (req, res) => {

    const { _id } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const product = await product.findOne({ _id })
        res.json({ product })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
const getproductBycategory = async (req, res) => {

    const { _category } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const product = await product.find({ _category })
        res.json({ product })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}
const getproductByBrand = async (req, res) => {

    const { _Brand } = req.query


    try {
        await connect(process.env.MONGO_URI)
        const product = await product.find({ _Brand })
        res.json({ product })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

const updateproduct = async (req, res) => {
    const { _id, productName, productImage } = req.body

    const filter = { _id };
    const update = { productName, productImage };

    try {
        await connect(process.env.MONGO_URI)

        await product.findOneAndUpdate(filter, update, {
            new: true
        });

        const product = await product.find()

        res.json({
            message: "Success",
            product
        })

    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

const deleteproduct = async (req, res) => {

    const { _id } = req.body


    try {
        await connect(process.env.MONGO_URI)
        await product.deleteOne({ _id })
        const product = await product.find()
        res.status(200).json({
            message: "Deleted Successfully",
            product
        })
    }


    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}



module.exports = { getProducts, postProducts, getAllproducts, getproductByID, getproductBycategory, getproductByBrand, updateproduct, deleteproduct}