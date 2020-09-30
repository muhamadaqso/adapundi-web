<template>
  <div id="complaintsPage">
    <Navbar/>
    <b-container>
      <div class="text-center my-5 pb-4">
        <h2 class="mb-5 f-semiBlack">Pengaduan Layanan Pengguna Konsumen</h2>
        <p class="f-semiBlack" style="line-height: 28px;
            font-family: MontSerrat-Light;">Layanan Pengaduan AdaPundi ini dibentuk dan disusun berdasarkan Peraturan Otoritas Jasa Keuangan No.18/POJK.07/2018 tentang Layanan Pengaduan Konsumen di Sektor Jasa Keuangan dan Surat Edaran Otoritas Jasa Keuangan No. 2/SEOJK.07/2014 tentang Pelayanan dan Penyelesaian Pengaduan Konsumen pada Pelaku Usaha Jasa Keuangan.</p>
        <p class="f-semiBlack" style="line-height: 28px;
            font-family: MontSerrat-Light;">AdaPundi berkomitmen untuk menjalin hubungan baik dengan Konsumen layanan kami dan juga memberikan layanan pengaduan terbaik dengan menerapkan prinsip transparansi dan terbuka dalam memberikan informasi kepada Konsumen.</p>
      </div>
    </b-container>

    <b-container class="benefit">
      <b-row class="align-items-center h-100">
        <b-col md="6">
          <img class="w-100" src="@/assets/img/comp1.png" alt="">
        </b-col>
        <b-col md="6">
            <b-row>
              <b-col md="2 text-center">
                <span>1</span>
              </b-col>
              <b-col md="10">
                <h6>Penerimaan Pengaduan</h6>
                <p>Setiap pengguna AdaPundi dapat menyampaikan pengaduannya melalui beberapa sarana yang telah kami sediakan baik secara lisan seperti telepon ke hotline kami di 021-50860666 atau mendatangi langsung kantor operasional AdaPundi yang tertera pada halaman website. Selain itu pengguna AdaPundi juga dapat menyampaikan pengaduannya secara lisan melalui Live Chat Aplikasi, Email ke <a style="color:#10B382 !important;" href="mailto:cs@AdaPundi.com">cs@AdaPundi.com</a>, maupun media social kami yaitu Facebook: @AdaPundiOfficial, Instagram: @AdaPundiOfficial, Twitter: @AdaPundi.</p>
              </b-col>
            </b-row>
        </b-col>
      </b-row>

      <b-row class="align-items-center h-100">
        <b-col md="6">
            <b-row>
              <b-col md="2 text-center">
                <span>2</span>
              </b-col>
              <b-col md="10">
                <h6>Penanganan Pengaduan</h6>
                <p>Setelah pengaduan pelanggan kami terima, tim customer service kami akan memberikan respon dan nomor laporan aduan pelanggan (jika melibatkan divisi internal lainnya) pada hari kerja senin-jumat pukul 08:00 hingga 20:00 dan untuk sabtu-minggu pukul 08:00 hingga 17:00. Tim customer service kami akan memberikan respons selambat-lambatnya 5 hari kerja setelah aduan diterima.</p>
              </b-col>
            </b-row>
        </b-col>
        <b-col md="6">
          <img class="w-100" src="@/assets/img/comp2.png" alt="">
        </b-col>
      </b-row>

      <b-row class="align-items-center h-100">
        <b-col md="6">
          <img class="w-100" src="@/assets/img/comp3.png" alt="">
        </b-col>
        <b-col md="6">
            <b-row>
              <b-col md="2 text-center">
                <span>3</span>
              </b-col>
              <b-col md="10">
                <h6 class="f-semiBlack" style="font-family: MontSerrat-Regular;">Penyelesaian Pengaduan</h6>
                <p>Tim customer service AdaPundi dapat secara langsung melakukan
                    penyelesaian terhadap aduan Konsumen apabila data dan informasi yang
                    diterima telah akurat dan benar. Terhadap aduan tersebut dapat diberikan
                    solusi secara langsung tanpa melibatkan divisi internal lainnya sejak
                    pengaduan diterima. Jika pengaduan melibatkan divisi internal lainnya atau pihak ketiga, AdaPundi membutuhkan waktu penyelesaian pengaduan Konsumen selambat-lambatnya dalam jangka waktu 20 (dua puluh) hari kerja atau lebih tergantung pada tingkat kompleksitas pengaduan Konsumen.</p>
              </b-col>
            </b-row>
        </b-col>
      </b-row>

      <b-row class="align-items-center h-100">
        <b-col md="6">
            <b-row>
              <b-col md="2 text-center">
                <span>4</span>
              </b-col>
              <b-col md="10">
                <h6>Penanganan Pengaduan</h6>
                <p>AdaPundi secara berkala melakukan Pelaporan Pengaduan
                Konsumen ke Otoritas Jasa Keuangan sebagai bentuk
                pertanggungjawaban penyedia layanan pengaduan konsumen disertai dengan status pengaduan, jenis pengaduan dan penyebab pengaduan untuk periode bulanan dan triwulan yang formatnya sudah ditentukan oleh Otoritas Jasa Keuangan.</p>
              </b-col>
            </b-row>
        </b-col>
        <b-col md="6">
          <img class="w-100" src="@/assets/img/comp4.png" alt="">
        </b-col>
      </b-row>
    </b-container>


    <Footer/>
  </div>
</template>

<script src="./complaints.js">
</script>

<style>
.benefit span {
    text-align: center;
    background: linear-gradient(153deg, rgba(57,229,97,1) 0%, rgba(57,229,97,1) 30%, rgba(16,179,130,1) 100%) !important;
    padding: 8px 15px;
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
