<template>
	<Page>
	    <SmoothScroll>
		    <br>
		    <br>
		    <h3>Contact page</h3>
		    <br>
		    <img src="https://images.pexels.com/photos/2067468/pexels-photo-2067468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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
        name: 'Contact',
        components: {
            Page,
            SmoothScroll
        }
    }
</script>