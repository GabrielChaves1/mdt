import * as Tooltip from "@radix-ui/react-tooltip";
import TooltipContent from "./TooltipContent";
import TooltipTrigger from "./TooltipTrigger";

export default {
  ...Tooltip,
  Content: TooltipContent,
  Trigger: TooltipTrigger,
}