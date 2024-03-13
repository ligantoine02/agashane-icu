import { component$ } from "@builder.io/qwik";
import markdownit from "markdown-it";
import hljs from "highlight.js";

export interface MdPostProps {
	content?: string;
	subtitle?: boolean;
}

export const MdPost = component$<MdPostProps>(({ content, subtitle }) => {
	if (!content) return null;

	const md = markdownit({
		highlight: (str, lang) => {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(str, { language: lang }).value;
				} catch (__) {}
			}

			return ""; // use external default escaping
		},
		linkify: true,
		typographer: true,
	});
	const result = md.render(content);

	const classes = subtitle
		? "prose prose-slate dark:prose-invert max-w-none prose-headings:font-darkerGrotesque prose-h2:text-xl prose-h2:font-normal prose-h2:text-content1"
		: "prose prose-slate prose-xl md:prose-2xl dark:prose-invert max-w-none prose-pre:p-4 prose-pre:text-sm md:prose-pre:text-lg md:prose-pre:px-8 prose-pre:rounded-lg prose-img:rounded-lg prose-headings:font-darkerGrotesque prose-h3:text-2xl md:prose-h3:text-3xl prose-h2:text-3xl lg:prose-h2:text-4xl prose-a:link prose-a:link-primary prose-a:no-underline";

	console.info(result);

	return <div class={classes} dangerouslySetInnerHTML={result} />;
});
