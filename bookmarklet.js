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

(function () {
	var d = document;
	var b = d.body;
	var c = function (tag) { return d.createElement.call(d, tag) } 
	if (!this.parabear_appended) {
		// Create and append the stylesheet
		var style = c("style");
		style.type = "text/css";
		style.innerHTML = "body.parabear { background: #FFF } body.parabear > * { display: none !important } .parabear-keepers { display: none; } body.parabear .parabear-keepers { display: block !important; width: 500px; margin: 20px auto; } .parabear-keepers * {font-size: 18px !important; line-height: 26px !important; font-family: Georgia, serif !important; text-align: justify !important; color: #333 !important; } .parabear-keepers a { color: darkBlue !important; } .parabear-keepers > * { margin: 20px 0; } .parabear-keepers h1 { font-size: 29px !important; line-height: 29px !important; font-weight: bold; text-align: left; } .parabear-keepers h2, .parabear-keepers h3 { font-weight: bold } .parabear-keepers blockquote { margin: 0 40px } @media screen and (max-width: 550px) { body.parabear .parabear-keepers { width: 90%; }}";
		b.appendChild(style);

		// Use the parabear algorithm to select the
		// the elements we want to keep visible.
		var keepers = parabear(d);

		// Create a "keepers" div
		var keeper_div = c("div");
		keeper_div.className = "parabear-keepers";
		
		// Add the d"s title as an h1 element.
		var title = c("h1");
		title.innerHTML = d.title; 
		keeper_div.appendChild(title);

		// Add clones of our keepers to the keeper div.
		for (var i = 0; i < keepers.length; i++) {
			keeper_div.appendChild(keepers[i].cloneNode(true));
		}

		b.appendChild(keeper_div);
		this.parabear_appended = true;
	}

	// Toggle "parabear" class on body element.
	if (b.className.indexOf(" parabear") > -1) {
		b.className = b.className.replace(" parabear", "");
	} else {
		b.className += " parabear";
	}
}).call(this);
