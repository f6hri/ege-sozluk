import Header from "@/app/components/header";
import Comments from "@/app/layouts/comments";
import Container from "@/app/layouts/shared/container";
import { ArrowDownIcon, ArrowUpIcon, ChatBubbleIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button, Dialog, Flex, Heading, IconButton, TextField, Text, TextArea } from "@radix-ui/themes";
import Link from "next/link";

export default function Entiry() {
    return (
        <>
            <Dialog.Root>
                <Header />
                <main className="my-3">
                    <Container>
                        <div className="flex flex-col gap-5 border-b border-slate-200 py-5">
                            <Heading as="h1">Yazıcı sorunları</Heading>
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
                                    <Dialog.Trigger>
                                        <IconButton variant="ghost" color="gray">
                                            <ChatBubbleIcon width="18" height="18" />
                                        </IconButton>
                                    </Dialog.Trigger>
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
                        <div className="mt-8">
                            <Comments />
                        </div>
                    </Container>


                    <Dialog.Content maxWidth="450px">
                        <Dialog.Title>yazıcı sorunları</Dialog.Title>
                        <Dialog.Description size="2" mb="4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos velit commodi quas blanditiis unde 
                            dolorum corrupti culpa fuga, est nihil? Animi dignissimos ut nesciunt pariatur illo, consequatur quis delectus ab.
                        </Dialog.Description>

                        <Flex direction="column" gap="3">
                            <label>
                                <TextArea
                                    placeholder="yorumla"

                                />
                            </label>
                        </Flex>

                        <Flex gap="3" mt="4" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    iptal
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                                <Button color="green"><PaperPlaneIcon />gönder</Button>
                            </Dialog.Close>
                        </Flex>
                    </Dialog.Content>
                </main >
            </Dialog.Root>
        </>
    )
}