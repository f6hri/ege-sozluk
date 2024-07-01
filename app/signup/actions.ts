'use server'

import { FormState, SignupFormSchema } from "../lib/definitions";

export async function signup(state:FormState,formData:FormData):Promise<FormState>{
    const validatedFields = SignupFormSchema.safeParse({
        name:formData.get('name'),
        email:formData.get('email'),
        password:formData.get('password')
    })
    if(!validatedFields.success){
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
}