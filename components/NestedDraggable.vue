<template>
    <draggable
      class="border p-4"
      tag="div"
      :list="tasks"
      :group="{ name: 'g1' }"
      item-key="name"
    >

    <div
    class=" ml-4"
          v-for="element in tasks"
          :key="element.name"
        >
        {{ element.name }}

        <NestedDraggable :tasks="element.tasks" /> 
        </div>
    </draggable>
  </template>
  <script>

import { VueDraggableNext } from 'vue-draggable-next';  
  export default {
    props: {
      tasks: {
        required: true,
        type: Array
      },
    },
    components: {
      draggable: VueDraggableNext
    },
  };
  </script>
  <style scoped>
  </style>