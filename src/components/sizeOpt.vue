<template>
    <div class="pb-4 flex flex-wrap">
        <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2">
            <p class="font-bold flex">
                Size
                <span class="ml-auto">
                    <input class="mr-2 leading-tight" type="checkbox" @click="enableSize()">
                    <span class="text-sm">Enable</span>
                </span>
            </p>
        </div>

        <transition name="fade">
            <div class="w-full flex items-center bg-red-500 text-white text-sm font-bold px-3 py-2 mb-4" role="alert" v-show="paddingAlert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>When using padding is recommended to unset width and height</p>
            </div>
        </transition>

        <div class="w-1/2 px-3" v-show="enableWdth">
            <span class="flex justify-between">
                <label class="text-gray-700 text-sm font-bold mb-2" for="width">Width</label>
                <toggle-icon :state="toggles.width" stateKey="width" @toggleState="toggleState" />
            </span>

            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   @click="informUserAboutPadding"
                   id="width"
                   :type="toggles.width ? 'range' : 'number'"
                   placeholder="width" v-model="btnStyle.width"
                   :class="{'cursor-not-allowed' : !enableWdth}"
                   :disabled="!enableWdth">
        </div>

        <div class="w-1/2 px-3" v-show="enableWdth">
            <Dropdown label="Unit" :obj="units" unitType="width" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>

        <div class="w-1/2 px-3" v-show="enableWdth">
            <span class="flex justify-between">
                <label class="text-gray-700 text-sm font-bold mb-2" for="height">Height</label>
                <toggle-icon :state="toggles.height" stateKey="height" @toggleState="toggleState" />
            </span>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   @click="informUserAboutPadding"
                   id="height"
                   :type="toggles.height ? 'range' : 'number'"
                   placeholder="height"
                   v-model="btnStyle.height"
                   :class="{'cursor-not-allowed' : !enableWdth}"
                   :disabled="!enableWdth">
        </div>

        <div class="w-1/2 px-3" v-show="enableWdth">
            <Dropdown label="Unit" :obj="units" unitType="height" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
        </div>
    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import ToggleIcon from "@/components/toggleIcon";

export default {
    name: "sizeOpt",
    components: {Dropdown,ToggleIcon},
    props: {
        btnStyle: Object,
        units: Object,
        enableWidth: Boolean
    },
    data: function (){
        return {
            paddingAlert: false,
            enableWdth: this.enableWidth,
            toggles: {
                width: false,
                height: false,
            }
        }
    },
    methods: {
        informUserAboutPadding() {
            this.paddingAlert = true;
        },
        enableSize() {
            this.enableWdth = !this.enableWdth;
            this.paddingAlert = !this.paddingAlert;
            this.$emit('enableSize',this.enableWdth);
        },
        toggleState(obj) {
            this.toggles = {... this.toggles,...obj};
        }
    },

}
</script>

<style scoped>

</style>