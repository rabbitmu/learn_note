import Vue from 'vue';
import component from 'components/Toast';

const ToastConstructor = Vue.extend(component);
const canToast = true; // 控制点击次数

const getInstance = () => {
	return new ToastConstructor({
		el: document.createElement('div')
	});
};

const pushInstance = (instance) => {
	toastPool.push(instance);
};

const removeDom = event => {
	if(event.target.parentNode) {
		event.target.parentNode.removeChild(event.target);
	}
}

ToastConstructor.prototype.close = function() {
	this.visible = false;
	this.$el.addEventListener('transitionend', removeDom);
};

const Toast = function(options = '') {
	// 控制点击次数
	if(!canToast) return;
	canToast = false;

	const instance = getInstance();
	instance.message = typeof options === 'string' ? options : options.message;

	document.body.appendChild(instance.$el);
	Vue.nextTick(function() {
		instance.$el.removeEventListener('transitionend', removeDom);
		instance.visible = true;

		clearTimeout(timer);
		let timer = setTimeout(() => {
			instance.close();
			canToast = true;
		}, 2000);
	});
};

export default Toast;
