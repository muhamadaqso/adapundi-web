<template>
  <div id="complaintsPage">
    <Navbar/>
    <b-container>
      <div class="text-center my-5 pb-4">
        <h2 class="mb-5 f-green" style="font-family: MontSerrat-Regular;">Tentang AdaPundi</h2>
        <p class="f-semiBlack" style="line-height: 28px;
            font-family: MontSerrat-Light;"><strong>PT. Info Tekno Siaga (AdaPundi)</strong> adalah perusahaan pemberi pinjaman peer to peer (P2P) berbasis teknologi yang terdaftar di Otoritas Jasa Keuangan (OJK) dengan nomor registrasi S-448/NB.213/2019 dan juga diinvestasikan oleh banyak perusahaan modal ventura yang terkenal seperti Sequoia Capital. AdaPundi bertujuan menjadi perusahaan platform lending online nomor satu di Indonesia dan berkomitmen untuk selalu ada bagi mereka yang membutuhkan bantuan dana sementara dengan memberikan akses kemudahan, cepat dan menetapkan standar tertinggi dalam perlindungan dan kerahasian data nasabah. </p>
        <p class="f-semiBlack" style="line-height: 28px;
            font-family: MontSerrat-Light;">AdaPundi menyediakan pilihan pinjaman dari Rp400.000 hingga 4000.000 dengan tempo pelunasan 21 hari hingga 180 hari. Kami memberikan kemudahan dan kenyamanan dengan proses yang sepenuhnya digital, hanya dengan KTP yang dibutuhkan tanpa adanya jaminan. Dana diberikan dengan cepat dalam waktu 5 menit setelah pengajuan disetujui.</p>
      </div>
    </b-container>

    <b-container class="profile">
        <h2 class="mb-5 pb-5 f-green text-center" style="font-family: MontSerrat-Regular;">Profil Direksi</h2>

        <div class="mt-5 bg-white shadow-lg p-4 w-75 mx-auto">
          <b-row>
            <b-col md="2 text-center">
                <img id="profile1" src="@/assets/img/AI.png" alt="">
            </b-col>
            <b-col md="8 ml-md-5 mt-4 mt-md-0">
              <div class="mb-3">
                <h5 class="f-semiBlack">Achmad Indrawan</h5>
                <h6 class="f-gray">Direktur PT. Info Tekno Siaga </h6>
                <div class="lines-green"></div>
              </div>
              <p class="f-semiBlack">Achmad Indrawan memiliki pengalaman lebih dari 10 tahun di bidang jasa keuangan. Beliau memiliki kemampuan dan pengalaman yang kuat.</p>
            </b-col>
            <b-col md="12">
              <p class="f-semiBlack">Ketertarikannya pada pengembangan industri fintech membuatnya mendirikan AdaPundi. Harapannya, AdaPundi dapat menjadi solusi inklusi keuangan Indonesia dan membangun perekonomian Indonesia.</p>
            </b-col>
          </b-row>
        </div>

        <div class="bg-white shadow-lg p-4 w-75 mx-auto" style="margin-top: 6rem;">
          <b-row>
            <b-col md="2 text-center  d-md-none d-block">
                <img id="profile2" src="@/assets/img/NN.png" alt="">
            </b-col>
            <b-col md="9 mt-4 mt-md-0">
              <div class="mb-3">
                <h5 class="f-semiBlack">Nova Novianti</h5>
                <h6 class="f-gray">Komisaris </h6>
                <div class="lines-green"></div>
              </div>
              <p class="f-semiBlack">Nova Novianti  adalah President Komisaris AdaPundi. Dia mempunyai pengalaman kerja yang kaya di banyak perusahaan ternama di Indonesia.</p>
            </b-col>
            <b-col md="2 text-center d-md-block d-none">
                <img id="profile2" src="@/assets/img/NN.png" alt="">
            </b-col>
            <b-col md="12">
              <p class="f-semiBlack">Dia berharap menggunakan pengalamannya untuk menjadikan AdaPundi sebagai salah satu solusi inklusi keuangan di Indonesia.</p>
            </b-col>
          </b-row>
        </div>

    </b-container>

    <div class="visi-misi text-center">
      <img src="@/assets/img/activity-top.png" alt="" style="position:absolute; left:0; top:0;">
    <img src="@/assets/img/activity-bottom.png" alt="" style="position:absolute; right:0; bottom:0;">
      <b-container class="py-5">
        <h3 class="text-center pt-5 pb-3">Visi Kami</h3>
        <p>Menjadi penyedia solusi keuangan taktis terdepan bagi konsumen Indonesia.</p>

        <div class="mt-4 pt-md-5 pt-0 w-75 mx-auto">
          <h3 class="text-center pt-5 pb-3">Misi Kami</h3>
          <ul>
            <li>Menjunjung tinggi hukum Republik Indonesia & regulasi Otoritas Jasa Keuangan; dan mewujudkannya dalam produk teknologi finansial yang aman, kredibel, transparan, dan mudah digunakan.</li>
            <li>Menyediakan solusi & pengalaman positif bagi produktivitas ekonomi konsumen, melalui metode analisa kelayakan kredit yang bersandar pada terapan terbaik teknologi informasi terkini.</li>
            <li>Secara berkala, melalui berbagai metode & sarana komunikasi; menyediakan pengetahuan finansial yang berdampak positif bagi pertumbuhan kecerdasan finansial konsumen.</li>
          </ul>
        </div>

      </b-container>
    </div>

      <div class="gallery py-5 my-5">
        <h3 class="text-center py-5 f-semiBlack">Gallery AdaPundi</h3>
        <b-container class=" mt-4">
          <b-row>
            <b-col md="3  d-none d-md-block">
              <img class="cursor-pointer" src="@/assets/img/imgAU-1.png" alt="" @click="updateCurrentIndex(0)">
            </b-col>
            <b-col md="9">
              <b-row>
                <b-col md="4">
                  <img class="cursor-pointer" src="@/assets/img/imgAU-2.png" alt=""  @click="updateCurrentIndex(1)">
                </b-col>
                <b-col md="4">
                  <img class="cursor-pointer" src="@/assets/img/imgAU-3.png" alt=""  @click="updateCurrentIndex(2)">
                </b-col>
                <b-col md="4">
                  <img class="cursor-pointer" src="@/assets/img/imgAU-4.png" alt=""  @click="updateCurrentIndex(3)">
                </b-col>
              </b-row>
              <b-row class="mt-3  d-none d-md-flex">
                <b-col class="cursor-pointer" md="4">
                  <img src="@/assets/img/imgAU-5.png" alt=""  @click="updateCurrentIndex(4)">
                </b-col>
                <b-col md="8">
                  <img class="cursor-pointer" src="@/assets/img/imgAU-6.png" alt=""  @click="updateCurrentIndex(5)">
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <div class="mt-5 w-25 mx-auto d-none d-md-flex">
            <b-button block variant="outline-success text-center" @click="seeMoreModal = !seeMoreModal">Lihat Lebih Banyak</b-button>
          </div>
          <div class="mt-5 w-100 mx-auto d-flex d-md-none">
            <b-button block variant="outline-success text-center" @click="seeMoreModal = !seeMoreModal">Lihat Lebih Banyak</b-button>
          </div>
        </b-container>
      </div>
  <modal-gallery v-model="seeMoreModal" :galleries="gallery" :title="'Aktifitas Offline'" :index="currentGalleryIndex"></modal-gallery>

    <Footer/>
  </div>
</template>

<script src="./aboutUs.js">
</script>

<style>
.visi-misi {
  position: relative;
  margin-top: 7rem;
  background: linear-gradient(180deg, rgb(38 226 81) 0%, rgb(40 156 67 / 79%) 23%, rgba(16,179,130,1) 100%);
  color: #fff;
  font-family: MontSerrat-Regular;
}
.visi-misi ul {
  padding-inline-start: 15px
}
.visi-misi ul li {
    list-style-type: decimal;
    font-size: 16px;
    line-height: 38px;
    padding-bottom: 3rem;
}
 .profile .lines-green {
    width: 58px;
    height: 4px;
    border-radius: 1rem;
    background: #10B382;
}
 .profile h5 {
   letter-spacing: 4.5px;
  font-family: MontSerrat-SemiBold;
 }
 .profile h6 {
  font-family: MontSerrat-SemiBold;
 }
 .profile p {
  font-family: MontSerrat-Light;
  line-height: 30px;
    font-size: 14px;
 }
img#profile1 {
    position: absolute;
    width: 200px;
    height: 200px;
    left: -20%;
    top: -35%;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 1px 3px 18px #cec5c5;
}
img#profile2 {
    position: absolute;
    width: 200px;
    height: 200px;
    right: -75%;
    top: -35%;
    border-radius: 50%;
    border: 4px solid #fff;
    box-shadow: 1px 3px 18px #cec5c5;
}
</style>
