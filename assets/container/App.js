import store from 'store/store';
import { mapState } from 'vuex';
import Toast from 'utils/Toast';
import 'utils/question';

export default {
	name: 'App',
	store,
	computed: mapState({
		name: state => state.name
	}),
	methods: {
		clickHandler() {
			Toast('message');
		}
	},
	render(h) { // eslint-disable-line no-unused-vars
		const { name,
				clickHandler } = this;

		return (
			<div></div>
		);
	}
};
