import Container from "@/app/layouts/shared/container";
import Link from "next/link";
import SearchInput from "./searchInput";
import Tags from "./tags";

export default function Header() {
    return (
        <header className="py-5 border-b border-slate-200/50">
            <Container>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <Link href="/">
                            <span className="text-2xl">
                                <span className="text-blue-700 font-bold">ege</span>
                                <span>Sözlük</span>
                            </span>
                        </Link>
                        <SearchInput />
                        <div className="flex items-center gap-5">
                            <Link href="#">giriş yap</Link>
                            <Link href="#">kayıt ol</Link>
                        </div>
                    </div>
                    <Tags />
                </div>
            </Container>
        </header>
    );
}