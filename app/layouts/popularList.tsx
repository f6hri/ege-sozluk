import { Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function PopularList() {
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading>Popüler</Heading>
            </div>
            <div className="mt-8 flex flex-col gap-5">
                <Link href="#" className="w-full text-sm">kurumsallık</Link>
                <Link href="#" className="w-full text-sm">kurumsallık</Link>
                <Link href="#" className="w-full text-sm">kurumsallık</Link>
                <Link href="#" className="w-full text-sm">kurumsallık</Link>
            </div>
        </>
    );
}