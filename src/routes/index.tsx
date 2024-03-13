import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
	SiPhp,
	SiReact,
	SiPostgresql,
	SiTailwindcss,
	SiTypescript,
	SiAdonisjs,
	SiMysql,
	SiTurso,
	SiLaravel,
	SiRemix,
	SiSvelte,
	SiRadixui,
	SiUbuntu,
	SiPodman,
	SiPayloadcms,
	SiHtml5,
	SiGithub,
	SiGithubactions,
	SiSlack,
	SiNetlify,
} from "@qwikest/icons/simpleicons";
import { LogoIcon } from "~/components/logo-icon/logo-icon";

export default component$(() => {
	return (
		<div class="flex flex-col gap-12">
			{/* INTRO */}
			<header class="w-full lg:w-3/4 text-xl lg:text-3xl text-justify leading-normal">
				<p class="text-3xl lg:text-4xl my-4">
					Hello there ! I'm <span class="text-primary">Glorieux Lukama</span>, a
					full stack web developer based in the beautiful region of Kamisimbi in
					South Kivu (DRCongo).
				</p>
				<p class="text-content2">
					Creating websites, mobile apps and APIs brings joy to my day. <br />
					Currently, I'm actually involved in launching two businesses -{" "}
					<span class="text-primary">Adagrem</span>, a SaaS designed
					specifically for farmers and <span class="text-primary">Erulabs</span>
					, an agency for ecommerce loving small business owners.
				</p>
				<p class="my-2 text-content2">
					Working as a freelancer enables me to combine flexibility with
					delivering quality results to clients. Sharing what I learn makes me
					super happy, so when time allows, I write random tech topics on{" "}
					<a
						href="https://agashane.icu/blog"
						class="link link-primary link-underline-hover text-xl lg:text-3xl"
					>
						my blog
					</a>
					.
				</p>
			</header>
			{/* /INTRO */}

			{/* TECHNOLOGIES */}
			<section class="flex flex-col gap-16">
				<h2 class="text-3xl lg:text-4xl font-neueMachina uppercase ">
					Technologies
				</h2>
				<div class=" flex flex-col gap-8">
					<h3 class="text-2xl lg:text-3xl font-neueMachina">Backend</h3>
					<div class="grid grid-cols-4 lg:grid-cols-8 gap-4 justify-center items-center">
						<LogoIcon title="Typescript">
							<SiTypescript />
						</LogoIcon>
						<LogoIcon title="AdonisJS">
							<SiAdonisjs />
						</LogoIcon>
						<LogoIcon title="PayloadCMS">
							<SiPayloadcms />
						</LogoIcon>
						<LogoIcon title="PHP">
							<SiPhp />
						</LogoIcon>
						<LogoIcon title="Laravel">
							<SiLaravel />
						</LogoIcon>
						<LogoIcon title="PostgreSQL">
							<SiPostgresql />
						</LogoIcon>
						<LogoIcon title="MySQL">
							<SiMysql />
						</LogoIcon>
						<LogoIcon title="Turso">
							<SiTurso />
						</LogoIcon>
					</div>
				</div>
				<div class="flex flex-col gap-8">
					<h3 class="text-2xl lg:text-3xl font-neueMachina">Frontend</h3>
					<div class="grid grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
						<LogoIcon title="React">
							<SiReact />
						</LogoIcon>
						<LogoIcon title="Remix">
							<SiRemix />
						</LogoIcon>
						<LogoIcon title="Svelte">
							<SiSvelte />
						</LogoIcon>
						<LogoIcon title="HTML5">
							<SiHtml5 />
						</LogoIcon>
						<LogoIcon title="TailwindCSS">
							<SiTailwindcss />
						</LogoIcon>
						<LogoIcon title="RadixUI">
							<SiRadixui />
						</LogoIcon>
					</div>
				</div>
				<div class="flex flex-col gap-8">
					<h3 class="text-2xl lg:text-3xl font-neueMachina">Tools</h3>
					<div class="grid grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
						<LogoIcon title="Ubuntu">
							<SiUbuntu />
						</LogoIcon>
						<LogoIcon title="Podman">
							<SiPodman />
						</LogoIcon>
						<LogoIcon title="GitHub">
							<SiGithub />
						</LogoIcon>
						<LogoIcon title="GitHub Actions">
							<SiGithubactions />
						</LogoIcon>
						<LogoIcon title="Slack">
							<SiSlack />
						</LogoIcon>
						<LogoIcon title="Netlify">
							<SiNetlify />
						</LogoIcon>
					</div>
				</div>
			</section>
			{/* /TECHNOLOGIES */}
		</div>
	);
});

export const head: DocumentHead = {
	title: "Agashane - Make tech easier !",
	meta: [
		{
			name: "description",
			content:
				"Welcome to Agashane, my corner of the intenet ! I'm Glorieux Lukama, a full stack web developer !",
		},
	],
};
