export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
    eleventyConfig.addPassthroughCopy("src/styles/styles.css");
	eleventyConfig.addPassthroughCopy('src/images/*');
	eleventyConfig.addPassthroughCopy('src/scripts/*');
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};