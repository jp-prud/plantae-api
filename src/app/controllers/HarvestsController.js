const HarvestsRepository = require("../repositories/HarvestsRepository");

class HarvestsController {
  async index(request, response) {
    const { orderBy } = request.query;

    const harvests = await HarvestssRepository.findAll(orderBy);

    response.status(200).json(harvests);
  }

  async show(request, response) {
    const { id } = request.params;

    const harvests = await HarvestsRepository.findById(id);

    if (!harvests) {
      return response.status(404).json({ error: "No harvests found" });
    }

    response.status(200).json(harvests);
  }

  async store(request, response) {
    const { name, description, price } = request.body;

    const harvestsByName = await HarvestsRepository.findByEmail(Name);

    if (harvestsByName) {
      return response.status(400).json({
        error: "o produto já existe",
      });
    }

    const newHarvests = await HarvestsRepository.create({
      name,
      description,
      price,
    });

    return response
      .status(200)
      .json({ error: `${newHarvests.name}, produto inserido` });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, description, price } = request.body;

    const harvestsExist = await HarvestsRepository.findById(id);

    if (!harvestsExist) {
      return response.status(404).json({
        error: "Produto not found",
      });
    }

    const updatedHarvests = await HarvestsRepository.update(id, {
      name,
      description,
      price,
    });

    response.status(200).json({
      error: `Harvests ${updatedHarvests.name} foi atualizado`,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const harvestsExist = await HarvestsRepository.findById(id);

    if (!harvestsExist) {
      return response.status(404).json({ error: "Harvestse não encontrado" });
    }

    const harvests = await HarvestsRepository.delete(id);

    response.status(200).json({
      error: `${harvests.name} foi excluído`,
    });
  }
}

module.exports = new HarvestsController();
