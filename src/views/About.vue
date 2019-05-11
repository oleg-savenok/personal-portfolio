<template>
    <Page>
	    <SmoothScroll>
		    <br>
		    <br>
		    <h3>About page</h3>
		    <br>
		    <img src="https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
		    <br>
		    <br>
		    <br>
		    <br>
	    </SmoothScroll>
    </Page>
</template>

<script>
	import Page from '@/components/Page/Page';
	import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
	
	export default {
	    name: 'About',
		components: {
	        Page,
	        SmoothScroll
        }
	}
</script>