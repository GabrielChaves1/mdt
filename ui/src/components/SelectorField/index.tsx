import { InputHTMLAttributes, Reducer, useEffect, useReducer, useRef, useState } from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { ChevronDown, LoaderIcon, X } from 'lucide-react';

const WAITING_TIME = 800

interface SelectorFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onUpdate: (updatedList: any[]) => void
  onQuery: () => Promise<any>
}

interface ResponseDTO {
  id: number
  label: string
}

type SelectorStates = {
  input: string
  isTyping: boolean
  canWrite: boolean
  results: ResponseDTO[]
  selectedItems: ResponseDTO[]
}

export default function SelectorField({ onUpdate, onQuery, ...props }: SelectorFieldProps) {
  const { colors } = useTheme();

  const [{
    canWrite, 
    input, 
    isTyping, 
    results, 
    selectedItems
  }, setSelector] = useReducer<Reducer<SelectorStates, Partial<SelectorStates>>>(
    (prev: SelectorStates, next: Partial<SelectorStates>) => {
      return { ...prev, ...next }
    },
    {
      input: '',
      isTyping: false,
      canWrite: false,
      results: [],
      selectedItems: []
    }
  )

  const inputRef = useRef<HTMLInputElement>(null);
  
  const hasResults = results.length > 0;
  const noItemsSelected = selectedItems.length <= 0;

  useEffect(() => {
    if (input.length > 0) {
      setSelector({ isTyping: true });
      const delayDebounceFn = setTimeout(handleFind, WAITING_TIME)

      return () => clearTimeout(delayDebounceFn)
    } else {
      setSelector({ isTyping: false });
    }
  }, [input]);

  useEffect(() => onUpdate(selectedItems), [selectedItems])

  async function handleFind() {
    const res = await onQuery();
    setSelector({ canWrite: false, results: res, input: '', isTyping: false });
  }

  function handleOpenInputBox() {
    if (canWrite) return;
    setSelector({ canWrite: true });

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }

  function handleSelectQueryItem(item: ResponseDTO) {
    const itemAlreadyExists = selectedItems.find(el => el.id === item.id);
    if(itemAlreadyExists) return;

    setSelector({ selectedItems: [...selectedItems, item] });
  }

  function handleRemoveItem(id: number) {
    setSelector({ selectedItems: [...selectedItems.filter(el => el.id !== id)] });
  }

  return (
    <>
      <S.Area>
        <S.SelectedList onMouseLeave={() => setSelector({ canWrite: false, isTyping: false, input: '' })} onClick={handleOpenInputBox}>
          {canWrite && (
            <S.CreateItem>
              <S.Input
                {...props}
                value={input}
                onChange={({ target }) => setSelector({ input: target.value })}
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
          <S.QueryListContainer onMouseLeave={() => setSelector({ results: [] })}>
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