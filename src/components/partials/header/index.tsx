import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<header class="flex flex-row items-center">
			<div class="container mx-auto">
				<a href="/" class="btn btn-primary">
					Accuel
				</a>
			</div>
		</header>
	);
});
