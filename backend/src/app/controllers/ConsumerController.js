const ConsumersRepository = require('../repositories/ConsumerRepository');

class ConsumerController {
  async index(request, response) {
    const { orderBy } = request.query;

    try {
      const consumers = await ConsumersRepository.findAll(orderBy);

      response.status(200).json(consumers);
    } catch (err) {
      return response
        .status(400)
        .json({ error: 'Ocorreu um erro com a base de dados' });
    }
  }

  async show(request, response) {
    const { id } = request.params;

    try {
      const consumer = await ConsumersRepository.findById(id);

      if (!consumer) {
        return response
          .status(404)
          .json({ error: 'Consumidor não encontrado' });
      }

      response.status(200).json(consumer);
    } catch (err) {
      return response
        .status(400)
        .json({ error: "ID informado não é do tipo 'UUID'" });
    }
  }

  async store(request, response) {
    const { name, email, phone, password } = request.body;

    const consumerByEmail = await ConsumersRepository.findByEmail(email);

    if (consumerByEmail) {
      return response.status(400).json({
        error: 'Email já está sendo usado',
      });
    }

    const newConsumer = await ConsumersRepository.create({
      name,
      email,
      phone,
      password,
    });

    return response
      .status(200)
      .json({ message: `${newConsumer.name}, criou a sua conta` });
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, password } = request.body;

    try {
      const consumerExist = await ConsumersRepository.findById(id);

      if (!consumerExist) {
        return response.status(404).json({
          error: 'Consumer não encontrado',
        });
      }

      if (!email) {
        return response.status(400).json({
          error: 'Email é obrigatório',
        });
      }

      const consumerByEmail = await ConsumersRepository.findByEmail(email);

      if (consumerByEmail && consumerByEmail.id !== id) {
        return response.status(400).json({
          error: 'Email já está em uso',
        });
      }

      const updatedConsumer = await ConsumersRepository.update(id, {
        name,
        email,
        phone,
        password,
      });

      response.status(200).json({
        message: `Consumidor ${updatedConsumer.name} foi atualizado`,
      });
    } catch (err) {
      return response
        .status(400)
        .json({ error: "ID informado não é do tipo 'UUID'" });
    }
  }

  async delete(request, response) {
    const { id } = request.params;

    try {
      const consumerExist = await ConsumersRepository.findById(id);

      if (!consumerExist) {
        return response.status(404).json({ error: 'Consumer não encontrado' });
      }

      const consumer = await ConsumersRepository.delete(id);

      response.status(200).json({
        message: `${consumer.name} foi excluído`,
      });
    } catch (err) {
      return response
        .status(400)
        .json({ error: "ID informado não é do tipo 'UUID'" });
    }
  }
}

module.exports = new ConsumerController();
