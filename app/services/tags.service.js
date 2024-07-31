const Tag = require('../models/tags.model');
const rest = require('../utils/restware');
module.exports = {
    getAll: async function (req, res) {
        try {
            const results = await Tag.findAll({
                attributes: ['tag_id', 'tag_name', 'tag_description', 'created_at', 'updated_at'],
                raw: true,
            });
            return rest.sendSuccessOne(res, results, 200);
        } catch (error) {
            return rest.sendError(res, 1, 'error_fetching_users', 500, error);
        }
    },
    getOne: async function(req, res) {
        const id = req.params.id || '';
        try {
            const attributes =['tag_id', 'tag_name', 'tag_description', 'created_at', 'updated_at'];
            const where = { tag_id: id };
            const result = await Tag.findOne({
                where: where,
                attributes: attributes,
                raw: true,
            });
            if (result) {
                return rest.sendSuccessOne(res, result, 200);
            } else {
                return rest.sendError(res, 1, 'unavailable_account', 400);
            }
        } catch (error) {
            return rest.sendError(res, 400, 'get_account_fail', 400, error);
        }
    },
    update: async function (req, res) {
        const id = req.params.id;
        const updatedData = req.body;
        try {
            const result = await Tag.update(updatedData, { where: { tag_id: id } });
            if (result[0] === 1) {
                return rest.sendSuccessOne(res, { message: 'User updated successfully' }, 200);
            } else {
                return rest.sendError(res, 1, 'update_failed', 400);
            }
        } catch (error) {
            return rest.sendError(res, 1, 'update_error', 500, error);
        }
    },
    delete: async function (req, res) {
        const id = req.params.id;
        try {
            const result = await Tag.destroy({
                where: { tag_id: id }
            });
            if (result) {
                res.status(200).json({ message: 'Tag deleted successfully' });
            } else {
                res.status(404).json({ message: 'Tag not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting tag', error: error.message });
        }
    },
    create: async function (req, res) {
        const {tag_id,tag_name } = req.body;
        if (!tag_id || !tag_name) {
            return rest.sendError(res, 1, 'missing_required_fields', 400);
        }
        try {
            const newTag = {
                tag_id,
                tag_name,
            };
            const result = await Tag.create(newTag);
            return rest.sendSuccessOne(res, result, 201);
        } catch (error) {
            return rest.sendError(res, 1, 'create_error', 500, error);
        }
    },
};
