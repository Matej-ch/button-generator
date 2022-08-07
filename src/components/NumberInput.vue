<template>
    <div class="control-item number w-full">
        <span class="text-gray-700 text-sm font-bold mb-2 block">{{label}}</span>
        <div class="control">
            <SliderInput
                v-show="hasSlider"
                :min="minValue"
                :max="maxValue"
                :value="currentValue"
                @updateState="sanitizeNumber">
            </SliderInput>
            <input
                type="number"
                ref="input"
                class="shadow appearance-none border rounded py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                style="max-width: 75px"
                :min="minValue"
                :max="maxValue"
                :step="stepValue"
                v-model="currentValue"
                @change="handleChange"
            />
        </div>
    </div>
</template>

<script setup>

import {clamp, toNumber} from "lodash";
import SliderInput from "./SliderInput.vue";
import {ref, computed, watch} from "vue";

const emit = defineEmits(['change', 'update:modelValue'])

const props = defineProps({
    showSlider: {
        type: Boolean,
        default: true,
    },
    min: Number,
    max: Number,
    step: Number,
    label: String,
    modelValue: String
})

function sanitizeNumber(number) {
    const [min, max, step] = [minValue.value, maxValue.value, stepValue]
    let safeNumber = clamp(toNumber(number), min, max)
    if (step !== 0 && Number.isFinite(step)) {
        safeNumber = Math.round(safeNumber / step) * step
    }
    currentValue.value = safeNumber
    emit('change', safeNumber)
}

function handleChange(evt) {
    sanitizeNumber(evt.target.value)
}

const minValue = ref(typeof props.min === 'number' ? props.min : Number.NEGATIVE_INFINITY);
const maxValue = ref(typeof props.max === 'number' ? props.max : Number.POSITIVE_INFINITY);
const currentValue = ref(toNumber(props.modelValue));

/*watch(props.modelValue, (number) => {
    currentValue.value = toNumber(number);
})*/

const hasSlider = computed(() => {
    return props.showSlider
        && Number.isFinite(minValue.value)
        && Number.isFinite(maxValue.value)
})

const stepValue = computed(() => {
    if (!props.step) {
        const val = maxValue.value - minValue.value
        return (10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10)) / 10
    }
    return toNumber(props.step)
})

</script>

<style scoped lang="scss">
.control-item.number {
    .control {
        display: flex;

        .slider {
            flex: 3;
        }

        .input {
            flex: 1;
        }
    }
}
</style>