<template>
  <div>
    <Draggable ref="tree" class="mtl-tree" v-model="treeData" treeLine
      ><template droppable=false #default="{ node, stat }">
        <OpenIcon
          v-if="stat.children.length"
          :open="stat.open"
          class="mtl-mr"
          @click.native="stat.open = !stat.open"
        />
        <input
          class="mtl-checkbox mtl-mr"
          type="checkbox"
          v-model="stat.checked"
        />
        <span class="mtl-ml">{{ node.text }}</span>
      </template></Draggable
    >
    <br>
    <br>
    <button @click="getDataAll()">getData: all</button>


  </div>
</template>

<script>

import { BaseTree, Draggable, pro, OpenIcon } from '@he-tree/vue'
  import '@he-tree/vue/style/default.css'
  import '@he-tree/vue/style/material-design.css'

  export default {
    components: { Draggable, OpenIcon },
    data() {
      return {
        treeData: [
    {
        "text": "Nuxt",
        "children": []
    },
    {
        "text": "Vue",
        "children": []
    },
    {
        "text": "Videos",
        "children": []
    },
    {
        "text": "Next",
        "children": []
    },
    {
        "text": "React",
        "children": []
    },
    {
        "text": "Frontend",
        "children": []
    },
    {
        "text": "Angular",
        "children": []
    },
    {
        "text": "Backend",
        "children": []
    },
    {
        "text": "Projects",
        "children": []
    },
    {
        "text": "Photos",
        "children": []
    }
],
        treeData_: [
          {
            text: 'Projects',
            children: [
              {
                text: 'Frontend',
                children: [
                  {
                    text: 'Vue',
                    children: [
                      {
                        text: 'Nuxt',
                      },
                    ],
                  },
                  {
                    text: 'React',
                    children: [
                      {
                        text: 'Next',
                      },
                    ],
                  },
                  {
                    text: 'Angular',
                  },
                ],
              },
              {
                text: 'Backend',
              },
            ],
          },
          { text: 'Photos' },
          { text: 'Videos' },
        ],
        checked: [],
      }
    },
    methods: {
      onCheckNode() {
        this.checked = this.$refs.tree.getChecked().map((v) => v.data.text)
      },
      getDataAll() {
        console.log('asddsad')
        console.log(this.$refs.tree.getData())
        // this.$refs.tree.getData()
      },
    },
  }
</script>