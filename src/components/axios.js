import vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(app),
}).mount('#app')