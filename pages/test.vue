<template>
  <div class="flex flex-wrap">
  <draggable class="" tag="span" :list="list" item-key="url">
    <template class="" v-for="element in list" :key="element.url">
      <img class="border-2 border-gray-500 rounded-md w-80 h-auto" :src="element.url" />
    </template>
  </draggable>
</div>
  <RawDisplayer :value="list" title="List" />
</template>
<script>

import { VueDraggableNext } from 'vue-draggable-next';
export default {
  data() {
    return {
      list: [
        { url: "https://image.shutterstock.com/image-illustration/smart-city-nft-virtual-real-260nw-2154735667.jpg", id: 0 },
        { url: "https://image.shutterstock.com/image-illustration/smart-city-architecture-digital-connected-260nw-2140538579.jpg", id: 1 },
        { url: "https://image.shutterstock.com/image-vector/metaverse-future-blue-cityscape-perspective-260nw-2153510921.jpg", id: 2 }
      ],
    };
  },
  components: {
    draggable: VueDraggableNext
  },
};
</script>