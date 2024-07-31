const albums = require('../models/albums.model');
const rest = require('../utils/restware');
module.exports = {
    getAll: async function (req, res) {
        try {
            const results = await albums.findAll({
                attributes: ['album_id', 'owner_user_id', 'album_title','album_description','cover_image_id','created_at','updated_at'],
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
            const attributes =['album_id', 'owner_user_id', 'album_title','album_description','cover_image_id','created_at','updated_at'];
            const where = { album_id: id };
            const result = await albums.findOne({
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
            const result = await albums.update(updatedData, { where: { album_id: id } });
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
            const result = await albums.destroy({
                where: { album_id: id }
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
        const {album_id,album_title} = req.body;
        if (!album_id || !album_title) {
            return rest.sendError(res, 1, 'missing_required_fields', 400);
        }
        try {
            const news = {
                album_id,
                album_title,
            };
            const result = await albums.create(news);
            return rest.sendSuccessOne(res, result, 201);
        } catch (error) {
            return rest.sendError(res, 1, 'create_error', 500, error);
        }
    },
};
