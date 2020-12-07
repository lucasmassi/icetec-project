import { Op } from 'sequelize';
import * as Yup from 'yup';
import Developer from '../models/Developer';

class DeveloperController {
    async create(req, res) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                age: Yup.string().required(),
                url_linkedin: Yup.string(),
                tecnologies: Yup.string(),
            });

            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fail. Verify your data' });
            }

            const dev = await Developer.create(req.body);

            return res.json(dev);
        } catch (err) {
            return res.status(400).json({ error: 'Error creating developer', message: err.message })
        }
    }

    async update(req, res) {
        try {
            const devId = req.params.id;
            const schema = Yup.object().shape({
                name: Yup.string(),
                email: Yup.string().email(),
                age: Yup.string(),
                url_linkedin: Yup.string(),
                tecnologies: Yup.string(),
            });
    
            if (!(await schema.isValid(req.body))) {
                return res.status(400).json({ error: 'Validation fail. Verify your data' });
            }
    
            if (!devId) {
                return res.status(400).json({ error: 'Erro. Developer id is required' });
            }
    
            const dev = await Developer.findByPk(devId);

            const devUpdated = await dev.update(req.body);
    
            return res.json(devUpdated);
        } catch (err) {
            return res.status(400).json({ error: 'Error updating developer', message: err.message })
        }
    }

    async listById(req, res) {
        try {
            const devId = req.params.id;
    
            if (!devId) {
                return res.status(400).send({ error: 'Developer not found' })
            }
    
            const dev = await Developer.findByPk(devId);

            if (!dev) {
                return res.status(400).json({ error: 'Developer not found' });
            }
    
            return res.json(dev);
        } catch (err) {
            return res.status(400).json({ error: 'Error listing developers', message: err.message })
        }
    }

    async listAll(req, res) {
        try {
            const search = req.query.search ?? "";
            const developers = await Developer.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${search}%` } },
                        { age: { [Op.like]: `%${search}%` } },
                        { tecnologies: { [Op.like]: `%${search}%` } },
                    ]
                },
                order: ["name"]
            });
    
            return res.json(developers);
        } catch (err) {
            return res.status(400).json({ error: 'Error listing developers', message: err.message })
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
    
            const devExists = await Developer.findByPk(id);
    
            if (devExists) {
                await devExists.destroy();
                return res.json('Deletado com sucesso');
            }
    
            return res.status(400).json('Developer not exists');
        } catch (err) {
            return res.status(400).json({ error: 'Error deleting developer', message: err.message })
        }
    }
}

export default new DeveloperController();
