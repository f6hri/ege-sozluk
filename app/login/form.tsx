'use client'
import { useFormState, useFormStatus } from 'react-dom';
import { login } from './actions';
import { Button, Card, Checkbox, Flex, Heading, Spinner, Text, TextField } from '@radix-ui/themes';
import Link from 'next/link';


export default function Form() {
    const [state, action] = useFormState(login, undefined);
    return (
        <form action={action}>
            <Card size="3" className="min-w-[400px]">
                <Heading size="6" className="text-center">giriş yap</Heading>
                <div className="mt-3 flex flex-col gap-3">
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
                            <p className="text-sm text-red-500">{state.errors.password}</p>
                        )}
                    </label>
                    <label>
                        <Text as="label" size="2">
                            <Flex gap="2">
                                <Checkbox defaultChecked />
                                beni hatırla
                            </Flex>
                        </Text>
                    </label>
                    {state?.message && (
                        <p className="text-sm text-red-500">{state.message}</p>
                    )}
                    <LoginButton />
                    <div className="flex flex-col text-center text-sm">
                        <Text as="div">hesabın yok mu?</Text>
                        <Link href="#" className="font-semibold hover:underline">kayıt ol</Link>
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