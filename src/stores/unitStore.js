import {defineStore} from "pinia";

export const useUnitStore = defineStore('units', {
    state: () => ({
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
    }),
})