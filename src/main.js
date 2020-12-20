import Vue from 'vue';
import App from './App.vue';
import './assets/main.css';

Vue.config.productionTip = false;

window.addEventListener('load', () => {
	const elements = document.querySelectorAll('.main-video');
	elements.forEach((el) => {
		new Vue({
			render: (h) =>
				h(App, {
					props: {
						...el.dataset
					}
				})
		}).$mount(el);
	});
});
