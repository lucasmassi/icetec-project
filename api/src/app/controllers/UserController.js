import { Op } from 'sequelize';
import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });
  
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Erro de validação, verifique os dados' });
      }
  
      const userExists = await User.findOne({ where: { email: req.body.email } });
  
      if (userExists) {
        return res.status(400).json({ error: 'Já existe um usuário com este e-mail' });
      }
  
      const user = await User.create(req.body);

      return res.json({ id: user.id, name: user.name, email: user.email });
    } catch (err) {
      await Log.create({
        type: "users",
        action: "erro na criação de usuário",
        user_id: req.userId,
        request: JSON.stringify(req.body, null, 2),
        response: err.message,
      });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string()
    });
    
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação, verifique os dados' });
    }

    const { email } = req.body;

    const user = await User.findByPk(req.params.id);

    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'Já existe um usuário com esse e-mail' });
      }
    }

    if (req.body.password == "") req.body.password = null;

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async listById(req, res) {
    const userId = req.params.id;

    if (!userId) {
      return res.status(400).send({ error: 'O id do usuário é obrigatório' })
    }

    const { id, name, email } = await User.findByPk(userId);

    return res.json({
      id,
      name,
      email,
    });
  }

  async listAll(req, res) {
    const page = req.query.page * 1;
    const limit = 5;
    const offset = 0 + (page - 1) * limit;
    const userId = req.userId;
    const users = await User.findAndCountAll({
      offset: offset,
      limit: limit,
      where: { 
        id: { 
          [Op.ne]: userId
        } 
      },
      attributes: ['id', 'name', 'email'],
      order: ["id"]
    });

    return res.json({
      users: users.rows,
      page: page, 
      total: users.count,
      limit,
      next: users.count/limit > page
  });
  }

  async delete(req, res) {
    const id = req.params.id;

    const userExists = await User.findByPk(id);

    if (userExists) {
      await userExists.destroy();
      return res.json('Deletado com sucesso');
    }

    return res.status(400).json('Erro ao deletar usuário');
  }
}

export default new UserController();
