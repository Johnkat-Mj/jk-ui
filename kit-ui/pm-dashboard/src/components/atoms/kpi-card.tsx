import { cx } from "#/lib/utils";
import { Card } from "../jk/card";


export const KpiCard = ({
	title,
	stat,
	text,
	type,
}: {
	title: string;
	stat: string;
	text: string;
	type: "increase" | "decrease";
}) => {
	return (
		<Card>
			<span className="text-muted-foreground text-sm">{title}</span>
			<div className="flex items-center space-x-1.5 mt-2">
				<span className="text-foreground text-lg md:text-2xl font-semibold">
					{stat}
				</span>
				<span
					className={cx("text-sm flex items-center gap-px", {
						"text-success": type === "increase",
						"text-destructive": type === "decrease",
					})}
				>
					<svg
						className="size-3.5"
						aria-label="Icon caret"
						width={20}
						height={20}
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.494 13.1709C15.8645 12.898 15.9436 12.3764 15.6707 12.0058C15.4587 11.7179 15.2467 11.4444 15.0607 11.206C14.6895 10.7304 14.1784 10.0932 13.623 9.45369C13.0714 8.81827 12.4596 8.16136 11.8886 7.65678C11.604 7.40533 11.3099 7.17409 11.023 7.00119C10.7591 6.84207 10.3965 6.66669 9.99971 6.66669C9.60296 6.66669 9.24021 6.84207 8.9763 7.00119C8.68946 7.17409 8.39538 7.40533 8.1108 7.65678C7.53972 8.16136 6.92802 8.81827 6.37632 9.45369C5.82103 10.0932 5.30993 10.7304 4.93866 11.206C4.75269 11.4444 4.54065 11.7179 4.32865 12.0058C4.05573 12.3764 4.13489 12.898 4.50546 13.1709C4.65443 13.2807 4.82781 13.3335 4.99965 13.3334H9.99971H14.9997C15.1715 13.3335 15.345 13.2807 15.494 13.1709Z"
							fill="currentcolor"
						/>
					</svg>

					<span>{text}</span>
				</span>
			</div>
		</Card>
	);
};
