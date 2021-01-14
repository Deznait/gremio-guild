<template>
    <b-col cols="4">
        <progress-component></progress-component>
        <div>TEST DIV</div>
        <span>TEST SPAN</span>
    </b-col>
</template>

<script>
export default {
    props: {},
    mounted() {
        console.log("SideBarComponent Mounted");
    },
    data() {
        return {
            selectedTabIndex: 1
        };
    },
    methods: {}
};
</script>

<style lang="sass"></style>
