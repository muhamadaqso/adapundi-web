<template>
    <div class="sticky-top">
    <b-navbar id="Navgeneral" class="py-3" toggleable="lg" >
        <b-container>
            <b-navbar-brand href="#" @click="$router.push({name:'Home'})">
                <img src="@/assets/img/logo.png" alt="Kitten" width="105" height="30">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#" @click="$router.push({name:'Home'})">Home</b-nav-item>
                    <b-nav-item href="#" @click="$router.push({name:'contact'})">Contact us</b-nav-item>
                    <b-nav-item href="#">Careers</b-nav-item>
                    <b-nav-item href="#" @click="$router.push({name:'About'})">About Us</b-nav-item>
                    <b-nav-item href="#"><b-button variant="primary">Get Free Access</b-button></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</div>
</template>



