const { Sequelize, DataTypes } = require('sequelize');
// const {u, p, h} = require('./login.js');
// var1 u, var2 p, var3 host

const sequelize = new Sequelize('reviews', process.env.VAR1, process.env.VAR2, {
    host: process.env.VAR3,
    dialect: 'postgres',
    logging: false
});

// const start = async function() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// start();

const Review = sequelize.define('reviews', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    listing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    review_date: {
        type: DataTypes.STRING,
    },
    cleanliness: {
        type: DataTypes.DECIMAL,
    },
    communication: {
        type: DataTypes.DECIMAL,
    },
    check_in: {
        type: DataTypes.DECIMAL,
    },
    accuracy: {
        type: DataTypes.DECIMAL,
    },
    location_review: {
        type: DataTypes.DECIMAL,
    },
    value_review: {
        type: DataTypes.DECIMAL,
    },
}, {
    timestamps: false,
});

const Customer = sequelize.define('customers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

Customer.hasMany(Review, {
    foreignKey: 'customer_id',
});
Review.belongsTo(Customer, {foreignKey: 'customer_id'});

Customer.sync();
Review.sync();

module.exports.Review = Review;
module.exports.Customer = Customer;
