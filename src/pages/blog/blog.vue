<template>
  <div id="blogPage">
    <Navbar/>
    <div class="parent text-center">
      <h2 class="my-5 f-semiBlack">Blog</h2>
    </div>

    <b-container class="mb-5">
      <b-row>
        <b-col md="8">
          <div class="article">
            <div class="d-flex  mb-4">
              <h6 class="f-green">Semua Artikel</h6>
              <hr class="d-md-block d-none" style="border-top: 3px solid rgb(16, 179, 130) !important;
              width: 80%;
              margin-top: 9px;">
              <hr class="d-md-none d-block" style="border-top: 3px solid rgb(16, 179, 130) !important;
              width: 60%;
              margin-top: 9px;">
            </div>

            <b-row class="list-arc mb-5" v-for="(arc, i) in article" v-bind:key="i">
              <b-col md="5">
                <img class="w-100" :src="arc.img" alt="">
              </b-col>
              <b-col md="7 mt-4 mt-md-0">
                <div>
                  <h5 class="f-semiBlack">{{arc.title.length > 65 ?  arc.title.substring(0,65)+'...' : arc.title}}</h5>
                  <div class="d-flex mb-2 f-gray">
                    <small class="mr-2">{{arc.date}}</small>
                    <small>• {{arc.visit}} dilihat</small>
                  </div>
                  <p  class="f-semiBlack">{{arc.desc.length > 95 ?  arc.desc.substring(0,95)+'...' : arc.desc}}</p>
                  <a :href="'/blog/'+ arc.id">Baca Selengkapnya</a>
                </div>
              </b-col>
            </b-row>

             <div class="mt-5 w-50 d-flex mx-auto">
            <b-button block variant="outline-success text-center">Lihat Lebih Banyak</b-button>
          </div>
          </div>
        </b-col>
        <b-col md="4 mt-5 mt-md-0">
          <div class="version">
            <div class="d-flex">
              <h6 class="f-green">Pembaruan Produk</h6>
              <hr style="border-top: 3px solid rgb(16, 179, 130) !important;
              width: 50%;
              margin-top: 9px;">
            </div>
            <ul>
              <li class="f-semiBlack" v-for="(ver, i) in version" v-bind:key="i">{{ver}}</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
  </div>
</template>

<script src="./blog.js">
</script>

<style>
  #blogPage .parent h2{
    /* height: 30vh; */
    font-family: MontSerrat-Regular;
  }
.article .list-arc h5{
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
.version ul li {
    font-size: 14px;
  font-family: MontSerrat-Regular;
  line-height: 29px;
}
</style>
