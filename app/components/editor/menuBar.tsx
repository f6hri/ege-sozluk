import { CrumpledPaperIcon, FontBoldIcon, HeadingIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useCurrentEditor } from "@tiptap/react";

export default function MenuBar() {
    const { editor } = useCurrentEditor() as any;
    if (!editor) {
        return null
    }
    return (
        <div className="flex justify-between items-center py-5 border-b border-slate-300 mb-5">
            <div className="flex items-center gap-4">
                <Button variant={editor.isActive('bold')? 'solid':'outline'} color="gray" onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }><FontBoldIcon /></Button>
                    <Button variant={editor.isActive('heading',{level:1})? 'solid':'outline'} color="gray" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run()
                    }><HeadingIcon/>
                    </Button>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="solid" color="green"><PaperPlaneIcon />gönder</Button>
                <Button variant="soft" color="gray"><CrumpledPaperIcon />taslağa kaydet</Button>
            </div>
        </div>
    );
}