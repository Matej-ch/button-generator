<template>
    <div class="btn-container">
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center">
            <div class="border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white rounded p-4 leading-normal w-full max-w-md overflow-auto" style="height: 500px;place-items: center;display: grid;">
                <button :style="btnStyle">Button</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "previewBtn",
    props: {btnStyle:Object}
}
</script>

<style scoped>
.btn-container {
    display: grid;
    place-items: center;
    flex: 2;
}
</style>