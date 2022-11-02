const ProductiveLocaleRepository = require("../repositories/ProductiveLocaleRepository");

class ProductiveLocaleController {
  async index(request, response) {
    const { orderBy } = request.query;

    const producers = await ProductiveLocaleRepository.findAll(orderBy);

    response.status(200).json(producers);
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const productiveLocale = await ProductiveLocaleRepository.findById(id);

      if (!productiveLocale) {
        return response
          .status(404)
          .json({ error: "Local Produtivo não encontrado" });
      }

      response.status(200).json(productiveLocale);
    } catch (e) {
      console.log("Erro na requisição ou UUID não está no formato:", e);
    }
  }

  async store(request, response) {
    const { name, address_info, quality_seal_id } = request.body;

    const productiveLocaleByAddress =
      await ProductiveLocaleRepository.findByAddress(address_info);

    if (productiveLocaleByAddress) {
      return response.status(400).json({
        error: "Endereço já está sendo usado",
      });
    }

    const newProductiveLocale = await ProductiveLocaleRepository.create({
      name,
      address_info,
      quality_seal_id,
    });

    return response
      .status(200)
      .json({ message: `${newProductiveLocale.name},foi criado` });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, address_info, quality_seal_id } = request.body;

    const producerExist = await ProductiveLocaleRepository.findById(id);

    if (!producerExist) {
      return response.status(404).json({
        error: "Local Produtivo não encontrado",
      });
    }

    if (!name) {
      return response.status(400).json({
        error: "Nome é requerido",
      });
    }

    if (!address_info) {
      return response.status(400).json({
        error: "Informações de Endereço são requeridas",
      });
    }

    const productiveLocaleByAddress =
      await ProductiveLocaleRepository.findByAddress(address_info);

    if (productiveLocaleByAddress && productiveLocaleByAddress.id !== id) {
      return response.status(400).json({
        error: "Informações de Endereço já estão sendo utilizadas",
      });
    }

    const updatedProductiveLocale = await ProductiveLocaleRepository.update(
      id,
      { address_info, quality_seal_id }
    );

    response.status(200).json({
      error: `Local Produtivo ${updatedProductiveLocale.name} foi atualizado`,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const productiveLocale = await ProductiveLocaleRepository.findById(id);

      if (!productiveLocale) {
        return response
          .status(404)
          .json({ error: "Local Produtivo não encontrado" });
      }

      const productiveLocaleExcluded = await ProductiveLocaleRepository.delete(
        id
      );

      response.status(200).json({
        message: `${productiveLocaleExcluded.name} foi excluído`,
      });
    } catch (e) {
      console.log("Erro na requisição ou UUID não está no formato:", e);
    }
  }
}

module.exports = new ProductiveLocaleController();
