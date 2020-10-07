<template>
  <hooper :settings="hooperSettings">
    <slide>
       <b-jumbotron class="img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-slide-1.svg')})` }">
          <b-container class="content-hero">
              <b-row>
                <b-col md="8">
                  <div class="hero-text">
                    <h1>Mewujudkan keuangan inklusif melalui teknoloi sains</h1>
                    <ul class="mt-4">
                      <li>Kami akan memberikan layanan kredit keuangan yang dipersonalisasikan sesuai berbagai tingkat kondisi kebutuhan pelanggan di Indonesia.</li>
                      <li>Sejak pengoperasian platform, kami telah menyediakan lebih dari 3.600.000+ layanan pinjaman.</li>
                      <li>AdaPundi terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK), dan nomor izin yang diperoleh adalah: S-448 / NB.213 / 2019</li>
                    </ul>
                  </div>
                  <div class="mt-3 mt-md-5 ml-md-3">
                    <b-button variant="warning w-50 py-3 d-none d-md-block" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    <b-button variant="warning w-100 py-3 d-block d-md-none" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                  </div>
                  <div class="mt-3 d-block d-md-none">
                      <p>Terdaftar dan diawasi oleh:</p>
                      <div class="d-flex">
                        <img width="110" height="38" src="@/assets/img/footer-logo1.png" alt="">
                        <img class="ml-4" src="@/assets/img/footer-logo2.png" alt="">
                      </div>
                    </div>
                </b-col>
                <b-col md="4 slide-1-ojk d-none d-md-block">
                  <div style="position: absolute; bottom: 0;">
                    <p>Terdaftar dan diawasi oleh:</p>
                    <div class="d-flex">
                      <img width="110" height="38" src="@/assets/img/footer-logo1.png" alt="">
                      <img class="ml-4" src="@/assets/img/footer-logo2.png" alt="">
                    </div>
                  </div>
                </b-col>
            </b-row>
          </b-container>
        </b-jumbotron>
    </slide>
    <slide>
      <b-jumbotron class="img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-slide-2.png')})` }">
            <b-container class="content-hero">
                <b-row>
                  <b-col md="8">
                    <div class="hero-text">
                      <h1>Memberikan layanan kredit dan manajemen keuangan yang baik</h1>
                      <p class="w-75">Tim kami berpengalaman dalam manajemen risiko dan pemrosesan data besar. Dengan  data besar sebagai landasan, kami menggunakan teknologi inovatif untuk menyediakan layanan keuangan, sehingga pelanggan kami dapat dengan mudah menikmati kemudahan yang dibawa oleh teknologi.</p>
                    </div>
                    <div class="mt-3 mt-md-4 ml-md-3">
                      <b-button variant="warning w-50 py-3 d-none d-md-block" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    <b-button variant="warning w-100 py-3 d-block d-md-none" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    </div>
                    <div class="mt-md-5 mt-3">
                      <p>Terdaftar dan diawasi oleh:</p>
                      <div class="d-flex">
                        <img width="110" height="38" src="@/assets/img/footer-logo1.png" alt="">
                        <img class="ml-4" src="@/assets/img/footer-logo2.png" alt="">
                      </div>
                    </div>
                  </b-col>
              </b-row>
            </b-container>
        </b-jumbotron>
    </slide>
    <slide>
      <b-jumbotron class="img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-slide-3.png')})` }">
            <b-container class="content-hero">
                <b-row>
                  <b-col md="8">
                    <div class="hero-text">
                      <h1>AdaPundi merupakan perusahaan teknologi keuangan inovatif</h1>
                      <p class="w-75">Bertujuan untuk menyediakan layanan keuangan teknologi dan solusi pinjaman online tanpa jaminan kepada masyarakat Indonesia melalui aplikasi smartphone. Memenuhi kebutuhan finansial masyarakat melalui jalur kredit yang mudah dan nyaman, meningkatkan kualitas hidup, dan mendorong pembangunan ekonomi</p>
                    </div>
                    <div class="mt-3 mt-md-4 ml-md-3">
                      <b-button variant="warning w-50 py-3 d-none d-md-block" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    <b-button variant="warning w-100 py-3 d-block d-md-none" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    </div>
                    <div class="mt-md-5 mt-3">
                      <p>Terdaftar dan diawasi oleh:</p>
                      <div class="d-flex">
                        <img width="110" height="38" src="@/assets/img/footer-logo1.png" alt="">
                        <img class="ml-4" src="@/assets/img/footer-logo2.png" alt="">
                      </div>
                    </div>
                  </b-col>
              </b-row>
            </b-container>
        </b-jumbotron>
    </slide>
    <slide>
      <b-jumbotron class="img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-slide-4.png')})` }">
            <b-container class="content-hero">
                <b-row>
                  <b-col md="7">
                    <div class="hero-text">
                      <h1>Keamanan pinjaman dan privasi Anda terjamin</h1>
                      <p class="text-justify">AdaPundi telah lulus sertifikasi keamanan data informasi SNI ISO / IEC 27001: 2013, yang merupakan standar untuk sistem manajemen keamanan informasi. AdaPundi terus meningkatkan teknologi verifikasi yang lebih andal untuk mengurangi risiko yang mungkin terjadi. Sistem keamanan informasi yang canggih memastikan keamanan data, sehingga pelanggan kami tidak perlu khawatir.</p>
                    </div>
                    <div class="mt-3 mt-md-4 ml-md-3">
                      <b-button variant="warning w-50 py-3 d-none d-md-block" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    <b-button variant="warning w-100 py-3 d-block d-md-none" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    </div>
                    <div class="mt-md-5 mt-3">
                      <p>Terdaftar dan diawasi oleh:</p>
                      <div class="d-flex">
                        <img width="110" height="38" src="@/assets/img/footer-logo1.png" alt="">
                        <img class="ml-4" src="@/assets/img/footer-logo2.png" alt="">
                      </div>
                    </div>
                  </b-col>
              </b-row>
            </b-container>
        </b-jumbotron>
    </slide>
    <slide>
      <b-jumbotron class="img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-slide-5.png')})` }">
            <b-container class="content-hero">
                <b-row>
                  <b-col md="7">
                    <div class="hero-text">
                      <h2>15 menit proses</h2>
                      <h1>LANGSUNG CAIR <br>Rp4.000.000</h1>
                      <p>AdaPundi-Platform kredit pinjaman online uang dana rupiah online cepat di Indonesia, dengan limit kredit hingga 4.000.000 rupiah. Misi kami adalah menyediakan dana uang atau pinjaman uang tunai online cepat cair yang aman dan nyaman bagi pengguna.</p>
                    </div>
                    <div class="mt-3 mt-md-4 ml-md-3">
                      <b-button variant="warning w-50 py-3 d-none d-md-block" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    <b-button variant="warning w-100 py-3 d-block d-md-none" @click="$router.push({name:'Loans'})">Ajukan Sekarang</b-button>
                    </div>
                    <div class="mt-md-5 mt-3">
                      <p>Terdaftar dan diawasi oleh:</p>
                      <div class="d-flex">
                        <img width="110" height="38" src="@/assets/img/footer-logo1.png" alt="">
                        <img class="ml-4" src="@/assets/img/footer-logo2.png" alt="">
                      </div>
                    </div>
                  </b-col>
              </b-row>
            </b-container>
        </b-jumbotron>
    </slide>

    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination
  } from 'hooper';
  import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        autoPlay:false,
        playSpeed : 3000,
        wheelControl: false,
      }
    }
  }
}
</script>

<style>
.slide-1-ojk {
  height: 72px;
}
.hooper {
 height: 114vh !important;
}
.hooper-pagination {
  bottom: 15% !important;
}
.hooper-pagination ol.hooper-indicators .hooper-indicator:hover, .hooper-pagination ol.hooper-indicators .hooper-indicator.is-active{
  background-color: #10B382 !important;
  width: 18px !important;
  border-radius: 1rem !important;
}
.hooper-pagination .hooper-indicator {
  width: 8px !important;
    height: 8px !important;
    border-radius: 50% !important;
    background-color: #DFE6EF !important;
    box-shadow: 1px 2px 6px #1c825c;
}
:focus {
  outline: none !important;
}
</style>
