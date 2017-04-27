import store from 'store/store';
import { mapState } from 'vuex';
import 'utils/extend';

export default {
	name: 'App',
	store,
	computed: mapState({
		name: state => state.name
	}),
	render(h) { // eslint-disable-line no-unused-vars
		const { name } = this;

		return (
			<div>Hello world</div>
		);
	}
};
