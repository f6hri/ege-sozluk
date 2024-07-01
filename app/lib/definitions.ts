import { z } from 'zod';

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(4, { message: 'ismin en az 4 karakterden büyük olmalı' })
        .trim(),
    email: z.string().email({ message: 'bir e-posta adresi girmelisin.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'şifren 8 karekterden büyük olmalı' })
        .regex(/[A-Z]/, { message: 'şifren büyük harf içermeli' })
        .regex(/[0-9]/, { message: 'şifren bir rakam içermeli' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'şifren bir özel karakter içermeli',
        })
        .trim(),
});

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'bir e-posta adresi girmelisin.' }),
    password: z.string().min(1, { message: 'bir şifre girmelisin.' }),
});

export type FormState =
    | {
        errors?: {
            name?: string[];
            email?: string[];
            password?: string[];
        };
        message?: string;
    }
    | undefined;

export type SessionPayload = {
    userId: string | number;
    expiresAt: Date;
};