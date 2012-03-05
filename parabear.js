(function () {
	var parabear = function (d, config) {
		config = config || {};
		// Get all <p> elements.
		var ps = d.getElementsByTagName("p");
		var kid_count = {};
		var i, id, parent_node;
		// Loop over those elements.
		for (i = 0; i < ps.length; i++) {
			parent_node = ps[i].parentNode;
			// Assign each parent node unique id, if it doesn"t have one already.
			id = parent_node.parabear_id = parent_node.parabear_id || i;
			// Credit the parent_node with an additional child.
			kid_count[id] = ++kid_count[id] || 1;
		}
		// Find the parent_node with the most <p>-tag children.
		var kid_max = 0;
		var top_parent;
		for (id in kid_count) {
			if (kid_count[id] > kid_max) {
				kid_max = kid_count[id];
				top_parent = ps[id].parentNode;
			}	
		}
		// Find all of that parent node"s chidren of the tagNames indicated
		// in the RegExp below.
		var keepers = [];
		var tagRegex = config.tagRegex || /^(?:p|blockquote|ul|ol|li|hr|h1|h2|h3|h4|h6)$/i;
		var kids = top_parent.childNodes;
		for (i = 0; i < kids.length; i++) {
			if (tagRegex.test(kids[i].tagName)) keepers.push(kids[i]);
		}
		return keepers;
	};
	if (this.module && module.exports) {
		module.exports = parabear;
	} else {
		this.parabear = parabear;	
	}
}).call(this);
