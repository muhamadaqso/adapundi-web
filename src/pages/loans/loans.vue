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
                <b-button class="w-100"  :class="{actived:isLoans == 0}" @click="isLoans = 0; valueTenure = '140'; valueLoans = '1200000'; backgroundSize = (1200000-400000)*100/ (4000000-400000)+ '% 100%';backgroundSize2 = (this.valueTenure-91)*100/ (180-91) + '% 100%'; ">Pinjaman Staff</b-button>
                <b-button class="w-100" :class="{actived:isLoans == 1}" @click="isLoans = 1; valueTenure = '2'; valueLoans = '6000000'; backgroundSize = (6000000-5000000)*100/ (10000000-5000000)+ '% 100%';backgroundSize2 = (this.valueTenure-1)*100/ (3-1) + '% 100%';">Pinjaman Produktif</b-button>
              </div>

              <div class="content-simulation p-4">
                <div>
                  <div class="mb-2 d-flex justify-content-between">
                    <div class="mt-1"><h6 class="f-semiBlack">Jumlah Pinjaman</h6></div>
                    <div class="mt-1 f-green">Rp{{numberFormat(valueLoans)}}</div>
                  </div>
                  <input class="w-100 slider" @input="updateSlider" :style="{backgroundSize: backgroundSize}" type="range" v-model="valueLoans" :min="isLoans == 0 ? '400000' : '5000000'" :max=" isLoans == 0 ? '4000000' : '10000000'">
                  <div class="d-flex justify-content-between">
                    <p>Rp{{isLoans == 0 ? '400.000' : '5.000.000'}}</p>
                    <p>Rp{{isLoans == 0 ? '4.000.000' : '10.000.000'}}</p>
                  </div>
                </div>

                <div class="mt-4 pt-3 pb-4" style="border-bottom: 1px solid #C8CCDF;">
                  <div class=" mb-2 d-flex justify-content-between">
                    <div class="mt-1"><h6 class="f-semiBlack">Tenor</h6></div>
                    <div class="mt-1 f-green">{{valueTenure}} {{isLoans == 0 ? 'Hari' : 'Bulan'}}</div>
                  </div>
                  <input class="w-100 slider" @input="updateSliderTwo" :style="{backgroundSize: backgroundSize2}"  type="range" v-model="valueTenure" :min=" isLoans == 0 ? '91' : '1'" :max="isLoans == 0 ? '180' : '3'">
                  <div class="d-flex justify-content-between">
                    <p>{{isLoans == 0 ? '91' : '1'}} {{isLoans == 0 ? 'Hari' : 'Bulan'}}</p>
                    <p>{{isLoans == 0 ? '180' : '3'}} {{isLoans == 0 ? 'Hari' : 'Bulan'}}</p>
                  </div>
                </div>

                <div class="text-center mt-4">
                  <h5 class="f-semiBlack">Jumlah yang harus dibayarkan</h5>
                  <h4 class="f-green">Rp{{isLoans == 0 ? numberFormat((valueLoans*valueTenure*0.01137257).toFixed(0)) : numberFormat((valueLoans*(valueTenure*30)*0.00648112).toFixed(0))}}</h4>
                </div>
                <div class="mt-4 pt-2 ml-md-3">
                  <b-button variant="warning w-100 py-3" @click="isLoans == 0 ? goTo('https://play.google.com/store/apps/details?id=com.yinshan.program.banda&hl=es_PA') : step = 1; $bvModal.show('bv-modal-requestLoans')">Ajukan Sekarang</b-button>
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
    <b-container class="mt-5">
    <h3 class="text-center py-5 f-semiBlack">Perbedaan Pinjaman Staf dan Produktif</h3>
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

  <b-modal size="lg" id="bv-modal-requestLoans" hide-footer hide-header>
    <div class="d-block text-center mb-5">
      <h3 class="mb-0 f-semiBlack">Ajukan Pinjaman Produktif</h3>
      <small style="color: #4A4A4A;">Pastikan data pengajuan pinjaman anda benar</small>
    </div>

      <div v-if="step == 1">
        <b-form-group
        id="input-group-1"
        class="mb-4"
      >
      <label for="jumlahPinjamForm">Jumlah Pinjaman <span class="f-gray">(5juta - 10juta Rupiah)</span></label>
        <b-form-select
          id="input-3"
          v-model="loanValue"
          :options="[{text: 'Masukan Jumlah Pinjaman', value: null}, '5Juta', '6Juta', '7Juta', '8Juta', '9Juta', '10Juta']"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-3" label="Tenor" label-for="input-3" class="mb-4" >
        <b-form-select
          id="input-3"
          v-model="tenor"
          :options="tenorOption"
          required
        ></b-form-select>
      </b-form-group>
      <b-form-group id="input-group-3" label="Tanggal Pinjaman Dibutuhkan" label-for="input-3" class="mb-4">
         <b-form-datepicker v-model="date" id="example-datepicker"></b-form-datepicker>
      </b-form-group>
      <b-form-group id="input-group-3" label="Jenis Jaminan" label-for="input-3" class="mb-4">
        <b-form-select
          id="input-3"
          v-model="jaminan"
          :options="[{text: 'Pilih Jenis Jaminan', value: null}, 'Kendaraan', 'Rumah', 'Tanah']"
          required
        ></b-form-select>
      </b-form-group>
      </div>

      <div v-if="step == 2">
        <b-form-group
        id="input-group-1"
        class="mb-4"
      >
      <label for="jumlahPinjamForm">Nama</label>
        <b-form-input
          id="jumlahPinjamForm"
          v-model="form.name"
          required
          placeholder="Ketik Nama"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Email" label-for="input-3" class="mb-4" >
        <b-form-input
          id="jumlahPinjamForm"
          type="email"
          v-model="form.email"
          required
          placeholder="Ketik Email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Nomor KTP" label-for="input-3" class="mb-4" >
        <b-form-input
          id="jumlahPinjamForm"
          type="number"
          v-model="form.ktpId"
          required
          placeholder="Ketik Nomor KTP"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Tujuan Pinjaman" label-for="input-3" class="mb-4">
        <b-form-select
          id="input-3"
          v-model="form.jaminan"
          :options="[{text: 'Pilih Tujuan Pinjaman', value: null}, 'Kendaraan', 'Rumah', 'Tanah']"
          required
        ></b-form-select>
      </b-form-group>
       <b-form-group id="input-group-3" label="Alamat" label-for="input-3" class="mb-4">
        <b-form-textarea
          id="textarea"
          v-model="form.address"
          placeholder="Enter Address"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group id="input-group-3" label="Nomor Telepon" label-for="input-3" class="mb-4" >
        <b-form-input
          id="jumlahPinjamForm"
          type="number"
          v-model="form.tlp"
          required
          placeholder="Ketik Nomor Telepon"
        ></b-form-input>
      </b-form-group>
      <b-row>
        <b-col md="6">
          <b-form-group id="input-group-3" label="Kode Verifikasi" label-for="input-3" class="mb-4" >
            <b-form-input
              id="jumlahPinjamForm"
              type="number"
              v-model="form.verificationCode"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6 align-self-center">
            <b-button size="sm" variant="warning py-3 w-100" >Dapatkan kode verifikasi</b-button>
        </b-col>
      </b-row>
      <b-form-group id="input-group-4">
          <b-form-checkbox v-model="form.isRead" value="true"
      unchecked-value="false">Saya telah membaca dan setuju dengan <a href="#">Privacy Policy</a> dan <a href="#">Term & Conditions</a></b-form-checkbox>
      </b-form-group>
      <b-form-group id="input-group-4">
        <label for="jumlahPinjamForm">Kode Referal <span class="f-gray">(Optional)</span></label>
          <b-form-input
            id="jumlahPinjamForm"
          ></b-form-input>
      </b-form-group>
      </div>

    <div class="mt-5 d-flex">
      <b-button class="ml-auto mr-5 w-50" variant="light" @click="step == 1 ? $bvModal.hide('bv-modal-requestLoans') : step = 1 ">{{step == 1 ? 'Batal': 'Kembali'}}</b-button>
      <b-button variant="warning py-3 w-50" :disabled="step == 1 ? (loanValue == null || tenor == null || jaminan == null || date == '') : form.isRead == false" @click="step == 1 ? step = 2 : toThanks();">{{step == 1 ? 'Lanjut': 'Kirimkan'}}</b-button>
    </div>
  </b-modal>

  <b-modal id="bv-modal-thanks" hide-footer hide-header centered>
    <div class="d-block text-center p-3">
      <h4 class="mb-4 f-semiBlack">Selamat, Pengajuan Anda Berhasil</h4>
      <img src="@/assets/img/thanks-icon.png" alt="">
      <p class="mt-4" style="font-size:12px; color: #4A4A4A;">Terima kasih telah mendaftar sebagai peminjam pinjaman produktif di adapundi, tim pinjaman kami akan segera menghubungi Anda untuk verifikasi dokumen offline.</p>
        <b-button size="sm" variant="warning py-3 w-50 mt-4" @click="$bvModal.hide('bv-modal-thanks')">OK</b-button>
    </div>
  </b-modal>

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
/* Slider CSS */
input.slider[type=range] {
    -webkit-appearance: none;
    display: block;
    width: 100%;
    margin: 16px 0;
    background: #bcbcbd;
    background-image: -webkit-gradient(linear, 20% 0%, 20% 100%, color-stop(0%, #10B382), color-stop(100%, #10B382));
    background-image: -webkit-linear-gradient(left, #10B382 0%,#10B382 100%);
    background-image: -moz-linear-gradient(left, #10B382 0%, #10B382 100%);
    background-image: -o-linear-gradient(to right, #10B382 0%,#10B382 100%);
    background-image: linear-gradient(to right, #10B382 0%,#10B382 100%);
    background-repeat: no-repeat;
    border-radius: 1rem;
}
input.slider[type=range]:focus {
  outline: none;
}
input.slider[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  box-shadow: none;
  background: transparent;
  border-radius: 0px;
  border: none;
}
input.slider[type=range]::-webkit-slider-thumb {
  box-shadow: none;
  border: 4px solid #fff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #10B382;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;
  box-shadow: 1px 3px 18px #cec5c5;
}
input.slider[type=range]:focus::-webkit-slider-runnable-track {
  background: transparent;
}
input.slider[type=range]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  box-shadow: none;
  background: transparent;
  border-radius: 0px;
  border: none;
}
input.slider[type=range]::-moz-range-thumb {
  box-shadow: none;
  border: 4px solid #fff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #10B382;
  cursor: pointer;
  box-shadow: 1px 3px 18px #cec5c5;
}
input.slider[type=range]::-ms-track {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input.slider[type=range]::-ms-fill-lower {
  background: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
input.slider[type=range]::-ms-fill-upper {
  background: transparent;
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
input.slider[type=range]::-ms-thumb {
  box-shadow: none;
  border: 4px solid #10B382;
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background: #ffffff;
  cursor: pointer;
  height: 4px;
}
input.slider[type=range]:focus::-ms-fill-lower {
  background: transparent;
}
input.slider[type=range]:focus::-ms-fill-upper {
  background: transparent;
}
/* End Range Slider */
#bv-modal-requestLoans .modal-body{
  padding: 3rem 8rem;
}
</style>
