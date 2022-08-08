<template>
    <div class="flex flex-col h-screen justify-between overflow-auto">
        <HeaderComponent/>

        <div class="flex flex-wrap w-full lg:px-4 px-1 mb-auto">
            <div class="flex flex-col flex-wrap lg:w-1/2 sm:w-full">

                <PaddingOpt :btnStyle="btnStyle"/>

                <MarginOpt :btnStyle="btnStyle"/>

                <SizeOpt :btnStyle="btnStyle"
                         :enableWidth="enableWidth"
                         @enableSize="enableSize"/>

                <FontOpt :btnStyle="btnStyle"/>

                <ColorOpt :btnStyle="btnStyle" @enableAdvancedColor="enableAdvancedColor"/>

                <BorderOpt :btnStyle="btnStyle"
                           @enableAdvancedBorder="enableAdvancedBorder"/>

                <ShadowOpt :btnStyle="btnStyle"/>

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

const hexToRgba = inject('hexToRgba')

const btnStyle = ref({
    width: "100",
    height: "50",
    fontSize: "16",
    fontStretch: 'normal',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontFamily: 'Arial',
    textAlign: "center",
    paddingTop: '15', paddingRight: '15', paddingBottom: '15', paddingLeft: '15',
    marginTop: '0', marginRight: '0', marginBottom: '0', marginLeft: '0',
    color: "#000000", backgroundColor: '#ffffff',
    borderWidth: '2',
    borderStyle: 'solid',
    borderRadius: "4",
    borderColor: '#000000',
    borderTopWidth: '', borderRightWidth: '', borderBottomWidth: '', borderLeftWidth: '',
    borderTopStyle: '', borderRightStyle: '', borderBottomStyle: '', borderLeftStyle: '',
    borderTopColor: '', borderRightColor: '', borderBottomColor: '', borderLeftColor: '',
    borderTopColorAlpha: 1, borderRightColorAlpha: 1, borderBottomColorAlpha: 1, borderLeftColorAlpha: 1,
    borderRadiusTopLeftOne: '', borderRadiusTopLeftTwo: '',
    borderRadiusTopRightOne: '', borderRadiusTopRightTwo: '',
    borderRadiusBottomLeftOne: '', borderRadiusBottomLeftTwo: '',
    borderRadiusBottomRightOne: '', borderRadiusBottomRightTwo: '',
    borderTopLeftRadius: '', borderTopRightRadius: '',
    borderBottomRightRadius: '', borderBottomLeftRadius: '',
    textShadow: '', boxShadow: '',
    backgroundImage: '',
    colorAlpha: 1, backgroundColorAlpha: 1, borderColorAlpha: 1

})

const unitStore = useUnitStore()

const advancedBorder = ref(false)
const advancedColor = ref(false)
const enableWidth = ref(false)
const buttons = ref([])

onMounted(() => {
    if (localStorage.getItem('buttons')) {
        buttons.value = JSON.parse(localStorage.getItem('buttons'));
    }
})

function enableSize(value) {
    enableWidth.value = value;
}

function enableAdvancedBorder(value) {
    advancedBorder.value = value;
}

function enableAdvancedColor(value) {
    advancedColor.value = value;
}

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
        width: `${btnStyle.value.width}${unitStore.width}`,
        height: `${btnStyle.value.height}${unitStore.height}`,
        fontSize: `${btnStyle.value.fontSize}${unitStore.fontSize}`,
        fontWeight: `${btnStyle.value.fontWeight}`,
        fontStretch: `${btnStyle.value.fontStretch}`,
        fontFamily: `${btnStyle.value.fontFamily}`,
        fontStyle: `${btnStyle.value.fontStyle}`,
        textAlign: `${btnStyle.value.textAlign}`,
        paddingTop: `${btnStyle.value.paddingTop}${unitStore.paddingTop}`,
        paddingRight: `${btnStyle.value.paddingRight}${unitStore.paddingRight}`,
        paddingBottom: `${btnStyle.value.paddingBottom}${unitStore.paddingBottom}`,
        paddingLeft: `${btnStyle.value.paddingLeft}${unitStore.paddingLeft}`,
        marginTop: `${btnStyle.value.marginTop}${unitStore.marginTop}`,
        marginRight: `${btnStyle.value.marginRight}${unitStore.marginRight}`,
        marginBottom: `${btnStyle.value.marginBottom}${unitStore.marginBottom}`,
        marginLeft: `${btnStyle.value.marginLeft}${unitStore.marginLeft}`,
        color: hexToRgba(btnStyle.value.color, btnStyle.value.colorAlpha),
        textShadow: btnStyle.value.textShadow,
        boxShadow: btnStyle.value.boxShadow,
        backgroundImage: btnStyle.value.backgroundImage
    };


    if (!advancedColor.value) {
        newStyle.backgroundColor = hexToRgba(btnStyle.value.backgroundColor, btnStyle.value.backgroundColorAlpha);
    }

    if (btnStyle.value.fontStyle === 'oblique') {
        newStyle.fontStyle = `${btnStyle.value.fontStyle} ${unitStore.fontStyle}deg`;
    }

    if (!enableWidth.value) {
        delete newStyle.width;
        delete newStyle.height;
    }

    if (advancedBorder.value) {
        delete newStyle.borderRadius;

        newStyle.borderWidth = `${btnStyle.value.borderTopWidth}${unitStore.borderWidth} ${btnStyle.value.borderRightWidth}${unitStore.borderWidth} ${btnStyle.value.borderBottomWidth}${unitStore.borderWidth} ${btnStyle.value.borderLeftWidth}${unitStore.borderWidth}`;
        newStyle.borderStyle = `${btnStyle.value.borderTopStyle} ${btnStyle.value.borderRightStyle} ${btnStyle.value.borderBottomStyle} ${btnStyle.value.borderLeftStyle}`;

        const top = hexToRgba(btnStyle.value.borderTopColor, btnStyle.value.borderTopColorAlpha);
        const right = hexToRgba(btnStyle.value.borderRightColor, btnStyle.value.borderRightColorAlpha);
        const bottom = hexToRgba(btnStyle.value.borderBottomColor, btnStyle.value.borderBottomColorAlpha);
        const left = hexToRgba(btnStyle.value.borderLeftColor, btnStyle.value.borderLeftColorAlpha);
        newStyle.borderColor = `${top} ${right} ${bottom} ${left}`;
        newStyle.borderTopLeftRadius = `${btnStyle.value.borderRadiusTopLeftOne}${unitStore.borderRadius} ${btnStyle.value.borderRadiusTopLeftTwo}${unitStore.borderRadius}`;
        newStyle.borderTopRightRadius = `${btnStyle.value.borderRadiusTopRightOne}${unitStore.borderRadius} ${btnStyle.value.borderRadiusTopRightTwo}${unitStore.borderRadius}`;
        newStyle.borderBottomRightRadius = `${btnStyle.value.borderRadiusBottomRightOne}${unitStore.borderRadius} ${btnStyle.value.borderRadiusBottomRightTwo}${unitStore.borderRadius}`;
        newStyle.borderBottomLeftRadius = `${btnStyle.value.borderRadiusBottomLeftOne}${unitStore.borderRadius} ${btnStyle.value.borderRadiusBottomLeftTwo}${unitStore.borderRadius}`;
    } else {
        delete newStyle.borderTopLeftRadius;
        delete newStyle.borderTopRightRadius;
        delete newStyle.borderBottomRightRadius;
        delete newStyle.borderBottomLeftRadius;
        newStyle.borderWidth = `${btnStyle.value.borderWidth}${unitStore.borderWidth}`;
        newStyle.borderStyle = btnStyle.value.borderStyle;
        newStyle.borderRadius = `${btnStyle.value.borderRadius}${unitStore.borderRadius}`;
        newStyle.borderColor = hexToRgba(btnStyle.value.borderColor, btnStyle.value.borderColorAlpha);
    }

    return newStyle;
})

</script>