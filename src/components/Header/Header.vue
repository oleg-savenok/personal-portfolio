<template>
    <header class="header">
        <h1 class="header__title">Oleg Savenok</h1>
	    <h2 class="header__logo">
		    <router-link to="/">o.sa.</router-link>
	    </h2>
	    
	    <nav class="header__nav">
		    <RoutesLink class="header__nav__item" link="/about" text="about" />
	    </nav>
    </header>
</template>

<script>
    import RoutesLink from '@/components/RoutesLink/RoutesLink';
	
	export default {
	    name: 'Header',
		components: {
            RoutesLink
		}
	};
</script>

<!-- Styles -->
<style lang="scss" src="./Header.scss"></style>