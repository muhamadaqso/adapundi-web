<template>
  <div id="footer">
    <div class="get-on-play" v-if="$route.name !== 'BlogDetail'">
      <img src="@/assets/img/activity-top.png" alt="" style="position:absolute; left:0; top:0;">
      <img src="@/assets/img/activity-bottom.png" alt="" style="position:absolute; right:0; bottom:0;">
      <b-container class="v2 pb-4 pb-md-0">
        <b-row class="align-items-center h-100">
          <b-col md="6">
            <div class="mx-auto" style="width:65%">
              <img class="w-100" src="@/assets/img/gadget-footer.png" alt="">
            </div>
          </b-col>
          <b-col md="6">
            <div class="text-center text-md-left">
              <h2 class="f-white mb-4 pb-4">Hadir untuk solusi finansial Anda, unduh aplikasi AdaPundi Sekarang</h2>
              <h5 class="f-white mb-3">Download dan Ajukan Sekarang!</h5>
              <a href="https://play.google.com/store/apps/details?id=com.yinshan.program.banda"><img width="185" src="@/assets/img/gplay.png" alt=""></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <footer class="footer">
    <div class="container">
      <div class="row mb-4">
        <b-col md="5 align-self-center">
          <hr>
        </b-col>
        <b-col md="2 px-0">
          <div class="footer-logo">
                <img src="@/assets/img/logo.png" alt="Kitten" width="74" height="74">
                <img src="@/assets/img/adapundi-word.png" class="ml-1" alt="Kitten" width="99" height="23">
          </div>
        </b-col>
        <b-col md="5  align-self-center">
          <hr>
        </b-col>
      </div>

        <div class="row">
        <div class="col-sm-4">
            <div>
              <b-row class="mb-5">
                <b-col cols="6">
                  <span class="acount-icon">
                    <a href="#"  @click="$router.push({name:'Loans'})">Pinjaman</a>
                  </span>
                </b-col>
                <b-col cols="6">
                  <span class="acount-icon">
                    <a href="#" @click="$router.push({name:'Blog'})">Blog</a>
                  </span>
                </b-col>
                <b-col cols="6">
                  <span class="acount-icon">
                    <a href="#" @click="$router.push({name:'Invest'})">Investasi</a>
                  </span>
                </b-col>
                <b-col cols="6">
                  <span class="acount-icon">
                    <a href="#" @click="$router.push({name:'Complaints'})">Layanan Pengaduan</a>
                  </span>
                </b-col>
                <b-col cols="6">
                  <span class="acount-icon">
                    <a href="#" @click="$router.push({name:'AboutUs'})">Tentang Kami</a>
                  </span>
                </b-col>
                <b-col cols="6">
                  <span class="acount-icon">
                    <a href="#">FAQ</a>
                  </span>
                </b-col>
              </b-row>
            </div>
            <p>Terhubung dengan kami</p>
            <ul class="social-icon">
                <a href="https://www.facebook.com/AdaPundiOfficial/" class="social"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://twitter.com/AdaPundi/" class="social"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/adapundi/" class="social"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/adapundiofficial/" class="social"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://www.youtube.com/channel/UCz6krbINnDqj1wDIe-_r3CA" class="social"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            </ul>
        </div>
        <div class="col-sm-4 text-center my-5 my-md-5">
            <p>Terdaftar dan diawasi oleh:</p>
            <span class="acount-icon">
            <a href="#"><img src="@/assets/img/footer-logo1.png"  width="180" alt=""></a>
            <a href="#"><img src="@/assets/img/footer-logo2.png" width="200" class="my-3" alt=""></a>
            <a href="#">
              <div class="d-flex">
                  <a href="#" class="ml-auto"><img src="@/assets/img/tuv-logo.png"  width="80" alt=""></a>
                  <div class="mx-2 text-left">
                    <p style="font-size: 9px;
                    line-height: 15px;
                    color: #e2dfdf;">
                    Management <br>
                    System<br>
                    ISO/IEC 27001:2013</p>
                    <p style="font-size: 9px;
                    line-height: 15px;
                    color: #e2dfdf;">www.tuv.com<br>
                    ID  9108658757</p>
                  </div>
                  <a href="#" class="mr-auto"><img src="@/assets/img/QR-code.png"  width="80" alt=""></a>
              </div>
            </a>
            </span>
        </div>
        <div class="col-sm-4">
            <p>Hubungi kami</p>
                  <span class="acount-icon">
                    <a>PT INFO TEKNO SIAGA</a>
                  </span>
            <p class="mt-3" style="color:#C8CCDF; line-height:24px; font-size:12px;">Capital Place Building, Lantai 47, Suite B, Jl. Jend.
              Gatot Subroto No. Kav. 18, RT 6 RW 1, Kelurahan Kuningan Barat, Kecamatan Mampang Prapatan,
              Jakarta 12710, DKI Jakarta</p>
              <p style="color:#C8CCDF; line-height:24px; font-size:12px;">Telepon: (021) 50860666 <br> Email: <a style="color:#C8CCDF;" href="mailto:cs@AdaPundi.com">cs@AdaPundi.com</a></p>
            </div>
        </div>
        <hr>
        <div class="warning my-4">
          <h5 class="mb-3">PERHATIAN:</h5>
          <ul>
            <li>Layanan Pinjam Meminjam Berbasis Teknologi Informasi merupakan kesepakatan perdata antara Pemberi Pinjaman dengan Penerima Pinjaman, sehingga segala risiko yang timbul dari kesepakatan tersebut ditanggung sepenuhnya oleh masing-masing pihak.</li>
            <li>Risiko kredit atau gagal bayar ditanggung sepenuhnya oleh Pemberi Pinjaman. Tidak ada lembaga atau otoritas negara yang bertanggung jawab atas risiko gagal bayar ini.</li>
            <li>Penyelenggara dengan persetujuan dari masing-masing Pengguna (Pemberi Pinjaman dan/atau Penerima Pinjaman) mengakses, memperoleh, mengelola dan/atau menggunakan data pribadi Pengguna (“Pemanfaatan Data”) pada atau di dalam benda, perangkat elektronik (termasuk smartphone atau telepon seluler), perangkat keras (hardware) maupun lunak (software), dokumen elektronik, aplikasi atau system elektronik milik Pengguna atau yang dikuasai Pengguna, dengan memberitahukan tujuan, batasan dan mekanisme Pemanfaatan Data tersebut kepada Pengguna yang bersangkutan sebelum memperoleh persetujuan yang dimaksud.</li>
            <li>Pemberi Pinjaman yang belum memiliki pengetahuan dan pengalaman pinjam meminjam, disarankan untuk tidak menggunakan layanan ini.</li>
            <li>Penerima Pinjaman harus mempertimbangkan tingkat bunga pinjaman dan biaya lainnya sesuai dengan kemampuan dalam melunasi pinjaman.</li>
            <li>Setiap kecurangan tercatat secara digital di dunia maya dan dapat diketahui masyarakat luas di media sosial.</li>
            <li>Pengguna harus membaca dan memahami informasi ini sebelum membuat keputusan menjadi Pemberi Pinjaman atau Penerima Pinjaman.</li>
            <li>Pemerintah yaitu dalam hal ini Otoritas Jasa Keuangan, tidak bertanggung jawab atas setiap pelanggaran atau ketidakpatuhan oleh Pengguna, baik Pemberi Pinjaman maupun Penerima Pinjaman (baik karena kesengajaan atau kelalaian Pengguna) terhadap ketentuan peraturan perundang-undangan maupun kesepakatan atau perikatan antara Penyelenggara dengan Pemberi Pinjaman dan/atau Penerima Pinjaman.</li>
            <li>Setiap transaksi dan kegiatan pinjam meminjam atau pelaksanaan kesepakatan mengenai pinjam meminjam antara atau yang melibatkan Penyelenggara, Pemberi Pinjaman dan/atau Penerima Pinjaman wajib dilakukan melalui escrow account dan virtual account sebagaimana yang diwajibkan berdasarkan Peraturan Otoritas Jasa Keuangan Nomor 77/POJK.01/2016 tentang Layanan Pinjam Meminjam Uang Berbasis Teknologi Informasi dan pelanggaran atau ketidakpatuhan terhadap ketentuan tersebut merupakan bukti telah terjadinya pelanggaran hukum oleh Penyelenggara sehingga Penyelenggara wajib menanggung ganti rugi yang diderita oleh masingmasing Pengguna sebagai akibat langsung dari pelanggaran hukum tersebut di atas tanpa mengurangi hak Pengguna yang menderita kerugian menurut Kitab Undang-Undang Hukum Perdata.</li>
          </ul>
        </div>
        <hr>
        <div class="text-center"><p style="font-size:12px;">Copyright © 2015-2020 AdaPundi All Rights Reserved by PT Info Tekno Siaga</p></div>
    </div>
</footer>
  </div>
</template>

<style>
#footer .get-on-play {
  position: relative;
  background: linear-gradient(180deg, rgb(38 226 81) 0%, rgb(40 156 67 / 79%) 23%, rgba(16,179,130,1) 100%);
}
#footer .get-on-play h2{
  font-family: MontSerrat-Regular;
  line-height: 48px;
}
#footer .get-on-play h5{
  font-family: MontSerrat-Regular;
  line-height: 34px;
}

/*FOOTER START///////////////////*/
.footer hr {
      border-top: 1px solid #E5E5E5;
}
.footer p {
    font-family: MontSerrat-Regular;
    color: #757A91;
    font-size: 14px;

}
.footer {
    padding: 25px 0 20px 0;
    background-color: #1B202A;
}
.footer .social-icon{
	padding:0px;
	margin:0px;
}
.footer .social-icon a{
    display: inline-block;
    color: #C8CCDF;
    font-size: 12px;
    border: 1px solid;
    border-radius: 50%;
    padding: 5px 9px;
}
.footer .acount-icon a{
    display: block;
    color: #C8CCDF;
    font-size: 14px;
    padding: 5px 0;
    text-decoration: none;
    font-family: MontSerrat-Regular;
}
.footer .acount-icon .fa{
	margin-right:25px;
}
.footer .warning h5 {
  font-family: MontSerrat-SemiBold;
    color: #9DA2B9;
}
.footer .warning ul {
  padding-inline-start: 15px
}
.footer .warning ul li {
      list-style-type: decimal;
      font-family: MontSerrat-Light;
    font-size: 13px;
    color: #9DA2B9;
}
.footer .footer-logo {
  font-family: MontSerrat-SemiBold;
    font-size: 18px;
    color: #fff;

}
</style>
