import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  logging: false,  
});


export default sequelize;
