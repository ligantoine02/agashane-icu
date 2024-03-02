import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<header class="navbar navbar-sticky navbar-floating navbar-glass bg-secondary">
			<div class="container mx-auto">
				<a href="/" class="btn btn-primary">
					Accuel
				</a>
			</div>
		</header>
	);
});
