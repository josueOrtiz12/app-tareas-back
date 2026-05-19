import { Op } from 'sequelize';

export const buildFilter = (query, fieldMap = {}) => {
    try {
        const { page = 1, limit = 10, ...filters } = query;

        const parseLimit = parseInt(limit, 10) || 10;
        const parsePage = parseInt(page, 10) || 1;
        const offset = (parsePage - 1) * parseLimit;

        const where = {};

        Object.keys(fieldMap).forEach((queryKey) => {
            const dbColumn = fieldMap[queryKey];
            const value = query[queryKey];

            if (value) {
                where[dbColumn] = { [Op.iLike]: `%${value.trim()}%` };
            }
        });
        
        return { where, limit: parseLimit, offset, page: parsePage };
    } catch (error) {
        throw new Error(`Error al construir el filtro: ${error.message}`);
    }
}

export default buildFilter;