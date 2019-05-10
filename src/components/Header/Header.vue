<template>
    <header class="header">
        <h1 class="header__title">Oleg Savenok</h1>
	    <h2 class="header__logo">o.sa.</h2>
	    
	    <nav class="header__nav">
		    <router-link class="header__nav__item" to="/about">about</router-link>
	    </nav>
    </header>
</template>

<script>
	export default {
	    name: 'HeaderApp',
	};
</script>

<!-- Styles -->