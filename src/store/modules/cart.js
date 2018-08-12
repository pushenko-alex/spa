export default {
    namespaced: true,

	state: {
		products: []
	},
	getters: {
		products(state){
			return state.products;
		},
		totalCount(state) {
			/*Расчет общего кол-ва товаров в корзине */

            let total = 0;
            let i = state.products.length;
            while (i--) {
            	total += state.products[i].count;
				state.products[i].sum = state.products[i].count*state.products[i].price;
            }
			return total;
		},
		totalPrice(state){
			/*Расчет общей суммы товаров в корзине */

			let total = 0;
			for(let i = 0, len = state.products.length;  i<len; i++){
				total += state.products[i].sum;
			}
			return total;
		}
	},

	mutations: {
		add(state, product) {
			/*Добавить товар в корзину если его нет, если есть - накрутить счетчик +1*/
            const index = state.products.findIndex((subProduct) => {
                return subProduct.id_product === product.id_product;
            });

            if (index === -1) {
                state.products = [{
                    ...product
                }, ...state.products];
            } else {
                state.products[index].count += 1;
            }
        },

		removeFromCart(state, product) {
			/*Удалить товар из корзины*/

            const index = state.products.findIndex((subProduct) => {
                return subProduct.id_product === product.id_product;
            });
            
            state.products = state.products.filter((product) => {
                return product !== state.products[index];
            });
        },

		removeAll(state) {
			/*Удалить все товары из корзины*/

			state.products = [];
        },

		minus(state, product) {
			/*Уменьшить кол-во товара на 1*/

            const index = state.products.findIndex((subProduct) => {
                return subProduct.id_product === product.id_product;
            });

            if (index === -1 || state.products[index].count <= 1) {
                return;
            }

            state.products[index].count -= 1;
        },

		onInput(state, payload) {
			/* Форма ввода произвольного кол-ва товара*/
			
			const index = state.products.findIndex((product) => {
                return product.id_product === payload.product.id_product;
			});
			
			state.products[index].count = Number(payload.value);
			if(isNaN(state.products[index].count) || state.products[index].count === 0){
				state.products[index].count = 1;
			}
			
							
		}
	},
	actions: {
		add(store, product) {
			store.commit('add', product);
		},
		removeFromCart(store, product) {
			store.commit('removeFromCart', product);
		},
		removeAll(store) {
			store.commit('removeAll');
		},
		minus(store, product) {
			store.commit('minus', product);
		}
	}
};
