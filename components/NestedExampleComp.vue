<template>
  <div class="container m-auto">
    <div>
      <h3>Nested draggable</h3>
      <NestedDraggable :tasks="list" :nested="true" />
    </div>

    <RawDisplayer :value="list" title="List" />
  </div>
</template>
  
<script>
export default {
  name: "nested-example",
  display: "Nested",
  order: 15,
  data() {
    return {
      list: [
        {
          name: "task 1",
          tasks: [

          ]
        }, {
          name: "task 2",
          tasks: []
        },
        {
          name: "task 3",
          tasks: [
          ]
        },
        {
          name: "task 4",
          tasks: []
        },
        {
          name: "task 5",
          tasks: []
        }
      ]
    };
  }
};
</script>
<style scoped>
.center {
  width: 500px;
  margin: auto;
}
</style>