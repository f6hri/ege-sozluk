import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Heading, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import CommentCard from "../components/commentCard";

export default function Comments() {
    return (
       <div className="flex flex-col gap-8">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
       </div>
    );
}