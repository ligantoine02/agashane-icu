import { component$ } from "@builder.io/qwik";
import {
	type StaticGenerateHandler,
	routeLoader$,
} from "@builder.io/qwik-city";
import { TableOfContent } from "~/components/table-of-content/table-of-content";
import { QShowPost } from "~/integrations/react/ShowPost";
import octokit from "~/lib/api";
import { toSlug } from "~/lib/utils";

export const onStaticGenerate: StaticGenerateHandler = async () => {
	const issues = await octokit.rest.issues.list();

	return {
		params: issues.data.map((issue) => {
			return { slug: toSlug(issue.title, issue.number) };
		}),
	};
};

export const usePostLoader = routeLoader$(async ({ params }) => {
	const { slug } = params;
	const id = slug.substring(slug.lastIndexOf("-") + 1);

	// TODO validate slug

	const issue = await octokit.rest.issues.get({
		owner: import.meta.env.PUBLIC_OWNER,
		repo: import.meta.env.PUBLIC_REPO,
		issue_number: Number(id),
	});

	return issue.data;
});

export default component$(() => {
	const post = usePostLoader();

	return (
		<main class="container mx-auto p-12 grid  grid-cols-1 md:grid-cols-12 gap-12">
			<section class="md:col-span-8 py-24">
				<h1 class="font-bold font-neueMachina uppercase text-4xl">
					{post.value.title}
				</h1>

				{/* Display metadata */}
				<div class="py-2 flex flex-row items-center justify-between mb-8">
					<p>
						{new Date(post.value.created_at).toLocaleString("en-US", {
							year: "numeric",
							month: "short",
							day: "2-digit",
						})}
					</p>
					<div class="flex flex-row items-center gap-2">
						{post.value.labels.map((label) => (
							<>
								{label.name !== "Published" ? (
									<a
										href={`/blog/tags/${toSlug(label.name, label.id)}`}
										key={label.id}
										class="badge badge-flat-secondary badge-lg"
									>
										{label.name}
									</a>
								) : null}
							</>
						))}
					</div>
				</div>

				<QShowPost content={post.value.body} />
			</section>

			<aside class="sticky md:col-span-4 top-16 py-24  order-first md:order-last">
				<header>
					<p>Found on this page...</p>
				</header>

				<section class="flex-1">
					<TableOfContent content={post.value.body} />
				</section>
			</aside>
		</main>
	);
});
