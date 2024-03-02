/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface Props {
	content: string | null | undefined;
}

const ShowPost: React.FC<Props> = ({ content }) => {
	// TODO trim rehypeSlug id for link
	// TODO show link on end of a heading

	return (
		<Markdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeHighlight, rehypeSlug]}
			className="prose prose-slate dark:prose-invert max-w-none prose-pre:p-0 prose-pre:rounded-lg prose-img:rounded-lg prose-headings:font-darkerGrotesque prose-h3:text-3xl prose-h2:text-4xl prose-a:link prose-a:link-primary prose-a:no-underline prose-lg"
		>
			{content}
		</Markdown>
	);
};

export const QShowPost = qwikify$(ShowPost);