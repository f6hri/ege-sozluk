import { Button, Card, Checkbox, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";

export default function Login() {
    return (
        <main className="w-screen h-screen flex justify-center flex-col gap-16 items-center">
            <span className="text-5xl">
                <span className="text-blue-700 font-bold">ege</span>
                <span>Sözlük</span>
            </span>
            <Card size="3" className="min-w-[400px]">
                <Heading size="6" className="text-center">giriş yap</Heading>
                <div className="mt-3 flex flex-col gap-3">
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
                        <Text as="label" size="2">
                            <Flex gap="2">
                                <Checkbox defaultChecked />
                                beni hatırla
                            </Flex>
                        </Text>
                    </label>
                    <Button>giriş</Button>
                    <div className="flex flex-col text-center text-sm">
                        <Text as="div">hesabın yok mu?</Text>
                        <Link href="#" className="font-semibold hover:underline">kayıt ol</Link>
                    </div>
                </div>
            </Card>
        </main>
    );
}