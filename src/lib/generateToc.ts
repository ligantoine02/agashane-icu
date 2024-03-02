// @ts-nocheck

import { fromMarkdown } from "mdast-util-from-markdown";
import slugify from "slugify";

export const generateToc = (content: string) => {
	// const tree = fromMarkdown(content);
	// const headings = tree.children.filter((child) => child.type === "heading");
	// const heads: Array<{ depth: number; slug: string; name: string }> = [];
	// for (const heading of headings) {
	// 	heads.push({
	// 		depth: heading.depth,
	// 		slug: slugify(heading.children[0].value, {
	// 			lower: true,
	// 		}),
	// 		name: heading.children[0].value,
	// 	});
	// }
	// return heads;
	return [];
};
