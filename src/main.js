import Vue from "vue";

// BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Vue Font-Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

// Custom directives
import "./directives";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// Global CSS
import "./assets/sass/main.sass";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
    router,
    store,
    FontAwesomeIcon,
    methods: {
        init() {
            store.dispatch("oauth/getToken", null, { root: true });
        }
    },
    created() {
        this.init();
        console.log("process.env:");
        console.log(process.env);
    },
    render: h => h(App)
}).$mount("#app");
