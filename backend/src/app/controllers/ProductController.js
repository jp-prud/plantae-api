const ProductRepository = require("../repositories/ProductRepository");

class ProductController {
  async index(request, response) {
    const { orderBy } = request.query;

    const product = await ProductRepository.findAll(orderBy);

    response.status(200).json(product);
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const product = await ProductRepository.findById(id);

      if (!product) {
        return response
          .status(404)
          .json({ error: "Nenhum produto encontrado" });
      }

      response.status(200).json(product);
    } catch (err) {
      return response
        .status(400)
        .json({ error: "ID informado não é do tipo 'UUID'" });
    }
  }

  async store(request, response) {
    const { name, description, price } = request.body;

    if (!name || !description || !price) {
      return response
        .status(400)
        .json({ error: "Algum campo não foi devidamente inserido" });
    }

    try {
      const productByName = await ProductRepository.findByName(name);

      if (productByName) {
        return response.status(400).json({
          error: "O produto já existe",
        });
      }

      const newProduct = await ProductRepository.create({
        name,
        description,
        price,
      });

      return response
        .status(200)
        .json({ message: `${newProduct.name}, produto inserido` });
    } catch (err) {
      return response.status(400).json({ error: "Ocorreu um erro interno" });
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price } = request.body;

    if (!name || !description || !price) {
      return response
        .status(400)
        .json({ error: "Algum campo não foi devidamente inserido" });
    }

    try {
      const productExist = await ProductRepository.findById(id);

      if (!productExist) {
        return response.status(404).json({
          error: "Produto não encontrado",
        });
      }

      const updatedProduct = await ProductRepository.update(id, {
        name,
        description,
        price,
      });

      response.status(200).json({
        message: `Product ${updatedProduct.name} foi atualizado`,
      });
    } catch (err) {
      console.log(err);

      return response.status(400).json({
        error:
          "ID informado não é do tipo 'UUID' ou ocorreu erro na requisição",
      });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const productExist = await ProductRepository.findById(id);

      if (!productExist) {
        return response.status(404).json({ error: "Produto não encontrado" });
      }

      const product = await ProductRepository.delete(id);

      response.status(200).json({
        message: `${product.name} foi excluído`,
      });
    } catch (err) {
      return response
        .status(400)
        .json({ error: "ID informado não é do tipo 'UUID'" });
    }
  }
}

module.exports = new ProductController();
