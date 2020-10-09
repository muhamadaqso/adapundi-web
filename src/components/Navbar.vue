<template>
    <div :class="{'fixed-top': $route.name == 'Home', 'sticky-top': $route.name !== 'Home'}">
    <b-navbar id="Navgeneral" class="py-3" toggleable="lg" :class="{'bg-white': $route.name !== 'Home'}">
        <b-container class="v2">
            <b-navbar-brand href="#" @click="$router.push({name:'Home'})">
                <img src="@/assets/img/logo.png" alt="Kitten" width="52" height="52">
                <img src="@/assets/img/adapundi-word.png" class="ml-2" alt="Kitten" width="99" height="23">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" class="mx-auto" @click="$router.push({name:'Home'})" :class="{activeNav: $route.name == 'Home'}">Home</b-nav-item>
                    <b-nav-item href="#" class="mx-auto" @click="$router.push({name:'Loans'})" :class="{activeNav: $route.name == 'Loans'}">Pinjaman</b-nav-item>
                    <b-nav-item href="#" class="mx-auto" @click="$router.push({name:'Invest'})" :class="{activeNav: $route.name == 'Invest'}">Investasi</b-nav-item>
                    <b-nav-item href="#" class="mx-auto" @click="$router.push({name:'AboutUs'})" :class="{activeNav: $route.name == 'AboutUs'}">Tentang Kami</b-nav-item>
                    <b-nav-item href="#" class="mx-auto" @click="$router.push({name:'Blog'})" :class="{activeNav: $route.name == 'Blog' || $route.name == 'BlogDetail'}">Blog</b-nav-item>
                    <b-nav-item href="#" class="mx-auto" @click="$router.push({name:'Complaints'})" :class="{activeNav: $route.name == 'Complaints'}">Layanan Pengaduan</b-nav-item>
                    <b-nav-item href="https://www.adapundi.com/#/help" class="mx-auto">FAQ</b-nav-item>
                    <b-nav-item href="#" class="mx-auto"><button class="round btn" type="button" id="buttonTKB">TKB90=98.82%</button></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
      return {
      }
    },
    mounted()
    {
        $(window).scroll(function() {
          if ($(document).scrollTop() > 90) {
              $('#Navgeneral').addClass('shadow-sm bg-white');
              // if(this.$router.history.current.path == 'Home'){
              //   $('#buttonTKB').addClass('btn btn-outline-warning');
              //   $('#buttonTKB').removeClass('btn btn-outline-light');
              // }
          } else {
              $('#Navgeneral').removeClass('shadow-sm bg-white');
              // if(this.$router.history.current.path == 'Home'){
              //   $('#buttonTKB').removeClass('btn btn-outline-warning');
              //   $('#buttonTKB').addClass('btn btn-outline-light');
              // }
          }
        });
    },
    methods : {
    }
}
</script>

<style>

#Navgeneral {
  -webkit-transition: background-color 1s ease-out;
  -moz-transition: background-color 1s ease-out;
  -o-transition: background-color 1s ease-out;
  transition: background-color 1s ease-out;
}
.nav-item {
    display: flex;
}
.fixed-top .nav-item a, .fixed-top a.navbar-brand {
  color: white !important;
}
.fixed-top .nav-item button.btn {
  color: #fff;
  border: 1px solid #fff;
}
.fixed-top .shadow-sm.bg-white .nav-item button.btn, .sticky-top .nav-item button.btn {
  color: #FF7227;
  border: 1px solid #FF7227;
}
.fixed-top .shadow-sm.bg-white .nav-item a, .fixed-top .shadow-sm.bg-white a.navbar-brand {
  color: black !important;
}
.nav-item.activeNav a, .fixed-top .shadow-sm.bg-white .nav-item.activeNav a{
   color: #10B382 !important;
 }
 .nav-item a {
        align-self: center;
        padding-right: 1.2rem !important;
        padding-left: 1.2rem !important;
        font-family: MontSerrat-Regular;
        color: black !important;
        font-size: 13px;
    }
    .nav-item a button {
      font-size: 12px;
      font-family: MontSerrat-Regular;
    }
  a.navbar-brand {
    font-family: MontSerrat-SemiBold;
    font-size: 18px;
    padding-left: 80px;
  }
</style>


