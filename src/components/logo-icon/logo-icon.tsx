import { Slot, component$ } from "@builder.io/qwik";

interface Props {
	title: string;
}

export const LogoIcon = component$<Props>(({ title }) => {
	return (
		<div class="flex justify-center">
			<span
				class="text-5xl text-content2 font-neueMachina hover:text-blue-8 hover:cursor-pointer tooltip tooltip-top tooltip-primary"
				data-tooltip={title}
			>
				<Slot />
			</span>
		</div>
	);
});
