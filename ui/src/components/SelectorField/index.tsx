import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { ChevronDown, LoaderIcon, X } from 'lucide-react';
import fetchNui from '@/utils/fetchNui';

const WAITING_TIME = 800

interface SelectorFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onUpdate: (updatedList: any[]) => void
  onQuery: () => Promise<any>
}

interface ResponseDTO {
  id: number
  label: string
}

export default function SelectorField({ onUpdate, onQuery, ...props }: SelectorFieldProps) {
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

  useEffect(() => onUpdate(selectedItems), [selectedItems])

  async function handleFind() {
    setIsTyping(false);
    setInput('');

    const res = await onQuery();

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

  function handleRemoveItem(id: number) {
    setSelectedItems((prevState) => prevState.filter(el => el.id !== id));
  }

  return (
    <>
      <S.Area>
        <S.SelectedList onMouseLeave={() => setCanWrite(false)} onClick={handleOpenInputBox}>
          {canWrite && (
            <S.CreateItem>
              <S.Input
                {...props}
                value={input}
                onChange={({ target }) => setInput(target.value)}
                 ref={inputRef} />
            </S.CreateItem>
          )}

          {(noItemsSelected && !canWrite) ? (
            <p>Nada anexado...</p>
          ) : (
            <>
              {selectedItems?.map(item => (
                <S.Item key={item.id}>
                  {item.label}
                  <button onClick={() => handleRemoveItem(item.id)}><X size={'1rem'} color='#FFF'/></button>
                </S.Item>
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
}