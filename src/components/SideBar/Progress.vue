<template>
    <b-card>
        <h2>SIDEBAR</h2>
    </b-card>
</template>

<script>
import axios from "axios";

export default {
    props: {},
    mounted() {
        console.log("ProgressComponent Mounted");

        // send a POST request
        axios({
            method: "get",
            url:
                "https://raider.io//api/v1/guilds/profile"
        }).then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        );
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
