<template>
<div id="loansPage">
  <Navbar/>
   <b-jumbotron class="img-fluid hero-image">
    <b-container class="content-hero">
        <b-row>
            <img src="@/assets/img/loans-bg.png" alt="" style="position: absolute; right: 0; top: 0%;">
          <b-col md="6">
            <div class="hero-text">
              <h2 class="f-semiBlack mb-4">Investasi Pinjaman AdaPundi</h2>
              <p>AdaPundi adalah Fintech P2P Lending Indonesia yang menghubungkan Investor dan Peminjam. Masukkan nominal investasi yang Anda inginkan dan dapatkan hasilnya.</p>
            </div>
            <ul class="invest-list">
              <li>Pembiayaan Usaha Kecil Menengah</li>
              <li>Tanpa Barang Jaminan</li>
              <li>Pilih Nominal Sesuai Keinginan Anda</li>
            </ul>
          </b-col>
          <b-col md="6" style="position:relative;">
            <div class="simulation bg-white shadow-sm w-75 mx-auto">
              <div class="headTabs mb-3">
                <h6 class="text-center f-semiBlack py-2">Simulasi Investasi Pinjaman</h6>
              </div>

              <div class="content-simulation p-4">
                <div>
                  <div class="mb-2 d-flex justify-content-between">
                    <div class="mt-1"><h6 class="f-semiBlack">Jumlah Investasi</h6></div>
                    <div class="mt-1 f-green">Rp{{numberFormat(valueLoans)}}</div>
                  </div>
                  <input class="w-100 slider" type="range" v-model="valueLoans" min="400000" max="4000000">
                  <div class="d-flex justify-content-between">
                    <p>Rp400.000</p>
                    <p>Rp4000.000</p>
                  </div>
                </div>

                <div class="mt-4 pt-3 pb-4">
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

                <b-row>
                  <b-col md="6" style="border-right: 1px solid #C8CCDF;">
                    <div class="text-left mt-4">
                      <h6 style="font-size: 14px;" class="f-semiBlack">Bunga per tahun</h6>
                      <h4 class="f-green">14%</h4>
                    </div>
                  </b-col>
                  <b-col md="6">
                    <div class="text-left mt-4">
                      <h6 style="font-size: 14px;" class="f-semiBlack">Proyeksi Imbal Hasil</h6>
                      <h4 class="f-green">Rp1.297.520</h4>
                    </div>
                  </b-col>
                </b-row>
                <div class="mt-4 pt-2 ml-md-3">
                  <b-button variant="warning w-100 py-3">Ajukan Sekarang</b-button>
                </div>
              </div>
            </div>
          </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>

    <b-jumbotron class="statt invest-stat img-fluid hero-image" :style="{ backgroundImage: `url(${require('@/assets/img/bg-stat.svg')})` }">
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
              <h2 class="text-center f-semiBlack mb-4">&gt;78%</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <b-col md="3 ml-auto">
          <div class="bg-white p-4">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-6.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Pinjaman yang Dicairkan</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">&lt; 20%</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
        <b-col md="3 mr-auto">
          <div class="bg-white py-4 pl-4 pr-0">
              <div class="d-flex mb-2">
                <img width="36" height="36" src="@/assets/img/ic-stat-7.png" alt="">
                <p class="mb-0 ml-2 align-self-center">Tingkat keterlambatan H-90</p>
              </div>
              <h2 class="text-center f-semiBlack mb-4">13%</h2>
              <img id="bg-down" src="@/assets/img/bg-stat-2.svg" alt="">
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>

  <div class="diff my-5 pb-4">
    <h3 class="text-center py-5 f-semiBlack">Keuntungan Berinvestasi Bersama AdaPundi</h3>
    <b-container class="mt-5 benefit">
      <b-row>
        <b-col md="6 px-5">
          <b-row>
            <b-col md="2 text-center">
              <span>1</span>
            </b-col>
            <b-col md="10">
              <h6>Perlindungan Hukum</h6>
              <p>Saat ini AdaPundi telah terdaftar di Otoritas jasa Keuangan(OJK) dan merupakan perusahaan teknologi keuangan yang memenuhi standar operasional di Indonesia.</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6 px-5">
          <b-row>
            <b-col md="2 text-center">
              <span>2</span>
            </b-col>
            <b-col md="10">
              <h6>Kekuatan Teknis yang Termuka</h6>
              <p>Mode kontrol Big Data dan sistem anti-penipuan untuk melindungi pendanaan anda.</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6 px-5 mt-4">
          <b-row>
            <b-col md="2 text-center">
              <span>3</span>
            </b-col>
            <b-col md="10">
              <h6>Keuntungan Besar</h6>
              <p>Suku bunga tahunan mencapai 14% untuk memberikan pengembalian terhadap pembiayaan anda.</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6 px-5 mt-4">
          <b-row>
            <b-col md="2 text-center">
              <span>4</span>
            </b-col>
            <b-col md="10">
              <h6>Partisipasi dalam Membangun Ekonomi</h6>
              <p>Pembiayaan akan diberikan kepada pengusaha kecil di Indonesia untuk membantu mengembangkan ekonomi.</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>

  <img class="w-100" src="@/assets/img/invest-foot.png" alt="">
  <Footer/>
</div>
</template>

<script src="./invest.js">
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
ul.invest-list   {
  list-style: none; /* Remove default bullets */
  padding-inline-start: 25px;
}
ul.invest-list  li::before {
  content: "\2022";
  color: #10B382;
  font-weight: bold;
  font-size: 24px;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
ul.invest-list  li {
  font-family: MontSerrat-SemiBold;
  color: #757A91;

}
.benefit span {
    text-align: center;
    background: linear-gradient(153deg, rgba(57,229,97,1) 0%, rgba(57,229,97,1) 30%, rgba(16,179,130,1) 100%) !important;
    padding: 9px 16px;
    border-radius: 50%;
    font-family: MontSerrat-SemiBold;
    color: #fff;
}
.benefit h6 {
  font-family: MontSerrat-SemiBold;
  color: #757A91;
}
.benefit p {
  font-size: 14px;
  font-family: MontSerrat-Light;
  color: #9DA2B9;
  line-height: 28px;
}
</style>
