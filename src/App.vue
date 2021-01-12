<template>
    <b-container class="bv-example-row" id="app">
        <nav-bar-component :show-searchbar="false" />
        <b-row>
            <b-col cols="4">
                <h2>SIDEBAR</h2>
                <div>TEST DIV</div>
                <span>TEST SPAN</span>
            </b-col>
            <b-col cols="8">
                <router-view></router-view>
            </b-col>
        </b-row>
        <footer-component />
    </b-container>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
