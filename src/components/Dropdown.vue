<template>
    <div>
        <label class="block text-gray-700 text-sm font-bold mb-2" for="width-unit">{{label}}</label>
        <div class="relative">
            <select
                v-model="selectValue"
                @change="handleOption"
                class="block appearance-none w-full bg-blue-100 border border-blue-200 text-gray-700 py-1 px-1 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="width-unit">
                <option v-for="option in options" :value="option" :key="option"> {{option}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
    </div>

</template>

<script setup>

import {ref} from "vue";
const emit = defineEmits(['change'])

const props = defineProps({
    obj:Object,
    label:String,
    unitType:String,
    options: Array
})

const selectValue = ref(props.obj[props.unitType]);

function handleOption()
{
    emit('change',props.obj[props.unitType] = selectValue.value)
}

</script>