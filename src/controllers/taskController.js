import taskServices from '../services/taskServices.js';
import buildFilter from '../helpers/helperfilter.js';

const taskController = {
    getAllTasks: async (req, res) => {
        try {

            const userId = req.user.id;

            const taskFields = {
                taskName: 'task_name',
                taskDescription: 'task_description',
                taskLimit: 'task_limit',
                taskStatus: 'task_status'
            }

            const query = buildFilter(req.query, taskFields);

            const { task, totalItems } = await taskServices.getAllTasks(query, userId);
            res.status(200).json({
                success: 200,
                data: task,
                pagination: {
                    totalItems: totalItems,
                    totalPages: Math.ceil(totalItems / query.limit),
                    currentPage: query.page
                }
            });
        } catch (error) {
            const status = error.statusCode || 500;
            res.status(status).json({
                status: status,
                message: error.message,
                error: error.name
            });
        }
    },
    createTask: async (req, res) => {
        try {

            const allowedStatus = ['PENDIENTE', 'EN_PROGRESO', 'COMPLETADA'];
            const inputStatus = req.body.status ? req.body.status.toUpperCase() : 'PENDIENTE';
            const taskStatus = allowedStatus.includes(inputStatus) ? inputStatus : 'PENDIENTE';


            const userId = req.user.id;
            const taskForm = {
                task_name: req.body.title,
                task_description: req.body.description,
                task_status: taskStatus,
                user_id: userId
            }

            const newTask = await taskServices.createTask(taskForm);
            res.status(201).json({ success: true, data: newTask });
        } catch (error) {
            console.error("ERROR DETALLADO:", error);

            res.status(500).json({
                success: false,
                message: error.message || 'Error interno del servidor'
            });
        }

    },
    getTaskById: async (req, res) => {
        try {
            const userId = req.user.id;
            const { id } = req.params;
            const task = await taskServices.getTaskById(id, userId);
            res.status(200).json({ success: true, data: task });
        } catch (error) {
            const status = error.statusCode || 500;
            res.status(status).json({
                success: false,
                message: error.message,
                error: error.name
            });
        }
    },

    updateTask: async (req, res) => {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        
        const { title, description, taskLimit, status,  } = req.body;

        const mappedData = {
            ...(title && { task_name: title }),
            ...(description && { task_description: description }),
            ...(taskLimit && { task_limit: taskLimit }),
            ...(status && { task_status: status })
        };

        const task = await taskServices.updateTask(id, mappedData, userId);
        
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        const status = error.statusCode || 500;
        res.status(status).json({
            success: false,
            message: error.message,
            error: error.name
        });
    }
},

    deleteTask: async (req, res) => {
        try {
            const userId = req.user.id;
            const { id } = req.params;
            const task = await taskServices.deleteTask(id, userId);
            res.status(200).json({ success: true, data: task });
        } catch (error) {
            const status = error.statusCode || 500;
            res.status(status).json({
                success: false,
                message: error.message,
                error: error.name
            });
        }
    }
}

export default taskController;