import { z } from 'zod'; 

export const registerSchema = z.object({
  user_name: z.string() 
    .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
    .max(50, 'El nombre de usuario no puede exceder 50 caracteres')
    .regex(/^[a-zA-Z0-9_]+$/, 'El nombre de usuario solo puede contener letras, números y guiones bajos'),
  
  email: z.string()
    .email('Formato de email inválido')
    .min(5, 'El email es demasiado corto')
    .max(255, 'El email no puede exceder 255 caracteres'),
  
  password: z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(100, 'La contraseña no puede exceder 100 caracteres')
    .regex(/[A-Z]/, 'La contraseña debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'La contraseña debe contener al menos un número'),
  
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword']
});

export const loginSchema = z.object({
  email: z.string()
    .email('Formato de email inválido')
    .min(5, 'El email es requerido'),
  
  password: z.string()
    .min(1, 'La contraseña es requerida')
});

export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const validatedData = schema.parse(req.body);
      req.validatedData = validatedData;
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.issues.map(err => ({  
          field: err.path.join('.'),
          message: err.message
        }));
        
        return res.status(400).json({
          success: false,
          message: 'Error de validación',
          errors
        });
      }
      next(error);
    }
  };
};