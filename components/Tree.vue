<!-- NestedTree.vue -->
<template>
  <div>
    <draggable v-model="treeData" @update="handleUpdate" :group="{ name: 'nested-tree', pull: 'clone', put: false }">
      <div v-for="node in treeData" :key="node.id" class="node">
        {{ node.name }}
        <draggable v-if="node.children" :element="'ul'" :group="{ name: 'nested-tree', pull: 'clone', put: true }" v-model="node.children">
          <li v-for="childNode in node.children" :key="childNode.id" class="node">
            {{ childNode.name }}
            <draggable v-if="childNode.children" :element="'ul'" :group="{ name: 'nested-tree', pull: 'clone', put: true }" v-model="childNode.children">
              <li v-for="grandchildNode in childNode.children" :key="grandchildNode.id" class="node">
                {{ grandchildNode.name }}
              </li>
            </draggable>
          </li>
        </draggable>
      </div>
    </draggable>
  </div>
</template>

<script>
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      treeData: [
        {
          id: 1,
          name: 'Parent 1',
          children: [
            { id: 2, name: 'Child 1-1' },
            { id: 3, name: 'Child 1-2' },
          ],
        },
        {
          id: 4,
          name: 'Parent 2',
          children: [
            { id: 5, name: 'Child 2-1' },
            { id: 6, name: 'Child 2-2' },
          ],
        },
      ],
    };
  },
  methods: {
    handleUpdate(newTreeData) {
      // Handle tree update if needed
      console.log('Updated Tree:', newTreeData);
    },
  },
};
</script>

<style scoped>
.node {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}
</style>
