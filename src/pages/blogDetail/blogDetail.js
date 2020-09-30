import Navbar from "../../components/Navbar.vue"
import Footer from "../../components/Footer.vue"

export default {
  name: "blogDetail",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      items: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Blog',
          href: '#'
        },
        {
          text: 'Berdiskusi tentang industri keuangan di Universitas Negeri Gorontalo',
          active: true
        }
      ],
      article : [
        {
          id: 1,
          img: require('@/assets/img/video.png'),
          title: 'Berdiskusi tentang industri keuangan di Universitas Negeri Gorontalo',
          desc: 'Di Universitas Negeri Gorontalo, pada 15 Januari 2020, AdaPundi berkesempatan untuk menyapa kalangan mahasiswa dan berdiskusi tentang',
          date: '04 Agustus 2020',
          visit: 125,
        },
        {
          id: 2,
          img: require('@/assets/img/video(1).png'),
          title: 'Kegiatan sosialisasi yang dilakukan AdaPundi',
          desc: 'Dari berbagai kegiatan sosialisasi yang AdaPundi lakukan ke berbagai',
          date: '04 Agustus 2020',
          visit: 125,
        },
        {
          id: 3,
          img: require('@/assets/img/video(2).png'),
          title: 'AdaPundi peduli dengan literasi teknologi finansial',
          desc: 'AdaPundi peduli dengan literasi teknologi finansial di seluruh penjuru',
          date: '04 Agustus 2020',
          visit: 125,
        },
        {
          id: 4,
          img: require('@/assets/img/video(3).png'),
          title: 'Diskusi menarik inovasi keuangan digital di UNS',
          desc: 'Universitas Negeri Surakarta (UNS), atau yang dulunya dikenal sebagai',
          date: '04 Agustus 2020',
          visit: 125,
        }
      ],
      version:[
        'Jul 30,2020	-	V3.2.0',
        'Jul 13,2020	-	V3.1.1',
        'Jun 29,2020	-	V3.1.0',
        'Jun 18,2020	-	V3.0.0',
        'Jun 11,2020	-	V2.3.1',
        'Jun 1,2020	 	-	V2.3.0',
        'May 6,2020	-	V2.2.17',
        'Apr 23,2020	-	V2.2.16',
        'Apr 21,2020	-	V2.2.15',
        'Apr 13,2020	-	V2.2.14',
        'Apr 8,2020		-	V2.2.13',
        'Apr 1,2020		-	V2.2.12',
        'Mar 26,2020	-	V2.2.10',
        'Mar 9,2020	-	V2.2.8',
        'Dec 19,2020	-	V2.2.7',
        'Jan 18,2020	-	V2.2.6',
        'Jan 16,2020	-	V2.2.5',
        'Jan 1,2020		-	V2.2.3',
       'Dec 21,2019	-	V2.1.29',
        'Dec 18.2019	-	V2.1.28',
       'Dec 5,2019		-	V2.1.27',
       	'Nov 18,2019	-	V2.1.26',
       	'Nov 8,2019		-	V2.1.25',
       	'Nov 1,2019		-	V2.1.24',
       	'Oct 30,2019	-	V2.1.23',
       	'Oct 25,2019	-	V2.1.21',
       	'Oct 4,2019		-	V2.1.20',
       	'Oct 1,2019		-	V2.1.19',
       	'Sep 5,2019		-	V2.0.33',
       	'Aug 29,2019	-	V2.0.28',
       	'Aug 27,2019	-	V2.0.27',
      ]
    }
  },
  methods: {
    numberFormat(data) {
        return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
  mounted()
  {
    document.title = 'Blog Detail | AdaPundi'

  }
}
