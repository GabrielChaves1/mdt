import * as Select from '@radix-ui/react-select';
import SelectMenuTrigger from "./SelectMenuTrigger";
import SelectMenuIcon from './SelectMenuIcon';
import SelectMenuItem from './SelectMenuItem';
import SelectMenuContent from './SelectMenuContent';
import SelectMenuLabel from './SelectMenuLabel';
import SelectMenuScrollButton from './SelectMenuScrollButton';
import SelectMenuSeparator from './SelectMenuSeparator';

export default {
  ...Select,
  Content: SelectMenuContent,
  Trigger: SelectMenuTrigger,
  Icon: SelectMenuIcon,
  Label: SelectMenuLabel,
  Item: SelectMenuItem,
  ScrollUpButton: SelectMenuScrollButton,
  Separator: SelectMenuSeparator
}