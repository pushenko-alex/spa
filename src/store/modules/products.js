export default {
	namespaced: true,
	state: {
		items: getProducts()
	},
	getters: {
		items(state){
			return state.items;
		},
		itemsMap(state){
			/* Присвоение каждому товару ключ его id для вывода одного товара*/

			let itemsMap = {};

			for(let i = 0, length = state.items.length; i < length; i++){
				let product = state.items[i];
				itemsMap[product.id_product] = product;
			}

			return itemsMap;
		},
		item: (state, getters) => (id) => {
			return getters.itemsMap[id];
		}
	}
}

function getProducts(){  /*Эмуляция ответа из базы в JSON*/
	return [
		{
			id_product: 1,
			count: 1,
			sum: null,
			title: 'Iphone 5',
			price: 20000,
			image:"iphone5.png"
		},
		{
			id_product: 2,
			count: 1,
			sum: null,
			title: 'Iphone 6',
			price: 25000,
			image:"iphone6.jpg"
		},
		{
			id_product: 3,
			count: 1,
			sum: null,
			title: 'Iphone 7',
			price: 30000,
			image:"iphone7.jpg"
		},
		{
			id_product: 4,
			count: 1,
			sum: null,
			title: 'Iphone 4',
			price: 10000,
			image:"iphone4.jpg"
		},
		{
			id_product: 5,
			count: 1,
			sum: null,
			title: 'Xiaomi',
			price: 12000,
			image:"xiaomi.png"
		},
		{
			id_product: 6,
			count: 1,
			sum: null,
			title: 'Lenovo',
			price: 8000,
			image:"lenovo.jpg"
		}
	]
}