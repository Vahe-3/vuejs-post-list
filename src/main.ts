import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Components from '@/components/Ui';



const app = createApp(App);

app.use(router);

Components.forEach(component => app.component(component.name, component));

app.mount("#app");
