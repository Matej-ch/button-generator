<template>
<div class="flex flex-col h-screen justify-between overflow-auto">
    <header-component/>

    <div class="flex flex-wrap w-full lg:px-4 px-1 mb-auto">
        <div class="flex flex-col flex-wrap lg:w-1/2 sm:w-full">

            <padding-opt :btnStyle="btnStyle" :units="units" />

            <margin-opt :btnStyle="btnStyle" :units="units" />

            <size-opt :btnStyle="btnStyle"
                      :units="units"
                      :enableWidth="enableWidth"
                      @enableSize="enableSize"/>

            <font-opt :btnStyle="btnStyle" :units="units"/>

            <color-opt  :btnStyle="btnStyle" @enableAdvancedColor="enableAdvancedColor" />

            <border-opt :btnStyle="btnStyle"
                        :units="units"
                        @enableAdvancedBorder="enableAdvancedBorder" />

            <shadow-opt :btnStyle="btnStyle"/>

        </div>

        <preview-btn :btnStyle="style" @save="updateHistory" />
    </div>

    <history-btns :buttons="buttons" @clearHistory="clearHistory" />

    <footer-component/>

</div>
</template>

<script>

import PaddingOpt from "@/components/paddingOpt";
import MarginOpt from "@/components/marginOpt";
import SizeOpt from "@/components/sizeOpt";
import BorderOpt from "@/components/borderOpt";
import PreviewBtn from "@/components/previewBtn";
import HeaderComponent from "@/components/headerComponent";
import FooterComponent from "@/components/footerComponent";
import FontOpt from "@/components/fontOpt";
import ColorOpt from "@/components/colorOpt";
import ShadowOpt from "@/components/shadowOpt";
import HistoryBtns from "@/components/btnsHistory";
import {hexToRgbaMixin} from "@/mixins/hexToRgbaMixin";

export default {
    name: "btnGenerator",
    mixins: [hexToRgbaMixin],
    components: {
        HistoryBtns,
        ShadowOpt, ColorOpt, FontOpt, FooterComponent, HeaderComponent,
        PreviewBtn, BorderOpt, SizeOpt, PaddingOpt,MarginOpt},
    mounted() {
        if(localStorage.buttons) {
            this.buttons = JSON.parse(localStorage.buttons);
        }
    },
    data: function() {
        return {
            btnStyle: {
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
                color: "#000000", backgroundColor:'#ffffff',
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

            },
            units: {
                width: 'px',
                height: 'px',
                fontSize: 'px',
                paddingTop: 'px',
                paddingRight: 'px',
                paddingBottom: 'px',
                paddingLeft: 'px',
                marginTop: 'px',
                marginRight: 'px',
                marginBottom: 'px',
                marginLeft: 'px',
                borderWidth: 'px',
                borderRadius: 'px',
                fontStyle: '40'

            },
            advancedBorder: false,
            advancedColor: false,
            enableWidth: false,
            buttons: [],
        };
    },
    computed: {
        style() {
            let newStyle = {
                width: `${this.btnStyle.width}${this.units.width}`,
                height: `${this.btnStyle.height}${this.units.height}`,
                fontSize: `${this.btnStyle.fontSize}${this.units.fontSize}`,
                fontWeight: `${this.btnStyle.fontWeight}`,
                fontStretch: `${this.btnStyle.fontStretch}`,
                fontFamily: `${this.btnStyle.fontFamily}`,
                fontStyle: `${this.btnStyle.fontStyle}`,
                textAlign: `${this.btnStyle.textAlign}`,
                paddingTop: `${this.btnStyle.paddingTop}${this.units.paddingTop}`,
                paddingRight: `${this.btnStyle.paddingRight}${this.units.paddingRight}`,
                paddingBottom: `${this.btnStyle.paddingBottom}${this.units.paddingBottom}`,
                paddingLeft: `${this.btnStyle.paddingLeft}${this.units.paddingLeft}`,
                marginTop: `${this.btnStyle.marginTop}${this.units.marginTop}`,
                marginRight: `${this.btnStyle.marginRight}${this.units.marginRight}`,
                marginBottom: `${this.btnStyle.marginBottom}${this.units.marginBottom}`,
                marginLeft: `${this.btnStyle.marginLeft}${this.units.marginLeft}`,
                color: this.convertToRgbaString(this.btnStyle.color,this.btnStyle.colorAlpha),
                textShadow: this.btnStyle.textShadow,
                boxShadow: this.btnStyle.boxShadow,
                backgroundImage: this.btnStyle.backgroundImage
            };


            if(!this.advancedColor) {
                newStyle.backgroundColor = this.convertToRgbaString(this.btnStyle.backgroundColor,this.btnStyle.backgroundColorAlpha);
            }

            if(this.btnStyle.fontStyle === 'oblique') {
                newStyle.fontStyle = `${this.btnStyle.fontStyle} ${this.units.fontStyle}deg`;
            }

            if(!this.enableWidth) {
                delete newStyle.width;
                delete newStyle.height;
            }

            if(this.advancedBorder) {
                delete newStyle.borderRadius;

                newStyle.borderWidth = `${this.btnStyle.borderTopWidth}${this.units.borderWidth} ${this.btnStyle.borderRightWidth}${this.units.borderWidth} ${this.btnStyle.borderBottomWidth}${this.units.borderWidth} ${this.btnStyle.borderLeftWidth}${this.units.borderWidth}`;
                newStyle.borderStyle = `${this.btnStyle.borderTopStyle} ${this.btnStyle.borderRightStyle} ${this.btnStyle.borderBottomStyle} ${this.btnStyle.borderLeftStyle}`;

                const top = this.convertToRgbaString(this.btnStyle.borderTopColor,this.btnStyle.borderTopColorAlpha);
                const right = this.convertToRgbaString(this.btnStyle.borderRightColor,this.btnStyle.borderRightColorAlpha);
                const bottom = this.convertToRgbaString(this.btnStyle.borderBottomColor,this.btnStyle.borderBottomColorAlpha);
                const left = this.convertToRgbaString(this.btnStyle.borderLeftColor,this.btnStyle.borderLeftColorAlpha);
                newStyle.borderColor = `${top} ${right} ${bottom} ${left}`;
                newStyle.borderTopLeftRadius = `${this.btnStyle.borderRadiusTopLeftOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusTopLeftTwo}${this.units.borderRadius}`;
                newStyle.borderTopRightRadius = `${this.btnStyle.borderRadiusTopRightOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusTopRightTwo}${this.units.borderRadius}`;
                newStyle.borderBottomRightRadius = `${this.btnStyle.borderRadiusBottomRightOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusBottomRightTwo}${this.units.borderRadius}`;
                newStyle.borderBottomLeftRadius = `${this.btnStyle.borderRadiusBottomLeftOne}${this.units.borderRadius} ${this.btnStyle.borderRadiusBottomLeftTwo}${this.units.borderRadius}`;
            } else {
                delete newStyle.borderTopLeftRadius;
                delete newStyle.borderTopRightRadius;
                delete newStyle.borderBottomRightRadius;
                delete newStyle.borderBottomLeftRadius;
                newStyle.borderWidth = `${this.btnStyle.borderWidth}${this.units.borderWidth}`;
                newStyle.borderStyle =  this.btnStyle.borderStyle;
                newStyle.borderRadius = `${this.btnStyle.borderRadius}${this.units.borderRadius}`;
                newStyle.borderColor = this.convertToRgbaString(this.btnStyle.borderColor, this.btnStyle.borderColorAlpha);
            }

            return newStyle;
        }
    },
    methods: {
        enableSize(value) {
            this.enableWidth = value;
        },
        enableAdvancedBorder(value) {
            this.advancedBorder = value;
        },
        enableAdvancedColor(value) {
            this.advancedColor = value;
        },
        updateHistory(style) {
            this.buttons.push(style);
        },
        clearHistory() {
            if(localStorage.buttons) {
                localStorage.removeItem('buttons');
                this.buttons = [];
            }
        }
    }
}
</script>