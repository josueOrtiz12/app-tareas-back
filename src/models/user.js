import { DataTypes } from "sequelize";
import sequelize from "../../config/Database.js";


export const User  = sequelize.define('users', {
    user_id: {
        type : DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    user_name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email :{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password :{
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
    defaultValues: {
        created_at: DataTypes.NOW,
        updated_at: DataTypes.NOW
    }
})


