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
      valueTenure: '140',
    }
  },
  methods: {
    numberFormat(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    mounted()
    {
      document.title = 'Investasi | AdaPundi'

    }
  }
}
