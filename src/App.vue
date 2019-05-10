<template>
    <div class="app theme--dark">
        <Header />
        <router-view />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header/Header';

    export default {
	    components: {
            Header
        }
    };
</script>

<!-- Styles -->
<style lang="scss" src="./App.scss"></style>
