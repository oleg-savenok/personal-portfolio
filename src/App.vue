<template>
    <div class="app theme--dark">
        <Header />
        <router-view />
	    <Footer />
    </div>
</template>

<script>
    import Header from '@/components/Header/Header';
    import Footer from '@/components/Footer/Footer';

    export default {
	    components: {
            Header,
		    Footer
        }
    };
</script>

<!-- Styles -->
<style lang="scss" src="./App.scss"></style>
