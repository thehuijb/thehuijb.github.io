const markdownIt = require('markdown-it')

module.exports = (eleventyConfig) => {

	// To enable merging of tags
	eleventyConfig.setDataDeepMerge(true)

	// Copy the "assets" directory to the compiled "_site" folder.
	eleventyConfig.addPassthroughCopy('src/assets');
	eleventyConfig.addPassthroughCopy('CNAME');

	// To create excerpts
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		excerpt_alias: 'post_excerpt',
		excerpt_separator: "<!-- excerpt -->"
	});

	// To create a filter to determine duration of post
	eleventyConfig.addFilter('readTime', (value) => {
		const content = value
		const textOnly = content.replace(/(<([^>]+)>)/gi, '')
		const readingSpeedPerMin = 450
		return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin))
	})

	// Enable us to iterate over all the tags, excluding posts and all
	eleventyConfig.addCollection('tagList', collection => {
		const tagsSet = new Set()
		collection.getAll().forEach(item => {
			if (!item.data.tags) return
			item.data.tags
				.filter(tag => !['posts', 'all'].includes(tag))
				.forEach(tag => tagsSet.add(tag))
		})
		return Array.from(tagsSet).sort()
	})

	eleventyConfig.addFilter("md", function(content = "") {
		return markdownIt({ html: true }).render(content);
	});

	// asset_img shortcode
	eleventyConfig.addLiquidShortcode('asset_img', (filename, alt) => {
		return `<img class="post-image" src="/assets/img/posts/${filename}" alt="${alt}" />`
	})

	return {
		dir: {
			input: 'src',
		}
	};
};