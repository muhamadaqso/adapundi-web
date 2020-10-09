<template>
<div id="homePage">
  <Navbar/>
  <Slider/>

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
    <b-container class="v2">
    <h3 class="text-center py-5 f-green">Cara Pengajuan Pinjaman di AdaPundi</h3>
      <b-row>
        <b-col md="7">
          <div class="show-off">
            <transition name="fade"  mode="out-in">
              <img key="1" v-if="stepActive === 1" src="@/assets/img/how-1.svg" alt="Download App img (your connection down)" class="w-100" style="height: -webkit-fill-available;">
              <img key="2" v-if="stepActive === 2" src="@/assets/img/how-2.svg" alt="Isi Data img (your connection down)" class="w-100" style="height: -webkit-fill-available;">
              <img key="3" v-if="stepActive === 3" src="@/assets/img/how-3.svg" alt="Verifikasi img (your connection down)" class="w-100" style="height: -webkit-fill-available;">
              <img key="4" v-if="stepActive === 4" src="@/assets/img/how-4.svg" alt="Pencairan Dana img (your connection down)" class="w-100" style="height: -webkit-fill-available;">
            </transition>
          </div>
        </b-col>
        <b-col md="5 pl-md-0 mt-md-4 pt-4">
          <div class="row cursor-pointer" @click="moveStepActive(1)">
            <div class="col-md-2 col-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 1, 'btn btn-outline-secondary': stepActive < 1, 'btn btn-outline-success': stepActive > 1}">1</button>
              <div :class="{'vl-gray': stepActive < 1, 'vl-green': stepActive >= 1}"></div>
            </div>
            <div class="col-md-10 col-10">
              <div>
                <h5 class="f-semiBlack">Download App</h5>
                <p class="f-gray">Download aplikasi AdaPundi di <br> Google Play.</p>
              </div>
            </div>
          </div>
          <div class="row cursor-pointer" @click="moveStepActive(2)">
            <div class="col-md-2 col-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 2, 'btn btn-outline-secondary': stepActive < 2, 'btn btn-outline-success': stepActive > 2}">2</button>
              <div :class="{'vl-gray': stepActive < 2, 'vl-green': stepActive >= 2}"></div>
            </div>
            <div class="col-md-10 col-10">
              <div>
                <h5 class="f-semiBlack">Isi Data</h5>
                <p class="f-gray">5 menit untuk mengisi data Anda,<br> ikuti petunjuk pada aplikasi kami.</p>
              </div>
            </div>
          </div>
          <div class="row cursor-pointer" @click="moveStepActive(3)">
            <div class="col-md-2 col-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 3, 'btn btn-outline-secondary': stepActive < 3, 'btn btn-outline-success': stepActive > 3}">3</button>
              <div :class="{'vl-gray': stepActive < 3, 'vl-green': stepActive >= 3}"></div>
            </div>
            <div class="col-md-10 col-10">
              <div>
                <h5 class="f-semiBlack">Verifikasi</h5>
                <p class="f-gray">Sistem otomatisasi akan evaluasi dan<br> berikan hasil segera.</p>
              </div>
            </div>
          </div>
          <div class="row cursor-pointer" @click="moveStepActive(4)">
            <div class="col-md-2 col-2">
              <button type="button" class="px-3 py-2 rounded-circle" :class="{'btn btn-success': stepActive == 4, 'btn btn-outline-secondary': stepActive < 4, 'btn btn-outline-success': stepActive > 4}">4</button>
            </div>
            <div class="col-md-10 col-10">
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
        <b-col md="3" cols="12">
          <div class="bg-white p-2 p-md-4">
              <div class="d-flex mb-2 title">
                <img width="36" height="36" src="@/assets/img/ic-stat-1.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Unduh</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">4,3 Juta+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
        <b-col md="3" cols="12">
          <div class="bg-white p-2 p-md-4">
              <div class="d-flex mb-2 title">
                <img width="36" height="36" src="@/assets/img/ic-stat-2.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Pengguna</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">3,47 Juta</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
        <b-col md="3" cols="12">
          <div class="bg-white p-2 p-md-4">
              <div class="d-flex mb-2 title">
                <img width="36" height="36" src="@/assets/img/ic-stat-3.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Rating</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">4.6+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
        <b-col md="3" cols="12">
          <div class="bg-white p-2 p-md-4">
              <div class="d-flex mb-2 title">
                <img width="36" height="36" src="@/assets/img/ic-stat-4.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Total Komentar</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">471 Ribu+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-1.svg" alt="">
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-md-5">
        <b-col md="3 ml-auto" cols="12">
          <div class="bg-white p-2 p-md-4">
              <div class="d-flex mb-2 title">
                <img width="36" height="36" src="@/assets/img/ic-stat-5.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Pinjaman yang Dicairkan</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">3,6 Juta+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
        <b-col md="3" cols="12">
          <div class="bg-white p-2 p-md-4">
              <div class="d-flex mb-2 title">
                <img width="36" height="36" src="@/assets/img/ic-stat-6.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Pencairan Bulanan</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">400 Juta+</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
        <b-col md="3 mr-auto" cols="12">
          <div class="bg-white py-md-4 pl-md-4 pr-md-0  p-2 ">
              <div class="d-flex mb-2 title">
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

  <div class="story">
    <h3 class="text-center py-5 f-green">Cerita tentang AdaPundi</h3>
    <b-container class="v2">
      <div id="story-slide">
        <carousel-3d :controls-visible="false" :controls-prev-html="'&#10092;'" :controls-next-html="'&#10093;'" :space="350"
                    :controls-width="30" :controls-height="30" :clickable="true" :border="0" :width="463" :height="266">
          <slide v-for="(slide, i) in 1" :index="i" v-bind:key="i">
            <figure>
              <iframe width="463" height="266" src="https://www.youtube.com/embed/MM5H4qvrXDs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
          </slide>
        </carousel-3d>
      </div>

      <div class="mt-5">
        <p class="text-center title f-semiBlack">AdaPundi | Solusi Keuangan Anda</p>
        <p class="text-center content f-gray">AdaPundi adalah salah satu platform kredit tanpa jaminan di Indonesia, misi kami adalah untuk menyediakan<br> pinjaman yang aman dan nyaman bagi pengguna. AdaPundi mengikuti konsep "kredit membuat hidup lebih baik"<br> dan mendukung inovasi keuangan yang didukung oleh oleh perkembangan teknologi.</p>
      </div>
    </b-container>
  </div>

  <div class="activity pb-5">
    <img src="@/assets/img/activity-top.png" alt="" style="position:absolute; left:0; top:0;">
    <img src="@/assets/img/activity-bottom.png" alt="" style="position:absolute; right:0; bottom:0;">
    <h3 class="text-center py-5 f-white">Aktifitas Offline AdaPundi</h3>
    <b-container class=" mt-4 mb-3">
      <b-row>
        <b-col md="3 d-none d-md-block" cols="12">
          <img class="cursor-pointer" src="@/assets/img/img1.png" alt="" @click="updateCurrentIndex(0)">
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col md="4 pr-0">
              <img class="cursor-pointer" src="@/assets/img/img5.jpg" alt="" @click="updateCurrentIndex(4)">
            </b-col>
            <b-col md="4">
              <img class="cursor-pointer" src="@/assets/img/img4.png" alt="" @click="updateCurrentIndex(3)">
            </b-col>
            <b-col md="4">
              <img class="cursor-pointer" src="@/assets/img/img6.jpg" alt="" @click="updateCurrentIndex(5)">
            </b-col>
          </b-row>
          <b-row class="mt-3 d-none d-md-flex">
            <b-col md="4">
              <img class="cursor-pointer" src="@/assets/img/img3.png" alt="" @click="updateCurrentIndex(2)">
            </b-col>
            <b-col md="8">
              <img class="cursor-pointer" src="@/assets/img/img2.png" alt="" @click="updateCurrentIndex(1)">
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!-- <div class="mt-5 w-25 mx-auto d-none d-md-flex">
        <b-button block variant="outline-light text-center" @click="seeMoreModal = !seeMoreModal">Lihat Lebih Banyak</b-button>
      </div>
      <div class="mt-5 w-100 mx-auto d-flex d-md-none">
        <b-button block variant="outline-light text-center" @click="seeMoreModal = !seeMoreModal">Lihat Lebih Banyak</b-button>
      </div> -->
    </b-container>
  </div>
  <modal-gallery v-model="seeMoreModal" :galleries="gallery" :title="'Aktifitas Offline'" :index="currentGalleryIndex"></modal-gallery>

  <div class="they-say mx-auto">
    <h3 class="text-center py-5 f-green">Kata Mereka Tentang AdaPundi</h3>
    <div class="my-5">
        <b-container>
            <div id="say-slide">
                <carousel-3d :perspective="0" :space="200" :display="5" :border="0" :width="120" :height="120">
                  <slide v-for="(slide, i) in slidesdes" :index="i" v-bind:key="i" >
                   <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                     <figure @click="getActive(index)">
                      <img :id="isCurrent ? 'activedSay':''"  :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.img">
                    </figure>
                  </template>
                  </slide>
                </carousel-3d>
            </div>

            <div>
              <h5 style="font-family: MontSerrat-SemiBold;" class="mt-4 f-semiBlack text-center">{{slidesdes[contSay].name}}</h5>
              <p class="text-center mx-auto mt-4 pt-1 f-gray">{{slidesdes[contSay].capt}}</p>
            </div>

            <div class="mt-4 text-center">
              <span v-for="(ck, i) in slidesdes" :index="i" v-bind:key="i" class="dot" :class="{'active': contSay == i}"></span>
            </div>
        </b-container>
    </div>
  </div>

  <div class="our-partner pb-4">
    <h3 class="text-center pt-5 f-semiBlack">Mitra Kami</h3>
    <div class="my-5">
      <b-container>
        <b-row>
          <b-col md="4 text-center mb-3" v-for="(slide, i) in slidesMitra" :index="i" v-bind:key="i"><img class="p-3" v-bind:src="slide.img"/></b-col>
        </b-row>
        <!-- <div id="partner-slide">
          <carousel-3d :perspective="0" :disable3d="true" :space="185" :border="0" :width="149" :height="80" :clickable="false" :controls-visible="true">
            <slide v-for="(slide, i) in slidesMitra" :index="i" v-bind:key="i">
              <figure>
                <img v-bind:src="slide.img">
              </figure>
            </slide>
          </carousel-3d>
        </div> -->
      </b-container>
    </div>
  </div>
  <Footer/>

</div>
</template>

<script src="./home.js">
</script>

<style>
#homePage .how-to h5{
  font-family: MontSerrat-Regular;
}
#homePage .how-to p{
  font-family: MontSerrat-Light;
}
.activity .row img {
  width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
}

</style>
