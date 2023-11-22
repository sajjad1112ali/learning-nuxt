<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

// install these
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'

const props = defineProps({
    modelValue: String,
});
const emit = defineEmits(['update:modelValue'])
const editor = useEditor({
    content: props.modelValue,
    onUpdate: ({editor}) => {
        emit('update:modelValue', editor.getHTML())
    },
    editorProps: {
        attributes: {
            class: 'border border-gray-500 p-4',
        },
    },
    extensions: [
        StarterKit,
        Underline,
        Heading,
    ],
})
</script>
<template>
    <section v-if="editor"
        class="buttons flex items-center flex-wrap gap-x-4 border-t border-l border-r border-gray-500 p-4">
        <button type="button" @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('bold') }" class="p-1">
            Bold
        </button>
        <button type="button" @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('italic') }" class="p-1">
            Italic
        </button>


        <button type="button" @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('strike') }" class="p-1">
            strike
        </button>
        <button type="button" @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('code') }" class="p-1">
            code
        </button>
        <button type="button" @click="editor.chain().focus().setParagraph().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('paragraph') }" class="p-1">
            paragraph
        </button>
        <button type="button" @click="editor.chain().focus().toggleUnderline().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('underline') }">
            toggleUnderline
        </button>




        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 1 }) }" class="p-1">
            h1
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 2 }) }" class="p-1">
            h2
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 3 }) }" class="p-1">
            h3
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 4 }) }" class="p-1">
            h4
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 5 }) }" class="p-1">
            h5
        </button>
        <button type="button" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('heading', { level: 6 }) }" class="p-1">
            h6
        </button>
        <button type="button" @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('bulletList') }" class="p-1">
            bullet list
        </button>
        <button type="button" @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('orderedList') }" class="p-1">
            ordered list
        </button>
        <button type="button" @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'bg-gray-200 rounded': editor.isActive('blockquote') }" class="p-1">
            blockquote
        </button>
        <button type="button" @click="editor.chain().focus().setHorizontalRule().run()">
            horizontal rule
        </button>
        <button type="button" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
            undo
        </button>
        <button type="button" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
            redo
        </button> <!---->

    </section>
    <EditorContent :editor="editor" />
</template>
  


<style>
.tiptap h1 {
    font-size: 40px;
}

.tiptap h2 {
    font-size: 36px;
}

.tiptap h3 {
    font-size: 32px;
}

.tiptap h4 {
    font-size: 28px;
}

.tiptap h5 {
    font-size: 24px;
}

.tiptap h6 {
    font-size: 20px;
}

.tiptap ul {
    list-style-type: disc;
    /* Bullet point style */
    margin-left: 20px;
    /* Adjust left margin */
}

/* Styling for ordered list (ol) */
.tiptap ol {
    list-style-type: decimal;
    /* Numbered list style */
    margin-left: 20px;
    /* Adjust left margin */
}

/* Styling for list items (li) */
.tiptap li {
    margin-bottom: 8px;
    /* Spacing between list items */
    line-height: 1.5;
    /* Line height for content within list items */
}

blockquote {
    margin: 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-left: 4px solid #ccc;
}

/* Styling for the text inside blockquote */
blockquote p {
    margin: 0;
    /* Additional styles as needed */
}</style>