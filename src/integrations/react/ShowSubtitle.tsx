/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

interface Props {
	content: string | null | undefined;
}

const ShowSubtitle: React.FC<Props> = ({ content }) => {
	// TODO trim rehypeSlug id for link
	// TODO show link on end of a heading

	return (
		<Markdown
			remarkPlugins={[remarkGfm]}
			rehypePlugins={[rehypeHighlight, rehypeSlug]}
			className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-darkerGrotesque prose-h2:text-xl prose-h2:font-normal prose-h2:text-content1"
		>
			{content}
		</Markdown>
	);
};

export const QShowSubtitle = qwikify$(ShowSubtitle);
