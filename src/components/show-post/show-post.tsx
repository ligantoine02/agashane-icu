import { component$ } from "@builder.io/qwik";

export interface ShowPostProps {
	content?: string;
	subtitle?: boolean;
}

export const ShowPost = component$<ShowPostProps>(({ content, subtitle }) => {
	if (!content) return null;

	const classes = subtitle
		? "prose prose-slate dark:prose-invert max-w-none prose-headings:font-darkerGrotesque prose-h2:text-xl prose-h2:font-normal prose-h2:text-content1 prose-h2:line-clamp-3"
		: "prose prose-slate prose-xl md:prose-2xl dark:prose-invert max-w-none prose-pre:py-4 prose-pre:px-8 prose-pre:rounded-lg prose-pre:text-md prose-img:rounded-lg prose-headings:font-darkerGrotesque prose-h3:text-2xl md:prose-h3:text-3xl prose-h2:text-3xl lg:prose-h2:text-4xl prose-a:link prose-a:link-primary prose-a:no-underline";

	return <article dangerouslySetInnerHTML={content} class={classes} />;
});
