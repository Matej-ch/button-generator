<template>
    <div class="control-item number w-full">
        <span class="text-gray-700 text-sm font-bold mb-2">{{label}}</span>
        <div class="control">
            <slider-input
                v-show="hasSlider"
                :min="minValue"
                :max="maxValue"
                :value="currentValue"
                @updateState="sanitizeNumber">
            </slider-input>
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

<script>

import SliderInput from "@/components/sliderInput";
import {clamp, toNumber} from "lodash";
export default {
name: "numberInput",
    components: {SliderInput},
    props: {
        showSlider: {
            type: Boolean,
            default: true,
        },
        min: Number,
        max: Number,
        step: Number,
        value: {
            type: [Number, String],
            required: true,
        },
        label: String,
    },
    model: {
        prop: 'value',
        event: 'change',
    },
    data() {
        let minValue = typeof this.min === 'number' ? this.min : Number.NEGATIVE_INFINITY
        let maxValue = typeof this.max === 'number' ? this.max : Number.POSITIVE_INFINITY
        return {
            currentValue: toNumber(this.value),
            minValue,
            maxValue,
        }
    },
    computed: {
        hasSlider() {
            return this.showSlider
                && Number.isFinite(this.minValue)
                && Number.isFinite(this.maxValue)
        },
        stepValue() {
            if (!this.step) {
                const val = this.maxValue - this.minValue
                return (10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10)) / 10
            }
            return toNumber(this.step)
        }
    },
    watch: {
        value(number) { this.currentValue = toNumber(number) },
    },
    methods: {
        sanitizeNumber(number) {
            const [min, max, step] = [this.minValue, this.maxValue, this.stepValue]
            let safeNumber = clamp(toNumber(number), min, max)
            if (step !== 0 && Number.isFinite(step)) {
                safeNumber = Math.round(safeNumber / step) * step
            }
            this.currentValue = safeNumber
            this.$emit('change', safeNumber)
        },
        handleChange(evt) {
            this.sanitizeNumber(evt.target.value)
        }
    }
}
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