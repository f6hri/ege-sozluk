import { Button, Heading, IconButton } from "@radix-ui/themes";
import Header from "./components/header";
import Container from "./layouts/shared/container";
import Link from "next/link";
import { ArrowDownIcon, ArrowUpIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import PopularList from "./layouts/popularList";
import Flow from "./layouts/flow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-5">
        <Container>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <PopularList />
            </div>
            <div className="col-span-2">
              <Flow />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}