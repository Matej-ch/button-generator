import {defineStore} from "pinia";

export const useSettingStore = defineStore('settings', {
    state: () => ({
        enableSize: false,
        advancedColor: false,
        enableAdvancedBorder: false,
        enableTextShadow: false,
        enableBoxShadow: false,
        closePadding: false,
        closeMargin: true,
        closeSize: false,
        closeFont: false,
        closeColor: false,
        closeShadow: false,
        paddingAlert: false
    })
})