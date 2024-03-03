import { component$ } from "@builder.io/qwik";

export interface DateFieldProps {
	date?: string;
}

export const DateField = component$<DateFieldProps>(({ date }) => {
	if (!date) return null;

	const newDate = new Date(date);

	return (
		<p class="text-content2 text-xl">
			{newDate.toLocaleString("en-US", {
				year: "numeric",
				day: "2-digit",
				month: "short",
			})}
		</p>
	);
});
