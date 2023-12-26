<template>
    <div class="flex m-10">
      <draggable class="dragArea list-group w-full" :list="list" @change="log">
        <div
          class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </template>
  <script>
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  export default defineComponent({
    components: {
      draggable: VueDraggableNext,
    },
    data() {
      return {
        enabled: true,
        list: [
        {
          name: "task 1",
          tasks: [
            {
              name: "task 2",
              tasks: []
            }
          ]
        },
        {
          name: "task 3",
          tasks: [
            {
              name: "task 4",
              tasks: []
            }
          ]
        },
        {
          name: "task 5",
          tasks: []
        }
      ],
        dragging: true,
      }
    },
    methods: {
      log(event) {
        console.log(this.list)
        console.log(event)
      },
    },
  })
</script>
  
  <style>
  .draggable-item {
    padding: 10px;
    margin: 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
  </style>
  