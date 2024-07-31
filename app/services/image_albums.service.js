const image_album = require('../models/image_album.model');
const rest = require('../utils/restware');
module.exports = {
    getAll: async function (req, res) {
        try {
            const results = await image_album.findAll({
                attributes: ['image_id', 'album_id', 'added_at'],
                raw: true,
            });
            return rest.sendSuccessOne(res, results, 200);
        } catch (error) {
            return rest.sendError(res, 1, 'error_fetching_users', 500, error);
        }
    },
    getOne: async function (req, res) {
        const id = req.params.id || '';
        try {
            const attributes =['image_id', 'album_id', 'added_at'];
            const where = { image_id: id };
            const result = await image_album.findOne({
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
            const result = await image_album.update(updatedData, { where: { image_id: id } });
            if (result[0] === 1) {
                return rest.sendSuccessOne(res, { message: 'Updated successfully' }, 200);
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
            const result = await image_album.destroy({
                where: { image_id: id }
            });
            if (result) {
                res.status(200).json({ message: 'Deleted successfully' });
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting tag', error: error.message });
        }
    },
    create: async function (req, res) {
        const {image_id,album_id } = req.body;
        if (!image_id || !album_id) {
            return rest.sendError(res, 1, 'missing_required_fields', 400);
        }
        try {
            const news = {
                image_id,
                album_id,
            };
            const result = await image_album.create(news);
            return rest.sendSuccessOne(res, result, 201);
        } catch (error) {
            return rest.sendError(res, 1, 'create_error', 500, error);
        }
    },
};
