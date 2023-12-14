<template>
  <div class="hello">
    <h5>主页内容</h5>
    <!-- <div :id="`list-${id}`"></div>
    <div :[attr] = 'id'>
        {{ `aa + ${attr}` }}
        ABC
    </div> -->
    <button @click="increment()">
        {{ count }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { nextTick } from 'vue'
let  count = ref(0)
count = ref(2)
const  increment = async ()=>{
    count.value = count.value + 2
    await nextTick()
}
function  increment12(){
    // 在 JavaScript 中需要 .value
    count.value++
}
// export default {
//   data() {
//     return {
//       id: 'hahah',
//       attr:'a',
//     }
//   },
//   props: {
//   }
// }
</script>

<style scoped>
</style>
