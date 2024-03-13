import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

import { gh } from "~/lib/gh";
import type { RepositoryResponse } from "~/lib/apiTypes";
import { PostCard } from "~/components/post-card/post-card";
import { HeaderSection } from "~/components/header-section/header-section";

export const useLabelsLoader = routeLoader$(
	async () => await gh.getLabels({ limit: 5 }),
);

export default component$(() => {
	const { value: topicsResponse } = useLabelsLoader();

	const {
		repository: { labels },
	} = topicsResponse as RepositoryResponse;

	return (
		<main class="flex flex-col gap-16">
			<HeaderSection
				title="Blog"
				description="Welcome to my corner of the internet ! Here, I'll be sharing my journey, exploring new technologies, and offering practical advice for fellow developers (and anyone who's curious) !"
			/>

			{labels?.nodes?.map((label) => (
				<section key={label?.id} class="grid grid-cols-1 lg:grid-cols-3 gap-4">
					<aside class="p-4 flex flex-col gap-4 rounded-xl">
						<h2 class="text-3xl lg:text-4xl text-blue-8 font-neueMachina uppercase">
							{label?.name}
						</h2>
						<p class="text-xl lg:text-2xl text-content2">
							{label?.description}
						</p>
					</aside>
					<div class="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
						{label?.issues?.nodes?.map((issue) => (
							<PostCard key={issue?.id} post={issue} />
						))}
					</div>
				</section>
			))}
		</main>
	);
});

export const head: DocumentHead = {
	title: "Agashane | Blog, tips, tutorials, ideas",
	meta: [
		{
			name: "description",
			content:
				"Welcome to Agashane, my corner of the internet ! Here I'll be sharing my journey, exploring new technologies, and offering practical advices for fellow developers (and anyone who's curious !).",
		},
	],
};
