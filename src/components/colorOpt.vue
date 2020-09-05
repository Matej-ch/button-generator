<template>
    <div class="pb-4 flex flex-wrap">
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2">
            <p class="font-bold flex">
                Colors
                <span class="ml-auto">
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableAdvancedColor = !enableAdvancedColor">
                    <span class="text-sm">Advanced</span>
                </span>
            </p>
        </div>

        <div class="w-1/2 px-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="backgroundColor">Background</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="backgroundColor"
                type="color"
                placeholder="background color"
                v-model="btnStyle.backgroundColor">
        </div>

        <div class="w-1/2 px-1">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="color">Color</label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="color"
                type="color"
                placeholder="color"
                v-model="btnStyle.color">
        </div>

    </div>
</template>

<script>
export default {
name: "colorOpt",
    props: {
        btnStyle: Object,
        advancedColor: Boolean
    },
    methods: {
        enableAdvancedColor() {
            this.advancedColor = !this.advancedColor;
            this.$emit('enableAdvancedColor',this.advancedColor);
        }
    },
}
</script>

<style scoped>

</style>