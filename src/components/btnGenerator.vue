<template>
<div class="container-custom px-4 py-4">
    <div class="controls-container">
        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Size</p>
            </div>

            <div class="w-1/2 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="width">Width</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="width"
                       type="number"
                       placeholder="width" v-model="btnStyle.width">
            </div>

            <div class="w-1/2 px-3">
                <Dropdown label="Unit" :value="units.width" @change="onChangeChild" unitType="width" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
            </div>

            <div class="w-1/2 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="height">Height</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                       id="height"
                       type="number"
                       placeholder="height"
                       v-model="btnStyle.height">
            </div>

            <div class="w-1/2 px-3">
                <Dropdown label="Unit" :value="units.height" @change="onChangeChild" unitType="height" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
            </div>

        </div>
        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Padding</p>
            </div>

            <div class="w-full flex items-center bg-red-500 text-white text-sm font-bold px-3 py-2 mb-4" role="alert" v-show="paddingAlert">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p>When using padding is recommended to unset width and height</p>
            </div>

            <div class="w-1/4 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingTop">Top</label>
                <input
                    @click="informUserAboutPadding"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paddingTop"
                    type="number"
                    placeholder="width"
                    v-model="btnStyle.paddingTop">
                <Dropdown label="Unit" :value="units.paddingTop" @change="onChangeChild" unitType="paddingTop" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
            </div>

            <div class="w-1/4 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingRight">Right</label>
                <input
                    @click="informUserAboutPadding"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paddingRight"
                    type="number"
                    placeholder="width"
                    v-model="btnStyle.paddingRight">
                <Dropdown label="Unit" :value="units.paddingRight" @change="onChangeChild" unitType="paddingRight" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
            </div>

            <div class="w-1/4 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingBottom">Bottom</label>
                <input
                    @click="informUserAboutPadding"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paddingBottom"
                    type="number"
                    placeholder="width"
                    v-model="btnStyle.paddingBottom">
                <Dropdown label="Unit" :value="units.paddingBottom" @change="onChangeChild" unitType="paddingBottom" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
            </div>

            <div class="w-1/4 px-3">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="paddingLeft">Left</label>
                <input
                    @click="informUserAboutPadding"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="paddingLeft"
                    type="number"
                    placeholder="width"
                    v-model="btnStyle.paddingLeft">
                <Dropdown label="Unit" :value="units.paddingLeft" @change="onChangeChild" unitType="paddingLeft" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
            </div>

        </div>
        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Font</p>
            </div>
            font size and unit , type (bold, italic),
            <Dropdown label="Text align" :value="btnStyle.textAlign" @change="onChangeChild" unitType="textAlign" :options="['left','right','center','justify']"></Dropdown>
        </div>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Colors</p>
            </div>
            background, color, gradient
        </div>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Border</p>
            </div>
            border (border (with every corner option),border size,border radius,border color)</div>

        <div class="pb-4 flex flex-wrap">
            <div class="bg-orange-100 border-t border-b border-orange-500 text-orange-700 px-4 py-1 w-full mb-2">
                <p class="font-bold">Shadows</p>
            </div>

            <div>Box shadow</div>
            <div>text shadow</div>
        </div>

    </div>
    <div class="btn-container">
        <button :style="style">Button</button>
    </div>
</div>
</template>

<script>
import Dropdown from "@/components/dropdown";

export default {
name: "btnGenerator",
    components: {Dropdown},
    data: function() {
        return {
            btnStyle: {
                width: "100",
                height: "50",
                fontSize: "16",
                textAlign: "center",
                paddingTop: '5',
                paddingRight: '5',
                paddingBottom: '5',
                paddingLeft: '5',
                color: "black",
                border: '1px solid',
                borderRadius: "4px",
                borderColor: 'black'
            },
            units: {
                width: 'px',
                height: 'px',
                fontSize: 'px',
                paddingTop: 'px',
                paddingRight: 'px',
                paddingBottom: 'px',
                paddingLeft: 'px',
            },
            paddingAlert: false,
        };
    },
    computed: {
        style() {
            return {
                width: `${this.btnStyle.width}${this.units.width}`,
                height: `${this.btnStyle.height}${this.units.height}`,
                fontSize: `${this.btnStyle.fontSize}${this.units.fontSize}`,
                textAlign: `${this.btnStyle.textAlign}`,
                paddingTop: `${this.btnStyle.paddingTop}${this.units.paddingTop}`,
                paddingRight: `${this.btnStyle.paddingRight}${this.units.paddingRight}`,
                paddingBottom: `${this.btnStyle.paddingBottom}${this.units.paddingBottom}`,
                paddingLeft: `${this.btnStyle.paddingLeft}${this.units.paddingLeft}`,
                color: "black",
                border: '1px solid',
                borderRadius: "4px",
                borderColor: 'black'
            }
        }
    },
    methods: {
        onChangeChild(value) {
            let valueKey = Object.keys(value)[0];
            let unitsKeys = Object.keys(this.units);
            if(unitsKeys.find(element => element === valueKey)) {
                Object.assign(this.units, value);
            } else {
                Object.assign(this.btnStyle, value);
            }
        },
        informUserAboutPadding() {
            this.paddingAlert = true;
        }
    }
}
</script>

<style scoped>
    .container-custom {
        display: flex;
        height: 100vh;
        flex-wrap: wrap;
        width: 100%;
        overflow: auto;
    }
    .controls-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        justify-content: center;
        align-content: center;
    }
    .btn-container {
        display: grid;
        place-items: center;
        flex: 2;
    }
</style>