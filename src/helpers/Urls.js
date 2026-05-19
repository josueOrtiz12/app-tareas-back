const URLS = {
    auth: {
        base: '/login',   
        login: '/login',   
        signup: '/register' 
    },
    task: {
        base: '/tasks',
        create: '/tasks',
        getAll: '/tasks',
        getById: '/tasks/:id',
        update: '/tasks/:id',
        delete: '/tasks/:id'
    }
}
export default URLS;