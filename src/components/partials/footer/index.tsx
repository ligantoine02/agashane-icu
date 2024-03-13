import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuHome, LuLayoutGrid, LuMail } from "@qwikest/icons/lucide";
import { SiGithub, SiTwitter } from "@qwikest/icons/simpleicons";

export default component$(() => {
	return (
		<footer class="container py-8">
			<nav class="flex flex-row items-center justify-center gap-4">
				<a
					href="/"
					class="navbar-item flex flex-row gap-2 items-center text-2xl hover:text-content3"
				>
					Agashane
				</a>
				<a
					href="/"
					class="navbar-item flex flex-row gap-2 items-center text-2xl hover:text-content3"
				>
					<LuHome />
					Home
				</a>
				<a
					href="/blog"
					class="navbar-item flex flex-row gap-2 items-center text-2xl hover:text-content3"
				>
					<LuLayoutGrid />
					Posts
				</a>
			</nav>
			<nav className="flex flex-rows items-center justify-center gap-4">
				<Link
					href="https://twitter.com/ligantoine02"
					class="btn btn-solid-primary btn-circle"
				>
					<SiTwitter font-size="1.5em" />
				</Link>
				<Link
					href="https://github.com/ligantoine02"
					class="btn btn-circle btn-solid-primary"
				>
					<SiGithub font-size="1.5em" />
				</Link>
				<Link
					href="mailto:ir.antoineglorieux@gmail.com"
					class="btn btn-circle btn-solid-primary"
				>
					<LuMail font-size="1.5em" />
				</Link>
			</nav>
		</footer>
	);
});
