function Parent() {
	this.nation = 'China';
}

Parent.prototype.callNation = function() {
	alert(this.nation);
};

function extend(Parent, Child) {
	function Fn() {
		Parent.call(this);
	}
	Fn.prototype = Object.create(Parent.prototype);

	Child.prototype = new Fn();
	Child.prototype.constructor = Child;
}

extend(Parent, Child);

function Child() {
	this.name = 'tom';
}
Child.prototype.callName = function() {
	alert(this.name);
};

/**
 * Parent.prototype没有nation属性
 * new Parent()实例上具有nation属性
 * Child.prototype具有nation属性
 */
