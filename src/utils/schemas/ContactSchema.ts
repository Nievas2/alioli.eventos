import * as zod from "zod"

export const ContactSchema = zod.object({
  name: zod
    .string()
    .min(2, "Minimo 2 caracteres")
    .max(100, "Maximo 100 caracteres"),
  time: zod
    .string()
    .min(2, "Minimo 2 caracteres")
    .max(100, "Maximo 100 caracteres"),
  phone: zod
    .string()
    .min(10, "Minimo 10 caracteres")
    .max(30, "Maximo 30 caracteres"),
  email: zod
    .string()
    .email("Formato de email incorrecto")
    .min(2, "Minimo 2 caracteres")
    .max(100, "Maximo 100 caracteres"),
  location: zod
    .string()
    .min(2, "Minimo 2 caracteres")
    .max(100, "Maximo 100 caracteres"),
  people: zod
    .string()
    .min(1, "Minimo 2 caracteres")
    .max(100, "Maximo 100 caracteres"),
  message: zod
    .string()
    .min(10, "Minimo 10 caracteres")
    .max(1000, "Maximo 1000 caracteres"),
})
