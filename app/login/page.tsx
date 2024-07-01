import { Button, Card, Checkbox, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import Form from "./form";

export default function Login() {
    return (
        <main className="w-screen h-screen flex justify-center flex-col gap-16 items-center">
            <span className="text-5xl">
                <span className="text-blue-700 font-bold">ege</span>
                <span>Sözlük</span>
            </span>
            <Form />
        </main>
    );
}