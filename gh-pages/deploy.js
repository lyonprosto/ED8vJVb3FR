const ghPages = require('gh-pages');

ghPages.publish('dist', {
	dotfiles: true,
	history: false,
	message: 'Deploy ed8vjvb3fr Application',
}, (err) => {
	console.error(err);
});
