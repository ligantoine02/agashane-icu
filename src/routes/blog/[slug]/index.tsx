import { component$ } from "@builder.io/qwik";
import {
	type StaticGenerateHandler,
	routeLoader$,
} from "@builder.io/qwik-city";
import { Issue } from "@octokit/graphql-schema";
import { DateField } from "~/components/date-field/date-field";
import { LabelButton } from "~/components/label-button/label-button";
import { TableOfContent } from "~/components/table-of-content/table-of-content";
import { QShowPost } from "~/integrations/react/ShowPost";
import { RepositoryResponse } from "~/lib/apiTypes";
import { gh } from "~/lib/gh";
import { toSlug } from "~/lib/utils";

export const onStaticGenerate: StaticGenerateHandler = async () => {
	const {
		repository: { issues },
	} = (await gh.getIssues({ limit: 50 })) as RepositoryResponse;

	return {
		params: issues?.edges?.map((issue) => {
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
		<main class="container mx-auto p-12 grid  grid-cols-1 md:grid-cols-12 gap-12">
			<section class="md:col-span-10 py-24">
				<h1 class="font-bold font-neueMachina uppercase text-4xl">
					{post?.title}
				</h1>

				<div class="py-2 flex flex-row items-center justify-between mb-8">
					<DateField date={post?.createdAt} />
					<div class="flex flex-row items-center gap-2">
						{post?.labels?.nodes?.map((label) => (
							<LabelButton label={label} size="lg" key={label?.id} />
						))}
					</div>
				</div>

				<QShowPost content={post?.body} />
			</section>

			{/* TODO display table of contents */}
			{/*
			<aside class="hidden sticky md:col-span-4 top-16 py-24  order-first md:order-last">
				
				<header>
					<p>Found on this page...</p>
				</header>

				<section class="flex-1">
					<TableOfContent content={post?.body} />
				</section>
			
			</aside>
				*/}
		</main>
	);
});
