var app = new Vue({
    el: '#app',
    data: {
        txt: ""
    },
    methods: {
        Check(smg) {
            this.txt = smg
        }
    }
})