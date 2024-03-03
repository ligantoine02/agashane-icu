import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<footer class="container py-8">
			<nav class="flex flex-row items-center justify-center gap-4">
				<a href="/" class="text-content2 hover:text-primary text-xl">
					Agashane
				</a>
				<a href="/blog" class="text-content2 hover:text-primary text-xl">
					Posts
				</a>
				<a href="/about" class="text-content2 hover:text-primary text-xl">
					About
				</a>
			</nav>
		</footer>
	);
});
