import * as Select from '@radix-ui/react-select';
import SelectMenuRoot from "./SelectMenuRoot";
import SelectMenuTrigger from "./SelectMenuTrigger";

export default {
  ...Select,
  Root: SelectMenuRoot,
  Trigger: SelectMenuTrigger,
}