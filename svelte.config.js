import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { fdir } from 'fdir';

import { mdsvex, escapeSvelte } from 'mdsvex'
import { getHighlighter } from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
  layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['catppuccin-mocha'],
				langs: ['javascript', 'typescript', 'lua']
			})
			await highlighter.loadLanguage('javascript', 'typescript')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'catppuccin-mocha' }))
			return `{@html \`${html}\` }`
		}
	},
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
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
          const href = `/` + (filePathArr.length === 1) ? filePathArr[0].slice(0, -3) : slug

          const linkText = (p2) ? p2.slice(1) : p1

          const linkHtml = `<a href="/log/${ href }">${ linkText }</a>` + p3
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
