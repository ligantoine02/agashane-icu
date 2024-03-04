import { component$ } from "@builder.io/qwik";
import type { Issue, Maybe } from "@octokit/graphql-schema";

import { extractSubtitle, toSlug } from "~/lib/utils";
import { DateField } from "../date-field/date-field";
import { ShowPost } from "../show-post/show-post";

export interface PostCardProps {
	post?: Maybe<Issue>;
}

export const PostCard = component$<PostCardProps>(({ post }) => {
	if (!post) return null;

	return (
		<article class="card">
			<div class="card-body">
				<nav class="flex flex-row items-center flex-wrap gap-2">
					{post?.labels?.edges?.map((label) => (
						<a
							href={`/blog/topics/${toSlug(label?.node?.name, "")}`}
							class="badge badge-flat-primary badge-lg"
							key={label?.node?.id}
						>
							{label?.node?.name}
						</a>
					))}
				</nav>
				<h3 class="card-header mb-2">
					<a
						href={`/blog/${toSlug(post?.title, post?.number)}`}
						class="text-xl md:text-2xl uppercase leading-relaxed font-neueMachina"
					>
						{post?.title}
					</a>
				</h3>
				<a href={`/blog/${toSlug(post?.title, post?.number)}`}>
					<ShowPost content={extractSubtitle(post?.bodyHTML)} subtitle />
				</a>
				<DateField date={post?.createdAt} />
			</div>
		</article>
	);
});
