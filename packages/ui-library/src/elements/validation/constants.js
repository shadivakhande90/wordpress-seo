import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, ExclamationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export const VALIDATION_VARIANTS = {
	success: "success",
	warning: "warning",
	info: "info",
	error: "error",
	question: "question",
};

export const VALIDATION_ICON_MAP = {
	success: CheckCircleIcon,
	warning: ExclamationIcon,
	info: InformationCircleIcon,
	error: ExclamationCircleIcon,
	question: QuestionMarkCircleIcon,
};
