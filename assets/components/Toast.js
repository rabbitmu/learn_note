import 'style/toast.scss';

export default {
	name: 'Toast',
	props: {
		message: String
	},
	data() {
		return {
			visible: false
		};
	},
	render(h) {
		const { message, visible } = this;

		return (
			<div
				class="toast"
				style={ { opacity: visible ? 1 : 0 } }>{ message }</div>
		);
	}
};
