import { ForwardedRef, InputHTMLAttributes, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { ChevronDown, LoaderIcon } from 'lucide-react';
import fetchNui from '@/utils/fetchNui';

const WAITING_TIME = 800

interface SelectorFieldProps extends InputHTMLAttributes<HTMLInputElement> {

}

interface ResponseDTO {
  id: number
  label: string
}

export const SelectorField = forwardRef(({ ...props }: SelectorFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { colors } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [canWrite, setCanWrite] = useState<boolean>(false);
  const [results, setResults] = useState<ResponseDTO[]>([]);
  const [ selectedItems, setSelectedItems ] = useState<ResponseDTO[]>([]);
  
  const hasResults = results.length > 0;
  const noItemsSelected = selectedItems.length <= 0;

  useEffect(() => {
    if (input.length > 0) {
      setIsTyping(true);
      const delayDebounceFn = setTimeout(handleFind, WAITING_TIME)

      return () => clearTimeout(delayDebounceFn)
    } else {
      setIsTyping(false);
    }
  }, [input]);

  async function handleFind() {
    setIsTyping(false);
    setInput('');

    const res = await fetchNui<ResponseDTO[]>("getNearestPlayers", undefined, [
      {
        id: 1,
        label: "Droyen"
      }
    ]);

    setCanWrite(false);
    setResults(res);
  }

  function handleOpenInputBox() {
    if (canWrite) return;
    setCanWrite(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }

  function handleSelectQueryItem(item: ResponseDTO) {
    const itemAlreadyExists = selectedItems.find(el => el.id === item.id);
    if(itemAlreadyExists) return;

    setSelectedItems((prevState) => [...prevState, item]);
  }


  return (
    <>
      <S.Area>
        <S.SelectedList onClick={handleOpenInputBox}>
          {canWrite && (
            <S.CreateItem>
              <S.Input
                value={input}
                onChange={({ target }) => setInput(target.value)}
                onBlur={() => setCanWrite(false)} ref={inputRef} placeholder="ID" />
            </S.CreateItem>
          )}

          {(noItemsSelected && !canWrite) ? (
            <p>Nada anexado...</p>
          ) : (
            <>
              {selectedItems?.map(item => (
                <S.Item key={item.id}>{item.label}</S.Item>
              ))}
            </>
          )}
          
        </S.SelectedList>
        {hasResults && (
          <S.QueryListContainer onMouseLeave={() => setResults([])}>
            <S.QueryList>
              {results.map((item) => (
                <S.QueryItem 
                  disabled={selectedItems.find(el => el.id === item.id) ? true : false} 
                  key={item.id} onClick={() => handleSelectQueryItem(item)}>
                    {item.label}
                  </S.QueryItem>
              ))}
            </S.QueryList>
          </S.QueryListContainer>
        )}
        {isTyping ? (
          <S.Button disabled>
            <LoaderIcon size={'1.6rem'} color={colors.icon} />
          </S.Button>
        ) : (
          <S.Button>
            <ChevronDown size={'1.6rem'} color={colors.icon} />
          </S.Button>
        )}
      </S.Area>
    </>
  )
})