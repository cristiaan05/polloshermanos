import Product from "../models/Product.js";

export async function createProduct(request, response) {
    try {
        const { name } = request.body;

        // const newProductInstance = new Product.build({ name });
        // const newProduct = await newProductInstance.save();

        const newProduct = await Product.build({ name }).save();
        response.send(newProduct);
    } catch (error) {
        response.status.send({
            message: 'There was an error while creating a new product',
            error,
        });
    }
}

