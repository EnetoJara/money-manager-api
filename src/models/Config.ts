import { Sequelize } from 'sequelize';

const user = process.env.USER;
const pss = process.env.PSS;
const DB = process.env.DB;

export default new Sequelize(`postgres://${user}:${pss}@localhost:5432/${DB}`, {
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
