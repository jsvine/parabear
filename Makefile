SHELL="/bin/bash"
default:
	@echo "No default target."

bookmarklet:
	uglifyjs bookmarklet.js | cat <(echo -n "javascript:") - > bookmarklet.min.js
