import slugify from "slugify";

export const toSlug = (title: string, id: number | string): string => {
	return slugify(`${title} ${id}`, {
		replacement: "-",
		remove: /[*+~.()'"!:@]/g,
		lower: true,
	});
};
