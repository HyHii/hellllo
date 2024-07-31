const User = require('../models/user.model');
const rest = require('../utils/restware');
module.exports = {
    getAll: async function (req, res) {
        try {
            const results = await User.findAll({
                attributes: ['user_id', 'username', 'email_address', 'full_name', 'profile_picture', 'created_at', 'updated_at'],
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
            const attributes = ['user_id', 'username', 'password', 'email_address', 'full_name', 'profile_picture', 'created_at', 'updated_at'];
            const where = { user_id: id };
            const result = await User.findOne({
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
            const result = await User.update(updatedData, { where: { user_id: id } });
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
            const result = await User.destroy({
                where: { user_id: id }
            });
            if (result) {
                res.status(200).json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error: error.message });
        }
    },
    create: async function (req, res) {
        const { user_id, username, password, email_address } = req.body;
        if (!user_id || !username || !password || !email_address) {
            return rest.sendError(res, 1, 'missing_required_fields', 400);
        }
        try {
            const newUser = {
                user_id,
                username,
                password,
                email_address,
                full_name: req.body.full_name,
                profile_picture: req.body.profile_picture
            };
            const result = await User.create(newUser);
            return rest.sendSuccessOne(res, result, 201);
        } catch (error) {
            return rest.sendError(res, 1, 'create_error', 500, error);
        }
    },
};
