'use strict';

const { UserSchema, USER_TABLE } = require('../models/user.model')

module.exports = {
	up: async (queryInterface) => {
		await queryInterface.addColmn(USER_TABLE, 'role', UserSchema.role);
	},

	down: async (queryInterface) => {
		await queryInterface.removeColmn(USER_TABLE, 'role');
	}
};
