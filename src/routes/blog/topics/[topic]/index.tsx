import { component$ } from "@builder.io/qwik";
import {
	StaticGenerateHandler,
	routeLoader$,
	useLocation,
} from "@builder.io/qwik-city";
import { Label } from "@octokit/graphql-schema";
import { PostCard } from "~/components/post-card/post-card";
import { RepositoryResponse } from "~/lib/apiTypes";
import { gh } from "~/lib/gh";
import { capitalize, toSlug } from "~/lib/utils";

export const onStaticGenerate = (async () => {
	const {
		repository: { labels },
	} = (await gh.getLabels({ limit: 12 })) as RepositoryResponse;

	return {
		params: labels?.nodes?.map((label) => {
			return { topic: toSlug(label?.name, "") };
		}),
	};
}) satisfies StaticGenerateHandler;

export const useLabelLoader = routeLoader$(async ({ params }) => {
	const { topic } = params;

	const label = (await gh.findLabelByName(
		capitalize(topic),
	)) as RepositoryResponse;

	return label;
});

export default component$(() => {
	const { value } = useLabelLoader();
	const label = value.repository.label as Label;

	return (
		<main class="container px-6 py-8 md:p-12">
			<header class="py-8 mt-12 lg:mt-24">
				<h1 class="text-4xl font-neueMachina uppercase">{label?.name}</h1>
				<h2 class="text-2xl text-content1">{label?.description}</h2>
			</header>

			<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start py-12">
				{label.issues.nodes?.map((issue) => (
					<PostCard key={issue?.id} post={issue} />
				))}
			</section>
		</main>
	);
});
