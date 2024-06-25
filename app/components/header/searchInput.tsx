import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";

export default function SearchInput() {
    return (
        <TextField.Root placeholder="Entiry ara…" size="2" className="w-[300px]" radius="medium">
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
        </TextField.Root>
    );
}