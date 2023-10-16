import { SliderProps } from '@radix-ui/react-slider'
import * as S from './styles';

export default function Slider({ ...props }: SliderProps) {
	return (
		<S.Root {...props}>
			<S.Track>
				<S.Range />
			</S.Track>
			<S.Thumb />
		</S.Root>
	)
}