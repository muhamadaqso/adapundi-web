import Navbar from "../../components/Navbar.vue"
import Footer from "../../components/Footer.vue"
import ModalGallery from "../../components/ModalGallery.vue";

export default {
  name: "aboutUs",
  components: {
    Navbar,
    Footer,
    ModalGallery
  },
  data() {
    return {
      isLoans: 0,
      valueLoans: '1200000',
      valueTenure: '140',
      seeMoreModal: false,
      currentGalleryIndex: null,
      gallery : [
        {images: require('@/assets/img/imgAU-1.png')},
        {images: require('@/assets/img/imgAU-2.png')},
        {images: require('@/assets/img/imgAU-3.png')},
        {images: require('@/assets/img/imgAU-4.png')},
        {images: require('@/assets/img/imgAU-5.png')},
        {images: require('@/assets/img/imgAU-6.png')},
      ],
    }
  },
  methods: {
    updateCurrentIndex(imageIndex){
      // alert(folderIndex+', '+imageIndex);
      this.seeMoreModal = !this.seeMoreModal;
      // this.currentGalleryIndex = 0;
      this.currentGalleryIndex = imageIndex;
    },
    numberFormat(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted()
  {
    document.title = 'Tentang Kami | AdaPundi'

  }
}
