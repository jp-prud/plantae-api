import QualitySealRepository from '../repositories/QualitySealRepository';

class QualitySealController {
  async index(request, response) {
    const { orderBy } = request.query;

    const qualitySeal = await QualitySealRepository.findAll(orderBy);

    response.status(200).json(qualitySeal);
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const qualitySeal = await QualitySealRepository.findById(id);

      if (!qualitySeal) {
        return response
          .status(404)
          .json({ error: 'Selo de Qualidade não encontrado' });
      }

      response.status(200).json(qualitySeal);
    } catch (e) {
      console.log('Erro na requisição ou UUID não está no formato:', e);
    }
  }

  async store(request, response) {
    const { name, image } = request.body;

    const qualitySealByName = await QualitySealRepository.findByName(name);

    if (qualitySealByName) {
      return response.status(400).json({
        error: 'Nome já está sendo usado',
      });
    }

    const newQualitySeal = await QualitySealRepository.create({
      name,
      image,
    });

    return response
      .status(200)
      .json({ message: `${newQualitySeal.name}, foi criado` });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, image } = request.body;

    const qualitySealExist = await QualitySealRepository.findById(id);

    if (!qualitySealExist) {
      return response.status(404).json({
        error: 'Selo de QUalidade não encontrado',
      });
    }

    if (!name) {
      return response.status(400).json({
        error: 'Nome é requerido',
      });
    }

    if (!image) {
      return response.status(400).json({
        error: 'Imagem é requerido',
      });
    }

    const qualitySealByName = await QualitySealRepository.findByName(name);

    if (qualitySealByName && qualitySealByName.id !== id) {
      return response.status(400).json({
        error: 'Nome já está sendo utilizada',
      });
    }

    const updatedQualitySeal = await QualitySealRepository.update(id, {
      name,
      image,
    });

    response.status(200).json({
      error: `Selo de Qualidade ${updatedQualitySeal.name} foi atualizado`,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const qualitySeal = await QualitySealRepository.findById(id);

      if (!qualitySeal) {
        return response
          .status(404)
          .json({ error: 'Selo de Qualidade não encontrado' });
      }

      const qualitySealExcluded = await QualitySealRepository.delete(id);

      response.status(200).json({
        message: `${qualitySealExcluded.name} foi excluído`,
      });
    } catch (e) {
      console.log('Erro na requisição ou UUID não está no formato:', e);
    }
  }
}

export default new QualitySealController();
