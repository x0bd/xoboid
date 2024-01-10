import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default function strongTag(str: string) {
	return str.replace(
		/\*{1,2}(.*?)\*{1,2}/g,
		`<strong className="font-normal ${
			MAP_COLOR_VARIANT_TO_TEXT[theme.primary]
		}">$1</strong>`
	);
}
