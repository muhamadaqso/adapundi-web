import Navbar from "../../components/Navbar.vue"

export default {
  name: "home",
  components: {
    Navbar
  },
  data() {
    return {
      stepActive : 1
    }
  },
  methods: {
    moveStepActive(num)
    {
      this.stepActive = num
    }
  }
}
