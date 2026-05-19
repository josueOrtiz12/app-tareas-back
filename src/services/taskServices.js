import AppError from "../helpers/AppError.js";
import { Task } from "../models/task.js";


const taskServices = {
    getAllTasks: async (filterQuery, userId) => {
        try {
            const page = parseInt(filterQuery.page) || 1;
            const limit = parseInt(filterQuery.limit) || 10;
            const offset = (page - 1) * limit;
            const { rows, count } = await Task.findAndCountAll({
                where: {
                    user_id: userId,
                    deleted_at: null,
                    ...filterQuery.where
                },
                limit: limit,
                offset: offset,
                order: [['created_at', 'DESC']],
                logging: (sql) => console.log('SQL QUERY:', sql)
            });

            console.log('Resultados encontrados:', count);
            return { task: rows, totalItems: count };
        } catch (error) {
            console.error('Error en getAllTasks:', error);
            throw new AppError(error.message, 500, error.message);
        }
    },



    createTask: async (taskForm) => {
        try {
            const { task_name, task_description, task_limit, task_status, user_id } = taskForm;
            if (!task_name || !task_description || !task_status) {
                throw new AppError('Todos los campos son obligatorios', 400, 'Todos los campos son obligatorios');
            }
            const newTask = await Task.create({ task_name, task_description, task_limit, task_status, user_id });
            return newTask;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message, 500, error.message);
        }
    },




    getTaskById: async (id, userId) => {
        try {
            const task = await Task.findOne({ where: { id, user_id: userId } });
            if (!task) {
                throw new AppError('Tarea no encontrada', 404, 'Tarea no encontrada');
            }
            return task;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message, 500, error.message);
        }
    },
    updateTask: async (id, taskForm , userId) => {
        try {
            const task = await Task.findOne({ where: { task_id : id, user_id: userId } });
            if (!task) {
                throw new AppError('Tarea no encontrada', 404, 'Tarea no encontrada');
            }
            await task.update(taskForm);
            return task;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message, 500, error.message);
        }
    },
    deleteTask: async (id, userId) => {
        try {
            const task = await Task.findOne({ where: { task_id : id, user_id: userId } });
            if (!task) {
                throw new AppError('Tarea no encontrada', 404, 'Tarea no encontrada');
            }

            await task.update({
                deleted_at: new Date()
            });

           return { message: 'Tarea eliminada correctamente' };
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(error.message, 500, error.message);
        }
    }
}

export default taskServices;