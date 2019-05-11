<template>
	<div class="router-link">
		<router-link :to="link">{{ text }}</router-link>
		<router-link to="/">close</router-link>
	</div>
</template>

<script>
    export default {
        name: 'RoutesLink',
	    props: {
            text: String,
		    link: String
	    },
    };
</script>

<!-- Styles -->
<style scoped lang="scss" src="./RoutesLink.scss"></style>