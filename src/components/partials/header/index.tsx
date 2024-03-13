import { component$ } from "@builder.io/qwik";
import { LuHome, LuLayoutGrid } from "@qwikest/icons/lucide";

export default component$(() => {
	return (
		<header class="navbar navbar-sticky navbar-floating navbar-glass">
			<div class="container">
				<div class="navbar-center">
					<a href="/" class="navbar-item text-2xl hover:text-primary">
						Agashane
					</a>
					<a
						href="/"
						class="navbar-item flex flex-row gap-2 items-center text-2xl hover:text-primary"
					>
						<LuHome />
						Home
					</a>
					<a
						href="/blog"
						class="navbar-item text-2xl hover:text-primary flex flex-row items-center gap-2"
					>
						<LuLayoutGrid />
						Blog
					</a>
				</div>
			</div>
		</header>
	);
});
