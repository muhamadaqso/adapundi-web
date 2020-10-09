import Navbar from "../../components/Navbar.vue"
import Footer from "../../components/Footer.vue"

export default {
  name: "invest",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isLoans: 0,
      valueLoans: '1200000',
      backgroundSize: '25% 100%',
      backgroundSize2: '50% 100%',
      valueTenure: '140',
    }
  },
  methods: {
    numberFormat(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    updateSlider(e) {
      let clickedElement = e.target,
          min = clickedElement.min,
          max = clickedElement.max,
          val = clickedElement.value;

          this.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    },
    updateSliderTwo(e) {
      let clickedElement = e.target,
          min = clickedElement.min,
          max = clickedElement.max,
          val = clickedElement.value;

          this.backgroundSize2 = (val - min) * 100 / (max - min) + '% 100%';
      }
  },
  mounted()
    {
      document.title = 'Investasi | AdaPundi'
      this.backgroundSize2 = (140 - 91) * 100 / (180 - 91) + '% 100%';

    }
}
