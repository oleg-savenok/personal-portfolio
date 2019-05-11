<template>
	<div class="router-link">
		<router-link :to="link">{{ text }}</router-link>
		<router-link to="/">
			<span>c</span>
			<span>l</span>
			<span>o</span>
			<span>s</span>
			<span>e</span>
		</router-link>
	</div>
</template>

<script>
    export default {
        name: 'RoutesLink',
	    props: {
            text: String,
		    link: String
	    },
	    methods: {
            historyBack: () => {
                history.back();
            }
	    }
    };
</script>

<!-- Styles -->
<style scoped lang="scss" src="./RoutesLink.scss"></style>