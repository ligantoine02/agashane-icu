import { component$ } from "@builder.io/qwik";
import type { Issue, Maybe } from "@octokit/graphql-schema";

import { extractSubtitle, toSlug } from "~/lib/utils";
import { LabelButton } from "../label-button/label-button";
import { DateField } from "../date-field/date-field";
import { QShowSubtitle } from "~/integrations/react/ShowSubtitle";

export interface PostCardProps {
	post?: Maybe<Issue>;
}

export const PostCard = component$<PostCardProps>(({ post }) => {
	return (
		<article class="card break-after-right break-inside-avoid-column">
			<div class="card-body">
				<nav class="flex flex-row items-center flex-wrap gap-2">
					{post?.labels?.edges?.map((label) => (
						<LabelButton key={label?.node?.id} label={label?.node} />
					))}
				</nav>
				<h3 class="card-header mb-2">
					<a
						href={`/blog/${toSlug(post?.title, post?.number)}`}
						class="text-2xl font-neueMachina"
					>
						{post?.title}
					</a>
				</h3>
				<a href={`/blog/${toSlug(post?.title, post?.number)}`}>
					<QShowSubtitle content={extractSubtitle(post?.body)} />
				</a>
				<DateField date={post?.createdAt} />
			</div>
		</article>
	);
});
