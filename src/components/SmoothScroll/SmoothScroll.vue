<template>
	<div class="smooth-scroll">
		<slot></slot>
	</div>
</template>

<script>
	import Scrollbar from 'smooth-scrollbar';
    import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
    
    // Allow used overscroll plugin
    Scrollbar.use(OverscrollPlugin);
	
	export default {
	    name: 'SmoothScroll',
		mounted: function() {
            let target = document.getElementsByClassName('smooth-scroll')[0];
            
            if (target) {
                // Init smooth scroll
                const scrollbar = Scrollbar.init(target, {
                    damping: 0.05,
                    renderByPixels: false,
                });
    
                // Setting up overscroll plugin
                scrollbar.updatePluginOptions('overscroll', {
                    effect: 'bounce',
                    damping: 0.1,
                    maxOverscroll: 60,
                });
            }
        },
        beforeDestroy: function() {
            Scrollbar.destroyAll();
        }
	}
</script>

<!-- Styles -->
<style lang="scss" src="./SmoothScroll.scss"></style>