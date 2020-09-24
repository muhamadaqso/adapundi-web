import Navbar from "../../components/Navbar.vue"
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: "home",
  components: {
    Navbar,
    Carousel3d,
    Slide
  },
  data() {
    return {
      stepActive : 1,
      slides: [
        {img: require('@/assets/img/video1.png')},
        {img: require('@/assets/img/video2.png')},
        {img: require('@/assets/img/video5.png')},
        {img: require('@/assets/img/video4.png')},
        {img: require('@/assets/img/video3.png')},
      ]
    }
  },
  methods: {
    moveStepActive(num)
    {
      this.stepActive = num
    }
  }
}
