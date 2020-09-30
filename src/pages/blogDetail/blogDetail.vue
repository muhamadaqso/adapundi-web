<template>
  <div id="blogPage">
    <Navbar/>
    <div class="mt-5 container parent">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>

    <b-container class="mb-5">
      <b-row>
        <b-col md="8">
          <div class="article">
            <b-row class="list-arc mb-5">
              <b-col md="12">
                <img class="w-100" src="@/assets/img/videoDetail.png" alt="">
              </b-col>
              <b-col md="12">
                <div>
                  <h3 class="my-4 f-semiBlack">Berdiskusi tentang industri keuangan di Universitas Negeri Gorontalo</h3>
                  <div class="d-flex mb-2 f-gray">
                    <small class="mr-2">04 Agustus 2020</small>
                    <small>• 125 dilihat</small>
                  </div>
                  <p  class="f-semiBlack" style="line-height: 22px;">Dari berbagai kegiatan sosialisasi yang AdaPundi lakukan ke berbagai daerah di Indonesia, Labuan Bajo adalah salah satu lokasi yang paling menarik, tidak lain adalah karena keindahan destinasi pariwisatanya yang terkenal hingga ke berbagai pelosok dunia...
                    <br>
                    <br>
                    Bertempat di Politeknik El Bajo Commodus, NTT; tim AdaPundi dengan sejumlah pelaku bisnis FinTech lainnya, menyapa para mahasiswa & mahasiswi di kampus ini. Bangunan kampus terasa modern & terawat dengan baik, menandakan keseriusan orang-orang di dalamnya untuk memajukan pendidikan di NTT.
                    <br>
                    <br>
                    Hasilnya pun terlihat...
                    <br>
                    <br>

                    Dari sejumlah pertanyaan yg dilempar oleh pembicara, semuanya dapat dijawab dengan baik oleh peserta. Berbagai pertanyaan yang peserta ajukan pun menandakan bahwa banyak dari mereka yang rajin membaca referensi terkini.
                    <br>
                    <br>

                    Dengan kekuatan utama di komoditas dunia pariwisata, masih banyak hal di Labuan Bajo yang dapat digarap oleh para pelaku kewirausahaan dan para generasi mudanya.
                    <br>
                    <br>

                    AdaPundi sebagai salah satu entitas bisnis FinTech yang peduli pada ketahanan ekonomi Tanah Air, tergerak untuk terus menyebarkan kabar baik seputar perkembangan teknologi finansial dan inklusi keuangan, ke seluruh penjuru Indonesia...</p>
                </div>
              </b-col>
            </b-row>


          </div>
        </b-col>
        <b-col md="4">
          <div class="article">
            <div class="d-flex mb-4">
              <h6 class="f-green">Artikel Terpopuler</h6>
              <hr style="border-top: 3px solid rgb(16, 179, 130) !important;
              width: 50%;
              margin-top: 9px;">
            </div>
             <b-row class="list-arc mb-3" v-for="(arc, i) in article" v-bind:key="i">
              <b-col md="5">
                <img class="w-100" :src="arc.img" alt="">
              </b-col>
              <b-col md="7">
                <div class="cursor-pointer" @click="$router.push('/blog/'+ arc.id)">
                  <p class="f-semiBlack">{{arc.title.length > 45 ?  arc.title.substring(0,45)+'...' : arc.title}}</p>
                  <div class="d-flex mb-2 f-gray">
                    <small class="mr-2">{{arc.date}}</small>
                  </div>
                </div>
              </b-col>
            </b-row>

            <div class="mt-5 w-75 d-flex mx-auto">
            <b-button block variant="outline-success text-center">Lihat Lebih Banyak</b-button>
          </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
  </div>
</template>

<script src="./blogDetail.js">
</script>

<style>
  #blogPage .parent h2{
    /* height: 30vh; */
    font-family: MontSerrat-Regular;
  }
.article .list-arc h5, .article h3{
    font-family: MontSerrat-Regular;
}
.article .list-arc small, .article .list-arc p{
    font-family: MontSerrat-Light;
}
.article .list-arc p{
    font-family: MontSerrat-Light;
    font-size: 14px;
}
.article .list-arc a{
  color: #10B382 !important;
  font-family: MontSerrat-Light;
    font-size: 14px;
}
.breadcrumb {
  background-color: #fff;
  padding-left: 0;
  margin-bottom: 0;
}
li.breadcrumb-item a {
  color: #4E5263 !important;
  font-family: MontSerrat-Light;
    font-size: 13px;
}
li.breadcrumb-item.active span {
  color: #9DA2B9 !important;
  font-family: MontSerrat-Light;
    font-size: 13px;
}
.breadcrumb-item + .breadcrumb-item::before {
      content: ">";
      font-size: 12px;
}
</style>
