import { component$ } from "@builder.io/qwik";
import {
	type StaticGenerateHandler,
	routeLoader$,
} from "@builder.io/qwik-city";
import { DateField } from "~/components/date-field/date-field";
import { LabelButton } from "~/components/label-button/label-button";
import { ShowPost } from "~/components/show-post/show-post";
import type { RepositoryResponse } from "~/lib/apiTypes";
import { gh } from "~/lib/gh";
import { toSlug } from "~/lib/utils";

export const onStaticGenerate: StaticGenerateHandler = async () => {
	const {
		repository: { issues },
	} = (await gh.getIssues({ limit: 50 })) as RepositoryResponse;

	return {
		params: issues.edges?.map((issue) => {
			return { slug: toSlug(issue?.node?.title, issue?.node?.number) };
		}),
	};
};

export const usePostLoader = routeLoader$(async ({ params }) => {
	const { slug } = params;
	const id = slug.substring(slug.lastIndexOf("-") + 1);

	const issue = await gh.findIssue(Number(id));

	// TODO validate slug

	// return issue.data;
	return issue;
});

export default component$(() => {
	const { value } = usePostLoader();
	const { repository } = value as RepositoryResponse;
	const post = repository.issue;

	return (
		<main class="container mx-auto px-6 py-8 md:p-12 grid  grid-cols-1 md:grid-cols-12 gap-12">
			<section class="md:col-span-10 py-24">
				<h1 class="font-bold font-neueMachina uppercase text-2xl md:text-4xl">
					{post?.title}
				</h1>

				<div class="py-2 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between mb-8">
					<DateField date={post?.createdAt} />
					<div class="flex flex-row items-center gap-2">
						{post?.labels?.nodes?.map((label) => (
							<LabelButton label={label} size="lg" key={label?.id} />
						))}
					</div>
				</div>

				<ShowPost content={post?.bodyHTML} />
			</section>

			{/* TODO display table of contents */}
		</main>
	);
});
