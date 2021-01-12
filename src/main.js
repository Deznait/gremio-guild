import Vue from "vue";

// BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Vue Font-Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(far, fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Custom directives
import "./directives";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// Global CSS
import "./assets/styles/main.scss";

import { setupComponents } from "./config/setup-components";
setupComponents(Vue);

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
