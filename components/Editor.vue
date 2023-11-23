<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

// install these
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
const props = defineProps({
    modelValue: String,
});
const emit = defineEmits(['update:modelValue'])
const editor = useEditor({
    content: props.modelValue,
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
    },
    editorProps: {
        attributes: {
            class: 'border border-gray-500 p-4 prose max-w-none min-h-[15rem]  max-h-[15rem] overflow-y-auto',
        },
    },
    extensions: [
        StarterKit,
        Underline,
        Heading,
        Table.configure({
            resizable: true,
            HTMLAttributes: {
                class: 'table-auto',
            },
        }),
        TableRow.configure({
            HTMLAttributes: {
                class: 'border border-gray-700',
            },
        }),
        TableHeader.configure({
            HTMLAttributes: {
                class: 'border border-gray-700',
            },
        }),
        TableCell.configure({
            HTMLAttributes: {
                class: 'border border-gray-700',
            },
        }),
    ],
})
</script>
<template>
    <section v-if="editor"
        class="buttons flex items-center flex-wrap gap-x-2 border-t border-l border-r border-gray-500 p-2">
        <button type="button" @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }" class="py-1 px-2">
            <Icon name="material-symbols:format-bold" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }" class="py-1 px-2">
            <Icon name="material-symbols:format-italic" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('strike') }" class="py-1 px-2">
            <Icon name="material-symbols:format-strikethrough" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('code') }" class="py-1 px-2">
            <Icon name="material-symbols:code" color="black" />

        </button>
        <button type="button" @click="editor.chain().focus().setParagraph().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('paragraph') }" class="py-1 px-2">
            <Icon name="mdi:format-paragraph" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('underline') }">
            <Icon name="material-symbols:format-underlined" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 1 }) }" class="py-1 px-2">
            <Icon name="lucide:heading-1" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 2 }) }" class="py-1 px-2">
            <Icon name="lucide:heading-2" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 3 }) }" class="py-1 px-2">
            <Icon name="lucide:heading-3" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 4 }) }" class="py-1 px-2">
            <Icon name="lucide:heading-4" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 5 }) }" class="py-1 px-2">
            <Icon name="lucide:heading-5" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 6 }) }" class="py-1 px-2">
            <Icon name="lucide:heading-6" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('bulletList') }" class="py-1 px-2">
            <Icon name="material-symbols:format-list-bulleted" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('orderedList') }" class="py-1 px-2">
            <Icon name="mdi:order-numeric-ascending" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('blockquote') }" class="py-1 px-2">
            <Icon name="tabler:blockquote" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().setHorizontalRule().run()">
            <Icon name="octicon:horizontal-rule" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()">
            <Icon name="material-symbols:undo" color="black" />
        </button>
        <button type="button" @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()">
            <Icon name="material-symbols:redo" color="black" />
        </button>

        <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
            Table
        </button>
    </section>
    <EditorContent :editor="editor" />
</template>
