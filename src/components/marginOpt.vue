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
                Margin
            </p>
        </div>

        <transition name="fade" mode="out-in">
            <div class="flex flex-wrap w-full" v-show="!closePadding">
                <div class="w-1/4 px-1">

                    <number-input label="Top"
                                  :min=0 :max=100
                                  :step="units.marginTop === 'px' || units.marginTop === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginTop" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="marginTop" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">

                    <number-input label="Right"
                                  :min=0 :max=100
                                  :step="units.marginRight === 'px' || units.marginRight === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginRight" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="marginRight" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">

                    <number-input label="Bottom"
                                  :min=0 :max=100
                                  :step="units.marginBottom === 'px' || units.marginBottom === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginBottom" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="marginBottom" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>

                <div class="w-1/4 px-1">

                    <number-input label="Left"
                                  :min=0 :max=100
                                  :step="units.marginLeft === 'px' || units.marginLeft === 'pt' ? 1 : 0.1"
                                  v-model="btnStyle.marginLeft" />

                    <div class="py-2" />

                    <Dropdown label="Unit" :obj="units" unitType="marginLeft" :options="['px','pt','pc','em','ex','rem']"></Dropdown>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
import NumberInput from "@/components/numberInput";
import Dropdown from "@/components/dropdown";

export default {
name: "marginOpt",
    components: {NumberInput, Dropdown},
    props: {
        btnStyle: Object,
        units: Object,
    },
    data: function () {
        return {
            closePadding: true
        }
    },
}
</script>