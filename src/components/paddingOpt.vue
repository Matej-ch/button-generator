<template>
    <div class="pb-2 flex flex-wrap">
        <div class="flex bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-1 py-1 w-full mb-2 cursor-pointer" @click.prevent="closePadding = !closePadding">
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <path d="M18 15l-6-6l-6 6h12" :transform="closePadding === false ? 'rotate(180 12 12)' : 'rotate(90 12 12)'" />
                </svg>
            </a>
            <p class="font-bold">
                Padding
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap w-full" v-show="!closePadding">
                <div class="w-1/4 px-1">

                    <number-input label="Top"
                                  :min=0 :max=100
                                  :step="units.paddingTop === 'px' || units.paddingTop === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingTop" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="paddingTop" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">

                    <number-input label="Right"
                                  :min=0 :max=100
                                  :step="units.paddingRight === 'px' || units.paddingRight === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingRight" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="paddingRight" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">

                    <number-input label="Bottom"
                                  :min=0 :max=100
                                  :step="units.paddingBottom === 'px' || units.paddingBottom === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingBottom" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="paddingBottom" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">

                    <number-input label="Left"
                                  :min=0 :max=100
                                  :step="units.paddingLeft === 'px' || units.paddingLeft === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.paddingLeft" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="paddingLeft" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import Dropdown from "@/components/dropdown";
import NumberInput from "@/components/numberInput";

export default {
    name: "paddingOpt",
    components: {NumberInput, Dropdown},
    props: {
        btnStyle: Object,
        units: Object,
    },
    data: function () {
        return {
            closePadding: false
        }
    },
}
</script>

<style scoped>

</style>