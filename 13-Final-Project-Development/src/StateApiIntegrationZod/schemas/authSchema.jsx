import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string().min(3, "Name must be at Least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at Least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm Password must be at Least 8 characters"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at Least 8 characters"),
});
