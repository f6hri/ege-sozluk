'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { signup } from './actions';
import { Button, Card, Checkbox, Flex, Heading, Spinner, Text, TextField } from '@radix-ui/themes';
import Link from 'next/link';


export default function Form() {
    const [state, action] = useFormState(signup, undefined);
    return (
        <form action={action}>
            <Card size="3" className="min-w-[400px]">
                <Heading size="6" className="text-center">giriş yap</Heading>
                <div className="mt-3 flex flex-col gap-3">
                    <label htmlFor='name'>
                        <Text as="div">kullanıcı adı</Text>
                        <TextField.Root
                            name="name"
                            placeholder="e-posta girin"
                            type="text"
                        />
                        {state?.errors?.name && (
                            <p className="text-sm text-red-500">{state.errors.name}</p>
                        )}
                    </label>
                    <label htmlFor='email'>
                        <Text as="div">e-posta</Text>
                        <TextField.Root
                            name="email"
                            placeholder="e-posta girin"
                            type="email"
                        />
                        {state?.errors?.email && (
                            <p className="text-sm text-red-500">{state.errors.email}</p>
                        )}
                    </label>
                    <label htmlFor='password'>
                        <Text as="div">şifre</Text>
                        <TextField.Root
                            placeholder="şifre girin"
                            type="password"
                            name="password"
                        />
                        {state?.errors?.password && (
                            <div className="text-sm text-red-500">
                                <p>şifren için:</p>
                                <ul>
                                    {state.errors.password.map((error) => (
                                        <li key={error}>- {error}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </label>
                    <LoginButton />
                    <div className="flex flex-col text-center text-sm">
                        <Text as="div">hesabın var mı?</Text>
                        <Link href="#" className="font-semibold hover:underline">giriş yao</Link>
                    </div>
                </div>
            </Card>
        </form>
    );
}

export function LoginButton() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type='submit'>
            {
                pending ? (<Spinner />) : "giriş"
            }
        </Button>
    )
}