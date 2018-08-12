<template>
	<div>
		<header>
			<div class="container">
				<div class="row flex-content">
					
				<h1>Интернет-магазин</h1>
				<router-link :to="menuList[1].url"> 
					<a class="cart"
					><i class="fas fa-cart-plus"></i> 
					<div class="count">{{ count }}</div>
					</a>
					
				</router-link>
						
					
				</div>
				<hr>
			</div>
		</header>
		<section>
			<div class="container">
				<div class="row">
					<div class="col col-sm-3 menu">
						<ul class="list-group">
							<router-link v-for="(item, index) in menuList"
										 :key="index"
										 :to="item.url"
										 tag="li"
										 class="list-group-item"
										 active-class="active"
							>
								<a>{{ item.text }}</a>
							</router-link>
						</ul>
					</div>
					<div class="col col-sm-9">
						<transition name="slide" mode="out-in">
							<router-view></router-view>
						</transition>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters('menu', {
				menuList: 'items'
			}),
			...mapGetters('cart', {
				count: 'totalCount'

			})
		}
	}
</script>

<style>
	.menu{
		border-right: 1px solid #ddd;
	}

	.list-group-item{
		transition: background 0.3s, color 0.3s;
	}

	.list-group-item a{
		text-decoration: none;
		display:block;
	}

	.list-group-item.active a{
		color: inherit;
	}

	.slide-enter{
		
	}

	.slide-enter-active{
		animation: slideIn 0.5s;
	}

	.slide-enter-to{
		
	}

	.slide-leave{
		
	}

	.slide-leave-active{
		animation: slideOut 0.5s;
	}

	.slide-leave-to{
		
	}
	.flex-content{
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.cart{
		display:block;
		position:relative;
	}
	.count {
		position:absolute;
		color: #fff;
		top: -8px;
		left: 40px;
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background-color: red;
		font-size: 20px;
		font-weight: 900;
		text-align:center;
		
	}
	.fa-cart-plus {
		font-size: 50px;
		color: grey;

	}

	@keyframes slideIn{
		from{transform: rotateY(90deg);}
		to{transform: rotateY(0deg);}
	}

	@keyframes slideOut{
		from{transform: rotateY(0deg);}
		to{transform: rotateY(90deg);}
	}
</style>