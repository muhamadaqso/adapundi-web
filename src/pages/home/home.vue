<template>
<div id="homePage">
  <Navbar/>
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
            <div class="mt-5 ml-md-3">
              <b-button variant="warning w-50 py-3">Ajukan Sekarang</b-button>
            </div>
          </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>

  <div class="reason-why mt-5">
    <h3 class="text-center py-5 f-green">Mengapa harus AdaPundi?</h3>
    <b-container class="v2 mt-5">
      <b-row>
        <b-col md="3">
          <div class="text-center">
            <img src="@/assets/img/ic-1.svg" alt="" class="d-flex mx-auto" width="80" height="70">
            <h6 class="mt-4 mb-3 f-semiBlack">Limit Pinjaman Tinggi</h6>
            <p class="f-gray w-75 mx-auto">Hanya dengan KTP Anda dapat nikmati pinjaman hingga Rp 4.000.000</p>
          </div>
        </b-col>
        <b-col md="3">
          <div class="text-center">
            <img src="@/assets/img/ic-2.svg" alt=""  class="d-flex mx-auto"  width="80" height="70">
            <h6 class="mt-4 mb-3 f-semiBlack">Bunga Rendah</h6>
            <p class="f-gray w-75 mx-auto">Nikmati Bunga harian <br> rendah 0,4% - 0,6% untuk pinjaman</p>
          </div>
        </b-col>
        <b-col md="3">
          <div class="text-center">
            <img src="@/assets/img/ic-3.svg" alt=""  class="d-flex mx-auto"  width="80" height="70">
            <h6 class="mt-4 mb-3 f-semiBlack">Tanpa Jaminan</h6>
            <p class="f-gray w-75 mx-auto">Tidak perlu jaminan atau agunan apapun untuk pengajuan pinjaman</p>
          </div>
        </b-col>
        <b-col md="3">
          <div class="text-center">
            <img src="@/assets/img/ic-4.svg" alt=""  class="d-flex mx-auto"  width="80" height="70">
            <h6 class="mt-4 mb-3 f-semiBlack">Operasi Cepat</h6>
            <p class="f-gray w-75 mx-auto">Serba online, seluruh proses tidak lebih dari 15 menit</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <div class="how-to">
    <h3 class="text-center py-5 f-green">Cara Pengajuan Pinjaman di AdaPundi</h3>
    <b-container class="v2">
      <b-row>
        <b-col md="7">
          <div class="show-off">
            <transition name="fade"  mode="out-in">
              <img key="1" v-if="stepActive === 1" src="@/assets/img/how-1.svg" alt="" class="w-100" style="height: -webkit-fill-available;">
              <img key="2" v-if="stepActive === 2" src="@/assets/img/how-2.svg" alt="" class="w-100" style="height: -webkit-fill-available;">
              <img key="3" v-if="stepActive === 3" src="@/assets/img/how-3.svg" alt="" class="w-100" style="height: -webkit-fill-available;">
              <img key="4" v-if="stepActive === 4" src="@/assets/img/how-4.svg" alt="" class="w-100" style="height: -webkit-fill-available;">
            </transition>
          </div>
        </b-col>
        <b-col md="5 pl-0 mt-5 pt-4">
          <div class="row cursor-pointer" @click="moveStepActive(1)">
            <div class="col-md-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 1, 'btn btn-outline-secondary': stepActive < 1, 'btn btn-outline-success': stepActive > 1}">1</button>
              <div :class="{'vl-gray': stepActive < 1, 'vl-green': stepActive >= 1}"></div>
            </div>
            <div class="col-md-10">
              <div>
                <h5 class="f-semiBlack">Download App</h5>
                <p class="f-gray">Download aplikasi AdaPundi di <br> Google Play.</p>
              </div>
            </div>
          </div>
          <div class="row cursor-pointer" @click="moveStepActive(2)">
            <div class="col-md-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 2, 'btn btn-outline-secondary': stepActive < 2, 'btn btn-outline-success': stepActive > 2}">2</button>
              <div :class="{'vl-gray': stepActive < 2, 'vl-green': stepActive >= 2}"></div>
            </div>
            <div class="col-md-10">
              <div>
                <h5 class="f-semiBlack">Isi Data</h5>
                <p class="f-gray">5 menit untuk mengisi data Anda,<br> ikuti petunjuk pada aplikasi kami.</p>
              </div>
            </div>
          </div>
          <div class="row cursor-pointer" @click="moveStepActive(3)">
            <div class="col-md-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 3, 'btn btn-outline-secondary': stepActive < 3, 'btn btn-outline-success': stepActive > 3}">3</button>
              <div :class="{'vl-gray': stepActive < 3, 'vl-green': stepActive >= 3}"></div>
            </div>
            <div class="col-md-10">
              <div>
                <h5 class="f-semiBlack">Verifikasi</h5>
                <p class="f-gray">Sistem otomatisasi akan evaluasi dan<br> berikan hasil segera.</p>
              </div>
            </div>
          </div>
          <div class="row cursor-pointer" @click="moveStepActive(4)">
            <div class="col-md-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 4, 'btn btn-outline-secondary': stepActive < 4, 'btn btn-outline-success': stepActive > 4}">4</button>
            </div>
            <div class="col-md-10">
              <div>
                <h5 class="f-semiBlack">Pencairan Dana</h5>
                <p class="f-gray">Hanya butuh 5 detik untuk mencairkan dana<br> setelah pengajuan Anda disetujui.</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <b-jumbotron class="statt img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-stat.svg')})` }">
    <b-container class="v2">
      <b-row>
        <b-col md="3">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-1.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Unduh</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">4,3 Juta+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
        <b-col md="3">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-2.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Pengguna</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">3,47 Juta</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
        <b-col md="3">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-3.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Rating</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">4.6+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
        <b-col md="3">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-4.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Komentar</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">471 Ribu+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col md="3 ml-auto">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-5.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Pinjaman yang Dicairkan</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">3,6 Juta+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
        <b-col md="3">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-6.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Pencairan Bulanan</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">400 Juta+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
        <b-col md="3 mr-auto">
          <div class="bg-white py-4 pl-4 pr-0">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-7.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Tingkat Peminjaman Kembali</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">>78%</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>

</div>
</template>
<script src="./home.js">
</script>
