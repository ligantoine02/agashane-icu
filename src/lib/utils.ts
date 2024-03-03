import slugify from "slugify";

export const toSlug = (title?: string, id?: number | string): string => {
	return slugify(`${title} ${id}`, {
		replacement: "-",
		remove: /[*+~.()'"!:@]/g,
		lower: true,
	});
};

export const extractSubtitle = (title?: string): string => {
	return title?.substring(0, title?.indexOf("![")) ?? "";
};

export const capitalize = (str?: string): string => {
	if (!str) return "";

	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};
