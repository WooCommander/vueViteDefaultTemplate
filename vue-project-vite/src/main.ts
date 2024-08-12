import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "./lang/locale";
const app = createApp(App)
// Замени require.context на import.meta.glob
const components = import.meta.glob('./components/**/*.vue')
for (const path in components) {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  components[path]().then((module as any) => {
    app.component(componentName, module.default)
  })
}
app.use(i18n as any);
app.use(router)
app.mount('#app')
