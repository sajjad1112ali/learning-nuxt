<template>
  <draggable
    class="parent p-4"
    tag="div"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
  <div
  class="child ml-4"
        v-for="element in tasks"
        :key="element.name"
      >
      <span>{{ element.name }}</span>

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
/* .parent {
  border-left: 5px solid;
} */
.parent > div span {
  padding-left: 10px;
}

.parent > div::before {
  position: absolute;
  top: -1.2em;
  bottom: 0;
  left: -.5em;
  display: block;
  width: 0;
  border-left: 1px solid #777;
  content: "";
}
.parent > div:after {
  position: absolute;
  top: 5px;
  left: -0.5em;
  display: block;
  height: 0.5em;
  width: 1em;
  border-bottom: 1px solid #777;
  border-left: 1px solid #777;
  border-radius: 0 0 0 .3em;
  content: '';
  }
.child {
  position: relative;
}

.child > span::after {
  content: '';
    display: block;
    width: 0.5em;
    height: 0.5em;
    position: absolute;
    background: black;
    top: 0.5em;
    left: -0.7em;
    border-radius: 50%;
}
</style>