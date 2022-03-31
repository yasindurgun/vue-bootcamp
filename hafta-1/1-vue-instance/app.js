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
        };
    },
}).mount("#app"); //bu vue.js uygulaması id si app olan elementin sınırları içerisinde çalışır.