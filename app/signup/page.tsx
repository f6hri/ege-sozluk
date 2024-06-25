import { Button, Card, Checkbox, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";

export default function SignUp() {
    return (
        <main className="w-screen h-screen flex justify-center flex-col gap-16 items-center">
            <span className="text-5xl">
                <span className="text-blue-700 font-bold">ege</span>
                <span>Sözlük</span>
            </span>
            <Card size="3" className="min-w-[400px]">
                <Heading size="6" className="text-center">kayıt ol</Heading>
                <div className="mt-3 flex flex-col gap-3">
                <label>
                        <Text as="div">kullanıcı adı</Text>
                        <TextField.Root
                            placeholder="kullanıcı adı girin"
                            type="text"
                        />
                    </label>
                    <label>
                        <Text as="div">e-posta</Text>
                        <TextField.Root
                            placeholder="e-posta girin"
                            type="email"
                        />
                    </label>
                    <label>
                        <Text as="div">şifre</Text>
                        <TextField.Root
                            placeholder="şifre girin"
                            type="password"
                        />
                    </label>
                    <label>
                        <Text as="div">şifre tekrar</Text>
                        <TextField.Root
                            placeholder="şifre tekrar girin"
                            type="password"
                        />
                    </label>
                    <Button>kayıt ol</Button>
                    <div className="flex flex-col text-center text-sm">
                        <Text as="div">hesabın var mı?</Text>
                        <Link href="#" className="font-semibold hover:underline">giriş yap</Link>
                    </div>
                </div>
            </Card>
        </main>
    );
}