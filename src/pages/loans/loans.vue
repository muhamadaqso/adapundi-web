<template>
<div id="loansPage">
  <Navbar/>
   <b-jumbotron class="img-fluid hero-image">
    <b-container class="content-hero">
        <b-row>
            <img src="@/assets/img/loans-bg.png" alt="" style="position: absolute; right: 0; top: 0%;">
          <b-col md="6">
            <div class="hero-text">
              <h2 class="f-semiBlack">Simulasi Pinjaman AdaPundi</h2>
              <p>Pinjaman tanpa agunan yang hanya butuh KTP, nikmati Limit hingga <strong>Rp4.000.000</strong>. Masukkan nominal pinjaman yang Anda Inginkan dan pilih tenor sesuai kebutuhan.</p>
            </div>
          </b-col>
          <b-col md="6" style="position:relative;">
            <div class="simulation bg-white shadow-sm w-75 mx-auto">
              <div class="headTabs d-flex mb-3">
                <b-button class="w-100"  :class="{actived:isLoans == 0}" @click="isLoans = 0">Pinjaman Staf</b-button>
                <b-button class="w-100" :class="{actived:isLoans == 1}" @click="isLoans = 1">Pinjaman Produktif</b-button>
              </div>

              <div class="content-simulation p-4">
                <div>
                  <div class="mb-2 d-flex justify-content-between">
                    <div class="mt-1"><h6 class="f-semiBlack">Jumlah Pinjaman</h6></div>
                    <div class="mt-1 f-green">Rp{{numberFormat(valueLoans)}}</div>
                  </div>
                  <input class="w-100 slider" type="range" v-model="valueLoans" min="400000" max="4000000">
                  <div class="d-flex justify-content-between">
                    <p>Rp400.000</p>
                    <p>Rp4000.000</p>
                  </div>
                </div>

                <div class="mt-4 pt-3 pb-5" style="border-bottom: 1px solid #C8CCDF;">
                  <div class=" mb-2 d-flex justify-content-between">
                    <div class="mt-1"><h6 class="f-semiBlack">Tenor</h6></div>
                    <div class="mt-1 f-green">{{valueTenure}} Hari</div>
                  </div>
                  <input class="w-100 slider" type="range" v-model="valueTenure" min="91" max="180">
                  <div class="d-flex justify-content-between">
                    <p>91 Hari</p>
                    <p>180 Hari</p>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <h5 class="f-semiBlack">Jumlah yang harus dibayarkan</h5>
                  <h4 class="f-green">Rp1.288.400</h4>
                </div>
                <div class="mt-4 pt-2 ml-md-3">
                  <b-button variant="warning w-100 py-3">Ajukan Sekarang</b-button>
                </div>
              </div>
            </div>
          </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>

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

  <div class="diff mb-5">
    <h3 class="text-center py-5 f-semiBlack">Perbedaan Pinjaman Staf dan Produktif</h3>
    <b-container class="mt-5">
      <b-row>
        <b-col md="4 ml-auto">
          <img src="@/assets/img/loans-illust2.png" alt="" style="width:inherit;">
        </b-col>
        <b-col md="5 mr-auto">
          <h5 class="f-semiBlack">Pinjaman Staff</h5>
          <div class="lines-green"></div>
          <ul class="LG mt-3">
            <li>Limit Pinjaman hingga <strong>Rp4.000.000</strong></li>
            <li>Suku Bunga Pinjaman <strong>0,6% per hari</strong></li>
            <li>Batas waktu Pinjaman <strong>91 - 180 hari</strong></li>
            <li>Data yang dibutuhkan <strong>KTP</strong></li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mt-5 pt-4">
        <b-col md="5 ml-auto">
          <h5 class="f-semiBlack">Pinjaman Produktif</h5>
          <div class="lines-orange"></div>
          <ul class="LO mt-3">
            <li>Limit Pinjaman hingga <strong>Rp10.000.000</strong></li>
            <li>Suku Bunga Pinjaman <strong>4% per bulan</strong></li>
            <li>Batas waktu Pinjaman <strong>hingga 3 bulan</strong></li>
            <li>Data yang dibutuhkan <strong>KTP dan Bukti usaha Anda</strong></li>
          </ul>
        </b-col>
        <b-col md="4 mr-auto">
          <img src="@/assets/img/loans-illust.png" alt="" style="width:inherit;">
        </b-col>
      </b-row>
    </b-container>
  </div>
  <Footer/>
</div>
</template>

<script src="./loans.js">
</script>

<style>
.diff .lines-green {
  width: 58px;
    height: 5px;
    border-radius: 1rem;
    background: #10B382;
}
.diff .lines-orange {
  width: 58px;
    height: 5px;
    border-radius: 1rem;
    background: #FF9E2C;
}
.diff ul {
  list-style: none; /* Remove default bullets */
  padding-inline-start: 25px;
}
.diff ul.LG li::before {
  content: "\2022";
  color: #10B382;
  font-weight: bold;
  font-size: 26px;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.diff ul.LO li::before {
  content: "\2022";
  color: #FF9E2C;
  font-size: 26px;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
.diff ul li {
  font-family: MontSerrat-light;
  color: #4E5263;
}
.diff h5 {
  font-family: MontSerrat-Regular;
}
.simulation .headTabs button {
  background: white;
    color: #9DA2B9;
    border-color: transparent;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
  background: #10b38234;
    color: #10B382;
    border-color: transparent;
}
.simulation {
  border-radius: 7px;
}
.simulation .headTabs button.btn:focus, .simulation .headTabs button.btn.focus{
 box-shadow: none !important;
}
.simulation .headTabs button.actived {
  background: #10b38234;
    color: #10B382;
    border-color: transparent;
}
.simulation .headTabs{
  border-bottom: 1px solid #C8CCDF;
}
.simulation .content-simulation .d-flex .mt-1{
  font-family: MontSerrat-SemiBold;
}
.simulation .content-simulation .d-flex p{
  color: #757A91;
  font-family: MontSerrat-Regular;
  font-size: 14px;
}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: #10B382;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 1rem;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  border-radius: 50%;
  height: 20px;
  border: 3px solid #fff;
  background: #10B382;
  cursor: pointer;
    box-shadow: 1px 3px 18px #cec5c5;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #10B382;
  cursor: pointer;
    box-shadow: 1px 3px 18px #cec5c5;
}
</style>
