const app = new Vue({
    el: '#app',
    data: {
        isOpen: false
    },
    methods: {
        toggleMenu: function() {
            this.isOpen = !this.isOpen;
            if(this.isOpen){
                console.log("true")
            } else {
                console.log("false")
            }
        },
    }
})