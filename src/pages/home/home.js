import Navbar from "../../components/Navbar.vue"
import Footer from "../../components/Footer.vue"
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: "home",
  components: {
    Navbar,
    Footer,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      stepActive : 1,
      contSay : 0,
      slidesMitra: [
        {img: require('@/assets/img/Logo Bank BCA.png')},
        {img: require('@/assets/img/cPEgUbJW0unxwbmnTXZEa6ygrvzSZmjXOkL4aDRe.png')},
        {img: require('@/assets/img/faspay-logo.png')},
        {img: require('@/assets/img/nexmo_logo_v3.png')},
        {img: require('@/assets/img/Logo Bank BNI.png')},
        {img: require('@/assets/img/logo-futuready.png')},
      ],
      slides: [
        {img: require('@/assets/img/video1.png')},
        {img: require('@/assets/img/video2.png')},
        {img: require('@/assets/img/video5.png')},
        {img: require('@/assets/img/video4.png')},
        {img: require('@/assets/img/video3.png')},
      ],
      slidesdes: [
        {img: require('@/assets/img/say1.png'),
         name: "Eta Karmaila",
         capt:"“Akhirnya AdaPundi sudah kembali normal. Bisnis ku bisa berjalan lancar kembali berkat bantuan AdaPundi. Semoga Adapundi makin maju dan terus berkembang sehingga kedepannya bisnis ku juga bisa makin besar. Terima kasih AdaPundi sudah membantu ku disetiap saat dikala sedang membutuhkan bantuan.”"
        },
        {img: require('@/assets/img/say2.png'),
         name: "Zeta Jatmiko",
         capt:"“Makasih adapundi, yay new normal sudah bisa pencairan. Aku senang AdaPundi sudah kembali. Membantu aku dalam menjalankan bisnis aku. Terima kasih AdaPundi semoga semakin meroket dan memuaskan hati pelanggannya.”"
        },
        {img: require('@/assets/img/say1.png'),
         name: "Eta Karmaila",
         capt:"“Akhirnya AdaPundi sudah kembali normal. Bisnis ku bisa berjalan lancar kembali berkat bantuan AdaPundi. Semoga Adapundi makin maju dan terus berkembang sehingga kedepannya bisnis ku juga bisa makin besar. Terima kasih AdaPundi sudah membantu ku disetiap saat dikala sedang membutuhkan bantuan.”"
        },
        {img: require('@/assets/img/say1.png'),
         name: "Eta Karmaila",
         capt:"“Akhirnya AdaPundi sudah kembali normal. Bisnis ku bisa berjalan lancar kembali berkat bantuan AdaPundi. Semoga Adapundi makin maju dan terus berkembang sehingga kedepannya bisnis ku juga bisa makin besar. Terima kasih AdaPundi sudah membantu ku disetiap saat dikala sedang membutuhkan bantuan.”"
        },
        {img: require('@/assets/img/say2.png'),
         name: "Zeta Jatmiko",
         capt:"“Makasih adapundi, yay new normal sudah bisa pencairan. Aku senang AdaPundi sudah kembali. Membantu aku dalam menjalankan bisnis aku. Terima kasih AdaPundi semoga semakin meroket dan memuaskan hati pelanggannya.”"
        }
      ],
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"

    ],
    }
  },
  methods: {
    moveStepActive(num)
    {
      this.stepActive = num
    },
    getActive(sss) {
    this.contSay =  sss;
  }
  },
  mounted()
  {
  }
}
