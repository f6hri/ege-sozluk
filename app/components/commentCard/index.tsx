import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Heading, IconButton } from "@radix-ui/themes";
import Link from "next/link";

export default function CommentCard() {
    return (
        <div className="flex flex-col gap-5 border-b border-slate-200 py-5">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum labore deleniti nisi aspernatur ea aliquam nihil
                alias dignissimos libero at facere, reprehenderit, veritatis rem velit in laudantium soluta animi provident.
            </p>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5 mt-3">
                    <IconButton variant="ghost" color="blue">
                        <ArrowUpIcon width="18" height="18" />
                    </IconButton>
                    <IconButton variant="ghost" color="red">
                        <ArrowDownIcon width="18" height="18" />
                    </IconButton>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <span>12.06.2014</span>
                    <span>-</span>
                    <Link href="#" className="hover:underline">
                        <span className="font-bold">f6hrenheit</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}