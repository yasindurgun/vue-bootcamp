const app = Vue.createApp({
    data() {
        return {
            title : "Vue.js Bootcamp Gün 1 ",
            description : "Lorem ipsum dolor sit amet.",
            // url: "https://google.com",
            google: {
                title:"Google'a gitmek için tıklayınız.",
                target: "_blank",
                url: "https://google.com",
                alt: "mufredat-kablosuzkedi-vue-bootcamp",
            },
            owner: "Pogoca",
            coords: {
                x: 0,
                y: 0,
            },
        };
    },
    methods : {
        changeTitle(pTitle){
            //this.title = "Değişmiş title."
            this.title = pTitle
        },
        updateCoords(message, event){
            //dışarıdan farklı bir fonksiyon da çağırabiliriz bu şekilde.
            this.changeTitle(`${event.x}, ${event.y}`)
            //console.log(message, event.x, event.y);
            this.coords = {
                x: event.x,
                y: event.y,
            }
        }
    }
}).mount("#app"); //bu vue.js uygulaması id si app olan elementin sınırları içerisinde çalışır.