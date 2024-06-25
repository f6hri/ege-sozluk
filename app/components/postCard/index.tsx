import { ArrowDownIcon, ArrowUpIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import { Button, Heading, IconButton } from "@radix-ui/themes";
import Link from "next/link";

export default function PostCard() {
    return (
        <div className="p-5 rounded-md w-full border border-slate-300">
            <div className="flex flex-col gap-4">
                <Link href="#" className="hover:underline">
                    <Heading>Yazıcı sorunları</Heading>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sunt, dolor placeat quidem ipsam cum
                    facere beatae earum, voluptates distinctio temporibus laborum, commodi ut labore eveniet vero
                    et numquam perferendis?
                </p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-5">
                        <IconButton variant="ghost" color="blue">
                            <ArrowUpIcon width="18" height="18" />
                        </IconButton>
                        <IconButton variant="ghost" color="red">
                            <ArrowDownIcon width="18" height="18" />
                        </IconButton>
                        <Button variant="ghost" color="gray">
                            <ChatBubbleIcon /> 96
                        </Button>
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
        </div>
    );
}