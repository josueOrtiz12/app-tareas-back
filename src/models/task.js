import { DataTypes } from "sequelize";
import sequelize from "../../config/Database.js";
import { User } from "./user.js";

export const Task  = sequelize.define('tasks', {
    task_id: {
        type : DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    task_name :{
        type: DataTypes.STRING,
        allowNull: false
    },
    task_description :{
        type: DataTypes.STRING,
        allowNull: false
    },
    task_status :{
        type: DataTypes.ENUM('PENDIENTE', 'EN_PROGRESO', 'COMPLETADA'),
        defaultValue: 'PENDIENTE',
        allowNull: false,
    },
    task_limit :{
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_at: {
    type: DataTypes.DATE,
    allowNull: true
}
},{
    freezeTableName: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
    defaultValues: {
        createdAt: DataTypes.NOW,
        updatedAt: DataTypes.NOW
    }
})


User.hasMany(Task, {
    foreignKey: 'user_id',
    sourceKey: 'user_id' 
});


Task.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'user_id'
});