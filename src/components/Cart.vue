<template>
	<div>
		<div class="title">
			<h1>Корзина</h1>
			<div>
				<div>В корзине <span style="color:green; font-size: 20px">{{cnt}}</span>шт. товаров</div>
				
			</div>
		</div>
		
		<hr>
		<div v-if="empty"
			 class="alert alert-warning">
			Ваша корзина пуста
		</div>
		<template v-else>
			<table class="table table-bordered table-hover">
				<thead>
					<tr>
						<th>Наимнование</th>
						<th>Цена 1шт.</th>
						<th>Кол-во</th>
						<th>Сумма</th>
						<th>Действие</th>
					</tr>
				</thead>

				<tbody>
					<tr v-for="product in productsInCart">
						<td>{{ product.title }}</td>
						<td>{{ product.price }} руб.</td>
						<td style="display: flex;">
							<span>{{ product.count }}</span>
							<button class="btn btn-warning" 
								@click="minus(product)"
						>-1</button>
						<button class="btn btn-success" 
								@click="plus(product)">+1</button>
								<span>x</span>
								 <input type="text" 
										:value="' ' + product.count"
										@input="onInput($event, product)"
										>
						</td>
						<td style="font-size:18px">{{ product.sum }} руб.</td>
						<td><button class="btn btn-danger"
									@click="remove(product)"
						>
					Х
				</button></td>
					</tr>
				</tbody>	
			</table>
			<div class="bottom">
				
				<button	class="btn btn-danger"
					@click="removeAll"
					>Удалить всё
				
				</button>
				<div>Всего <span style="color:red; font-size: 25px">{{totalPrice}}</span> руб.</div>
				
			</div>
			
			
		</template>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';

	export default {
		computed: {
			...mapGetters('cart', {
				productsInCart: 'products',
				totalPrice: 'totalPrice',
				cnt:'totalCount'
            }),

			empty() {
				return this.productsInCart.length === 0;
            },
	    },

		methods: {
			...mapActions('cart', {
				remove: 'removeFromCart',
				removeAll:'removeAll',
				plus:'add',
				minus:'minus'
            }),

			onInput(e, product) {
				this.$store.commit('cart/onInput', {
					value: e.target.value,
					product: {
                        ...product
                    }
				});
			}
        },
}
</script>
<style scoped>
	.title{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title div {
		font-size: 20px;
	}
	button {
		margin: 5px;

	}
	span {
		font-size: 15px;
		margin-right: 10px;
		margin-top:10px;
	}
	input{
		width: 40px;
		height: 42px;
		border-radius: 5px;
	}
	.bottom{
		display: flex;
	}
	.bottom button {
		margin-right: 10px; 
	}
</style>
