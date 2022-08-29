<template>
    <div class="flex flex-col h-screen justify-between overflow-auto">
        <HeaderComponent/>

        <div class="flex flex-wrap w-full lg:px-4 px-1 mb-auto">
            <div class="flex flex-col flex-wrap lg:w-1/2 sm:w-full">

                <PaddingOpt/>

                <MarginOpt/>

                <SizeOpt/>

                <FontOpt/>

                <ColorOpt/>

                <BorderOpt/>

                <ShadowOpt/>

            </div>

            <PreviewBtn :btnStyle="style" @save="updateHistory"/>
        </div>

        <BtnsHistory :buttons="buttons" @clearHistory="clearHistory"/>

        <FooterComponent/>

    </div>
</template>

<script setup>
import BtnsHistory from "./BtnsHistory.vue";
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import PreviewBtn from "./PreviewBtn.vue";
import PaddingOpt from "./PaddingOpt.vue";
import MarginOpt from "./MarginOpt.vue";
import SizeOpt from "./SizeOpt.vue";
import FontOpt from "./FontOpt.vue";
import ColorOpt from "./colorOpt.vue";
import BorderOpt from "./BorderOpt.vue";
import ShadowOpt from "./ShadowOpt.vue";
import {ref, onMounted, computed, inject} from "vue";
import {useUnitStore} from "../stores/unitStore";
import {useBtnStore} from "../stores/buttonStore";
import {useSettingStore} from "../stores/settingsStore";

const hexToRgba = inject('hexToRgba')

const unitStore = useUnitStore()
const btnStyle = useBtnStore()
const settings = useSettingStore()

const buttons = ref([])

onMounted(() => {
    if (localStorage.getItem('buttons')) {
        buttons.value = JSON.parse(localStorage.getItem('buttons'));
    }
})

function updateHistory(style) {
    buttons.value.push(style);
}

function clearHistory() {
    if (localStorage.getItem('buttons')) {
        localStorage.removeItem('buttons');
        buttons.value = [];
    }
}

const style = computed(() => {
    let newStyle = {
        width: `${btnStyle.width}${unitStore.width}`,
        height: `${btnStyle.height}${unitStore.height}`,
        fontSize: `${btnStyle.fontSize}${unitStore.fontSize}`,
        fontWeight: `${btnStyle.fontWeight}`,
        fontStretch: `${btnStyle.fontStretch}`,
        fontFamily: `${btnStyle.fontFamily}`,
        fontStyle: `${btnStyle.fontStyle}`,
        textAlign: `${btnStyle.textAlign}`,
        paddingTop: `${btnStyle.paddingTop}${unitStore.paddingTop}`,
        paddingRight: `${btnStyle.paddingRight}${unitStore.paddingRight}`,
        paddingBottom: `${btnStyle.paddingBottom}${unitStore.paddingBottom}`,
        paddingLeft: `${btnStyle.paddingLeft}${unitStore.paddingLeft}`,
        marginTop: `${btnStyle.marginTop}${unitStore.marginTop}`,
        marginRight: `${btnStyle.marginRight}${unitStore.marginRight}`,
        marginBottom: `${btnStyle.marginBottom}${unitStore.marginBottom}`,
        marginLeft: `${btnStyle.marginLeft}${unitStore.marginLeft}`,
        color: hexToRgba(btnStyle.color, btnStyle.colorAlpha),
        textShadow: btnStyle.textShadow,
        boxShadow: btnStyle.boxShadow,
        backgroundImage: btnStyle.backgroundImage
    };


    if (!settings.advancedColor) {
        newStyle.backgroundColor = hexToRgba(btnStyle.backgroundColor, btnStyle.backgroundColorAlpha);
    }

    if (btnStyle.fontStyle === 'oblique') {
        newStyle.fontStyle = `${btnStyle.fontStyle} ${unitStore.fontStyle}deg`;
    }

    if (!settings.enableSize) {
        delete newStyle.width;
        delete newStyle.height;
    }

    if (settings.enableAdvancedBorder) {
        delete newStyle.borderRadius;

        newStyle.borderWidth = `${btnStyle.borderTopWidth}${unitStore.borderWidth} ${btnStyle.borderRightWidth}${unitStore.borderWidth} ${btnStyle.borderBottomWidth}${unitStore.borderWidth} ${btnStyle.borderLeftWidth}${unitStore.borderWidth}`;
        newStyle.borderStyle = `${btnStyle.borderTopStyle} ${btnStyle.borderRightStyle} ${btnStyle.borderBottomStyle} ${btnStyle.borderLeftStyle}`;

        const top = hexToRgba(btnStyle.borderTopColor, btnStyle.borderTopColorAlpha);
        const right = hexToRgba(btnStyle.borderRightColor, btnStyle.borderRightColorAlpha);
        const bottom = hexToRgba(btnStyle.borderBottomColor, btnStyle.borderBottomColorAlpha);
        const left = hexToRgba(btnStyle.borderLeftColor, btnStyle.borderLeftColorAlpha);
        newStyle.borderColor = `${top} ${right} ${bottom} ${left}`;
        newStyle.borderTopLeftRadius = `${btnStyle.borderRadiusTopLeftOne}${unitStore.borderRadius} ${btnStyle.borderRadiusTopLeftTwo}${unitStore.borderRadius}`;
        newStyle.borderTopRightRadius = `${btnStyle.borderRadiusTopRightOne}${unitStore.borderRadius} ${btnStyle.borderRadiusTopRightTwo}${unitStore.borderRadius}`;
        newStyle.borderBottomRightRadius = `${btnStyle.borderRadiusBottomRightOne}${unitStore.borderRadius} ${btnStyle.borderRadiusBottomRightTwo}${unitStore.borderRadius}`;
        newStyle.borderBottomLeftRadius = `${btnStyle.borderRadiusBottomLeftOne}${unitStore.borderRadius} ${btnStyle.borderRadiusBottomLeftTwo}${unitStore.borderRadius}`;
    } else {
        delete newStyle.borderTopLeftRadius;
        delete newStyle.borderTopRightRadius;
        delete newStyle.borderBottomRightRadius;
        delete newStyle.borderBottomLeftRadius;
        newStyle.borderWidth = `${btnStyle.borderWidth}${unitStore.borderWidth}`;
        newStyle.borderStyle = btnStyle.borderStyle;
        newStyle.borderRadius = `${btnStyle.borderRadius}${unitStore.borderRadius}`;
        newStyle.borderColor = hexToRgba(btnStyle.borderColor, btnStyle.borderColorAlpha);
    }

    return newStyle;
})

</script>