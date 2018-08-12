<template>
	<div>
		<h1>{{ product.title }}</h1>
		<div class="product">
			<div>
		 <img :src="'../../images/'+ product.image" alt="">
		<button @click="addToCart(product)"
				class="btn btn-primary"
						>
					В корзину
				</button>
		</div>
		<div class="price">
			Цена {{ product.price }} руб.

		</div>
			
		</div>
		
		<router-link class="link" :to="{name: 'products'}">Back to products</router-link>
	</div>
</template>

<script>
import {mapActions} from 'vuex';

	export default {
		computed: {
			id(){
				return this.$route.params.id;
			},
			product(){
				return this.$store.getters['products/item'](this.id);
			}
		},
		methods: {
			...mapActions('cart', {
				addToCart: 'add'
			})
		}
	}
</script>
<style scoped>
	.product{
		display: flex;
		margin-bottom: 20px; 
	}
	.price{
		font-size: 30px;
		color: green;
		margin-left: 40px;
		margin-top: 10px;

	}
	.link{
		font-size: 18px;

	}
	img {
		height: 200px;
		display: block;
	}
	button {
		margin-top: 15px;
	}
</style>