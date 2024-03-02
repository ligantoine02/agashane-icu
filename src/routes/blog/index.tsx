import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import octokit from "~/lib/api";
import { toSlug } from "~/lib/utils";

export const useIssuesLoader = routeLoader$(async () => {
	const issues = await octokit.rest.issues.list();
	return issues.data;
});

export default component$(() => {
	const issues = useIssuesLoader();

	return (
		<main class="container mx-auto p-12">
			{issues.value.length === 0 ? (
				<div>
					<p>No post</p>
				</div>
			) : (
				<div class="grid grid-cols-4 gap-4">
					{issues.value.map((issue) => (
						<article key={issue.id}>
							<h2>
								<a href={`/blog/${toSlug(issue.title, issue.number)}`}>
									{issue.title}
								</a>
							</h2>
						</article>
					))}
				</div>
			)}
		</main>
	);
});
