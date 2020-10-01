import Navbar from "../../components/Navbar.vue"
import Footer from "../../components/Footer.vue"

export default {
  name: "loans",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      step : 1,
      isLoans: 0,
      valueLoans: '1200000',
      valueTenure: '140',
      tenor : null,
      jaminan : null,
      tenorOption: [{ text: 'Pilih tenor', value: null }, '1 Bulan', '2 Bulan', '3 Bulan'],
    }
  },
  methods: {
    numberFormat(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

  },
  mounted()
  {
    document.title = 'Pinjaman | AdaPundi'

  }
}
