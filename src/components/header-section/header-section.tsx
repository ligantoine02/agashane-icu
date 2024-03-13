import { component$ } from "@builder.io/qwik";

export interface HeaderSectionProps {
	title: string;
	description: string;
}

export const HeaderSection = component$<HeaderSectionProps>(
	({ title, description }) => {
		return (
			<header class="bg-blue-2 p-8 lg:py-16 lg:px-12 rounded-xl space-y-8 mt-8">
				<h1 class="text-4xl lg:text-5xl font-neueMachina uppercase">{title}</h1>
				<p class="text-2xl lg:text-3xl text-content2 w-full md:w-3/4">
					{description}
				</p>
			</header>
		);
	},
);
