export default {
	namespaced: true,
	state: {
		items: [
			{
				url: '/products',
				text: 'Все продукты'
			},
			{
				url: '/cart',
				text: 'Корзина'
			}
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};