/* eslint-disable indent */
'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('animal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
};
