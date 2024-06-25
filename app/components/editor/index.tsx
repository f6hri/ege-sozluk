'use client'

import { EditorProvider } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import MenuBar from './menuBar'

export default function Editor(){
  const extensions = [
    StarterKit,
    TextStyle.configure({ types: [ListItem.name] })
  ]
  const content = '<p>Bir şeyler yazın! 🌎️</p>'

  return (
    <EditorProvider onUpdate={(e)=>console.log(e.editor.getJSON())} slotBefore={<MenuBar />} autofocus={true} extensions={extensions} content={content} />
  )
}

