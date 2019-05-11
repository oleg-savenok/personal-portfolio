<template>
	<footer class="footer">
		
		<div class="footer__block--left">
			<a href="#" class="footer__block__item--social">be</a>
			<a href="#" class="footer__block__item--social">dr</a>
			<a href="#" class="footer__block__item--social">tw</a>
		</div>
		
		<div class="footer__block--center">
			<p class="footer__block__item">drag or scroll to discover</p>
		</div>
		
		<div class="footer__block--right">
			<RoutesLink class="footer__block__item" link="/contact" text="say hi" />
		</div>
		
	</footer>
</template>

<script>
    import RoutesLink from '@/components/RoutesLink/RoutesLink';
    
    export default {
        name: 'Footer',
	    components: {
            RoutesLink
	    }
    };
</script>

<!-- Styles -->
<style lang="scss" src="./Footer.scss"></style>