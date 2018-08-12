<template>
	<div>
		<h1>Продукты</h1>
		<div class="row">
			<div class="col col-sm-4 product" 
			     v-for="product in products">
			     <img :src="'./images/' + product.image" alt="">
			    <router-link tag="h3" :to="'/products/' + product.id_product">
				    <a>{{ product.title }}</a>
				</router-link>
				<div>{{ product.price }} руб.</div>
				<button @click="addToCart(product)"
						class="btn btn-primary"
						>
					В корзину
				</button>
				
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		
		computed: {
			...mapGetters('products', {
				products: 'items'
            }),

			...mapGetters('cart', {
				inCart: 'products'
			})
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add'
			})
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
	img {
		height: 100px;
	}
	.product{
		margin-bottom: 5px;
	}
</style>
