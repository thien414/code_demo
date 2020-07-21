var app = new Vue({
    el: '#app',
    data: {
        txt: "",
        name: 'Vuejs'
    },
    methods: {
        Check() {
            this.txt += 'Xin chào ' + this.name + ' !'
        }
    }
})