<template>
  <draggable
    class="tree"
    tag="ul"
    :list="tasks"
    :group="{ name: 'g1' }"
    item-key="name"
  >
  <li
        v-for="(element, index) in tasks"
        :key="element.name"
      >
      
      <input type="checkbox" checked="checked" :id="'item-' + index +'-'+ element.name.replace(' ', '-')" />
  <label class="tree_label" :for="'item-' + index +'-'+ element.name.replace(' ', '-')">{{ element.name }}</label>
      <NestedDraggable :tasks="element.tasks" /> 
      </li>
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
/* ————————————————————–
  Tree core styles
*/
.tree { margin: 1em; }

.tree input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  }

.tree input ~ ul { display: none; }

.tree input:checked ~ ul { display: block; }

/* ————————————————————–
  Tree rows
*/
.tree li {
  line-height: 1.2;
  position: relative;
  padding: 0 0 1em 1em;
  }

.tree ul li { padding: 1em 0 0 1em; }

.tree > li:last-child { padding-bottom: 0; }

/* ————————————————————–
  Tree labels
*/
.tree_label {
  position: relative;
  display: inline-block;
  background: #fff;
  }

label.tree_label { cursor: pointer; }

label.tree_label:hover { color: #666; }

/* ————————————————————–
  Tree expanded icon
*/
label.tree_label:before {
  background: #000;
  color: #fff;
  position: relative;
  z-index: 1;
  float: left;
  margin: 0 1em 0 -2em;
  width: 1em;
  height: 1em;
  border-radius: 1em;
  content: '+';
  text-align: center;
  line-height: .9em;
  }

:checked ~ label.tree_label:before { content: '–'; }

/* ————————————————————–
  Tree branches
*/
.tree li:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -.5em;
  display: block;
  width: 0;
  border-left: 1px solid #777;
  content: "";
  }

.tree_label:after {
  position: absolute;
  top: 0;
  left: -1.5em;
  display: block;
  height: 0.5em;
  width: 1em;
  border-bottom: 1px solid #777;
  border-left: 1px solid #777;
  border-radius: 0 0 0 .3em;
  content: '';
  }

label.tree_label:after { border-bottom: 0; }

:checked ~ label.tree_label:after {
  border-radius: 0 .3em 0 0;
  border-top: 1px solid #777;
  border-right: 1px solid #777;
  border-bottom: 0;
  border-left: 0;
  bottom: 0;
  top: 0.5em;
  height: auto;
  }

.tree li:last-child:before {
  height: 1em;
  bottom: auto;
  }

.tree > li:last-child:before { display: none; }

.tree_custom {
  display: block;
  background: #eee;
  padding: 1em;
  border-radius: 0.3em;
}
</style>