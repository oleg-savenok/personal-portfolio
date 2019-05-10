<template>
    <header class="header">
        <h1 class="header__title">Oleg Savenok</h1>
	    <h2 class="header__logo">
		    <router-link to="/">o.sa.</router-link>
	    </h2>
	    
	    <nav class="header__nav">
		    <ul class="header__nav__list">
			    <li class="header__nav__list__item">
				    <router-link to="/about">about</router-link>
			    </li>
		    </ul>
	    </nav>
    </header>
</template>

<script>
	export default {
	    name: 'Header',
	};
</script>

<!-- Styles -->
<style lang="scss" src="./Header.scss"></style>