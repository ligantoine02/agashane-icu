import { component$ } from "@builder.io/qwik";
import { LuChevronUp, LuLink } from "@qwikest/icons/lucide";
import { generateToc } from "~/lib/generateToc";

export interface TableOfContentProps {
	content?: string;
}

export const TableOfContent = component$<TableOfContentProps>(
	({ content }) => {
		if (!content) return null;

		const headings = generateToc(content);
		console.info(headings);

		return (
			<nav class="menu w-full">
				<section class="menu-section">
					<ul class="menu-items">
						{headings.map((heading) => (
							<li key={heading.slug}>
								{heading.depth === 2 ? (
									<>
										<input
											type="checkbox"
											id={heading.slug}
											class="menu-toggle"
										/>
										<label class="menu-item justify-between" for={heading.slug}>
											<span>{heading.name}</span>
											<span class="meni-icon">
												<LuChevronUp />
											</span>
										</label>
									</>
								) : null}
							</li>
						))}
					</ul>
					<ul class="menu-items">
						{headings.map((heading) => (
							<li
								class={`${heading.depth === 3 ? "pl-8" : ""} menu-item`}
								key={heading.slug}
							>
								<LuLink />
								<a href={`#${heading.slug}`}>{heading.name}</a>
							</li>
						))}
					</ul>
				</section>
			</nav>
		);
	},
);
