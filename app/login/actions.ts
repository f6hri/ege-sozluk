'use server'

import { FormState, LoginFormSchema } from "../lib/definitions";

export async function login(state: FormState,formData: FormData): Promise<FormState> {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    const errorMessage = { message: 'Invalid login credentials.' };
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
}