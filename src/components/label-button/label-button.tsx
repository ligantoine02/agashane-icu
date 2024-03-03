import { component$ } from "@builder.io/qwik";
import type { Label, Maybe } from "@octokit/graphql-schema";
import { toSlug } from "~/lib/utils";

export interface LabelButtonProps {
	label: Maybe<Label>;
	size?: "lg" | "md";
}

export const LabelButton = component$<LabelButtonProps>(
	({ label, size = "md" }) => {
		return (
			<a
				href={`/blog/topics/${toSlug(label?.name, "")}`}
				class={`badge badge-flat-primary ${
					size === "lg" ? "badge-xl" : "badge-lg"
				}`}
			>
				{label?.name}
			</a>
		);
	},
);
