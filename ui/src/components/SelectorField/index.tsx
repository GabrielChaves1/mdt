import { ForwardedRef, InputHTMLAttributes, forwardRef, useEffect, useState } from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { ChevronDown, LoaderIcon } from 'lucide-react';

const WAITING_TIME = 800

interface SelectorFieldProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const SelectorField = forwardRef(({ ...props }: SelectorFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { colors } = useTheme();
  const [ input, setInput ] = useState<string>('');
  const [ isTyping, setIsTyping ] = useState<boolean>(false);

  useEffect(() => {
    if(input.length > 0){
      setIsTyping(true);
      const delayDebounceFn = setTimeout(() => {
        setIsTyping(false);
        setInput('');
      }, WAITING_TIME)
  
      return () => clearTimeout(delayDebounceFn)
    } else {
      setIsTyping(false);
    }
  }, [input])

  return (
    <>
      <S.Area>
        <S.SelectedList>
          <S.SelectedItem>Droyen</S.SelectedItem>
          <S.Text 
            value={input}
            onChange={({target}) => setInput(target.value)} 
            ref={ref} 
            {...props} />
        </S.SelectedList>
        {isTyping ? (
          <S.Button disabled>
            <LoaderIcon size={'1.6rem'} color={colors.icon} />
          </S.Button>
        ) : (
          <S.Button>
            <ChevronDown size={'1.6rem'} color={colors.icon}/>
          </S.Button>
        )}
      </S.Area>
    </>
  )
})