<template>
    <div class="flex flex-wrap lg:w-1/2 w-full items-center justify-center">
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center">
            <div class="border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white rounded p-4 leading-normal w-full max-w-md overflow-auto h-56"
                 style="place-items: center;display: grid;">
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