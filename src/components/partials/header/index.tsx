import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<header class="navbar navbar-sticky navbar-floating navbar-glass">
			<div class="container">
				<div class="navbar-center">
					<a href="/" class="navbar-item text-xl hover:text-primary">
						Agashane
					</a>
					<a href="/blog" class="navbar-item text-xl hover:text-primary">
						Posts
					</a>
					<a href="/about" class="navbar-item text-xl">
						About
					</a>
				</div>
			</div>
		</header>
	);
});
