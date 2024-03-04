import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { gh } from "~/lib/gh";
import type { RepositoryResponse } from "~/lib/apiTypes";
import { LabelButton } from "~/components/label-button/label-button";
import { PostCard } from "~/components/post-card/post-card";

export const useIssuesLoader = routeLoader$(
	async () => await gh.getIssues({ limit: 12 }),
);

export const useLabelsLoader = routeLoader$(
	async () => await gh.getLabels({ limit: 5 }),
);

export default component$(() => {
	const { value: postsResponse } = useIssuesLoader();
	const { value: topicsResponse } = useLabelsLoader();

	const {
		repository: { labels },
	} = topicsResponse as RepositoryResponse;
	const {
		repository: { issues },
	} = postsResponse as RepositoryResponse;

	return (
		<main class="container px-6 py-8 md:p-12">
			{/* LABELS */}
			<header class="py-8 mt-12 lg:mt-24 space-y-4">
				<h2 class="text-4xl font-neueMachina uppercase">Topics</h2>
				<div class="flex flex-row gap-2 md:gap-4 items-center flex-wrap">
					{labels?.nodes?.map((label) => (
						<LabelButton label={label} key={label?.id} size="lg" />
					))}
				</div>
			</header>
			{/* /LABELS */}

			{/* POSTS */}
			<section class="py-12">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
					{issues.edges?.map((issue) => (
						<PostCard key={issue?.node?.id} post={issue?.node} />
					))}
				</div>
			</section>
			{/* /POSTS */}
		</main>
	);
});
