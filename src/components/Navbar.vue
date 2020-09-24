<template>
    <div :class="{'fixed-top': $route.name == 'Home', 'sticky-top': $route.name !== 'Home'}">
    <b-navbar id="Navgeneral" class="py-3" toggleable="lg" :class="{'bg-white': $route.name !== 'Home'}">
        <b-container class="v2">
            <b-navbar-brand href="#" @click="$router.push({name:'Home'})">
                <img src="@/assets/img/logo.png" alt="Kitten" width="52" height="52">
                AdaPundi
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" @click="$router.push({name:'contact'})">Pinjaman</b-nav-item>
                    <b-nav-item href="#">Investasi</b-nav-item>
                    <b-nav-item href="#" @click="$router.push({name:'About'})">Tentang Kami</b-nav-item>
                    <b-nav-item href="#">Investasi</b-nav-item>
                    <b-nav-item href="#">Blog</b-nav-item>
                    <b-nav-item href="#">Layanan Pengaduan</b-nav-item>
                    <b-nav-item href="#">FAQ</b-nav-item>
                    <b-nav-item href="#"><b-button pill variant="outline-warning">TKB90=98.82%</b-button></b-nav-item>
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
          } else {
              $('#Navgeneral').removeClass('shadow-sm bg-white');
          }
        });
    },
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
.fixed-top .shadow-sm.bg-white .nav-item a, .fixed-top .shadow-sm.bg-white a.navbar-brand {
  color: black !important;
}
 .nav-item a {
        align-self: center;
        padding-right: 1.2rem !important;
        padding-left: 1.2rem !important;
        font-family: MontSerrat-Regular;
        color: black !important;
        font-size: 12px;
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


