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
		<main class="container p-12">
			{/* LABELS */}
			<section>
				<h2>Topics</h2>
				<div class="flex flex-row gap-4 items-center">
					{labels?.nodes?.map((label) => (
						<LabelButton label={label} key={label?.id} size="lg" />
					))}
				</div>
			</section>
			{/* /LABELS */}

			{/* POSTS */}
			<section class="py-12">
				<div class="grid grid-cols-3 gap-4 items-start">
					{issues?.edges?.map((issue) => (
						<PostCard key={issue?.node?.id} post={issue?.node} />
					))}
				</div>
			</section>
			{/* /POSTS */}
		</main>
	);
});
