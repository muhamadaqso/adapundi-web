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
      valueLoans: 1200000,
      valueTenure: 140,
      loanValue: null,
      tenor : null,
      jaminan : null,
      backgroundSize: '25% 100%',
      backgroundSize2: '50% 100%',
      date : '',
      form: {
        name : '',
        email : '',
        ktpId : null,
        jaminan : null,
        address : '',
        tlp : null,
        verificationCode : null,
        isRead : false
      },
      tenorOption: [{ text: 'Pilih tenor', value: null }, '1 Bulan', '2 Bulan', '3 Bulan'],
    }
  },
  methods: {
    numberFormat(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    toThanks()
    {
      this.$bvModal.hide('bv-modal-requestLoans')
      this.$bvModal.show('bv-modal-thanks')
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
      },
      goTo(url) {
        window.location.href = url
      }
  },
  mounted()
  {
    document.title = 'Pinjaman | AdaPundi'
    this.backgroundSize = (this.valueLoans-4000000)*100/ (4000000-400000) + '% 100%'
    this.backgroundSize2 = (this.valueTenure-91)*100/ (180-91) + '% 100%'
  }
}
