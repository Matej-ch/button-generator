<template>
<div v-show="buttons.length" class="w-full flex-wrap flex justify-start">
    <h2 class="w-full px-1 py-1">Previous buttons</h2>
    <div v-for="(button,index) in buttons" :key="index" class="px-1 py-3">
        <div :style="button">
            button
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "historyBtns",
    props: {
        buttons: Array
    },
}
</script>

<style scoped>

</style>