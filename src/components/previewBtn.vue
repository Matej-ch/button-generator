<template>
    <div class="flex flex-wrap lg:w-1/2 w-full items-center justify-center">
        <div class="max-w-sm w-full lg:max-w-full lg:flex justify-center flex-col items-center">
            <div class="border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white rounded p-4 leading-normal w-full max-w-md overflow-auto h-56"
                 style="place-items: center;display: grid;">

                <button :style="btnStyle">Button</button>
            </div>

            <div class="flex flex-row py-4 max-w-md">
                <a href="#"
                   @click.prevent="copyStyle"
                   class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Copy style
                </a>
                <a href="#"
                   @click.prevent="showStyle"
                   class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Show style
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
name: "previewBtn",
    props: {btnStyle:Object},
    methods: {
        copyStyle() {

        },
        showStyle() {

        }
    }
}
</script>

<style scoped>
button:hover {
    filter: brightness(120%) saturate(120%);
}

button:active {
    filter: saturate(120%);
}
</style>