import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { fdir } from 'fdir';

import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki';
const theme = 'catppuccin-mocha';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'lua']
});

import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeSlug from 'rehype-slug'
import rehypeCallouts from 'rehype-callouts'
// import toc from '@jsdevtools/rehype-toc'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import remarkOEmbed from "remark-oembed";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
  layout: {
		_: './src/mdsvex.svelte'
	},
  remarkPlugins: [remarkUnwrapImages],
  rehypePlugins: [rehypeSlug, [rehypeExternalLinks, {target: '_blank'}], [rehypeAutolinkHeadings, { behavior: 'prepend', }], [rehypeCallouts, {  }]],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
  layout: {
		_: './src/mdsvex.svelte'
	},
	preprocess: [
    vitePreprocess(),
    mdsvex(mdsvexOptions),
    {
			markup: ({ content, filename }) => {
				if (![".svelte.md", ".md", ".svx"].some(extension => filename.includes(extension))) return { code: content }

				const obsidianLinkRegex = /\[\[(.+?(\|.+?)?)\]\]([\W])/g
        const obsidianImageRegex = /!\[\[(.+?(\|.+?)?)\]\]/g
        const transformedContent = content
        // .replace(obsidianImageRegex, (_, p1) => {
        //   return `<img src="../../assets/${p1}">`;
        //   // return `<img src="./../src/adamplouff.com/_assets/${p1}">`;
        // })
        .replace(obsidianLinkRegex, (_, p1, p2, p3) => {
          const slug = p1.includes("|") ? p1.slice(0, p1.indexOf("|")) : p1
          const filePathArr = new fdir().glob(`./**/${slug}.md`).withRelativePaths().crawl('./src/adamplouff_vault/notes').sync();
          console.log(`Found file path for slug "${slug}":`, filePathArr);

          const href = `/` + (filePathArr.length === 1) ? filePathArr[0].slice(0, -3) : slug

          const linkText = (p2) ? p2.slice(1) : p1

          const linkHtml = `<a href="/${ href }">${ linkText }</a>` + p3
          return linkHtml
        })


				return {
					code: transformedContent,
				}
			}
		}
  ],
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
  }
}

export default config;
