import { InputHTMLAttributes, Reducer, useEffect, useReducer, useRef, useState } from 'react';
import * as S from './styles';
import { useTheme } from 'styled-components';
import { ChevronDown, ChevronUp, LoaderIcon, X } from 'lucide-react';

const WAITING_TIME = 800

interface ItemProps {
  id: number
  label: string
}

interface SelectorFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onUpdate: (next: ItemProps[]) => void
  onQuery: () => Promise<ItemProps[]>
}

type SelectorStates = {
  finding: boolean
  results: ItemProps[]
  selectedItems: ItemProps[]
}

export default function SelectorField({ onUpdate, onQuery, ...props }: SelectorFieldProps) {
  const { colors } = useTheme();

  const [{
    finding,
    results, 
    selectedItems
  }, setSelector] = useReducer<Reducer<SelectorStates, Partial<SelectorStates>>>(
    (prev: SelectorStates, next: Partial<SelectorStates>) => {
      return { ...prev, ...next }
    },
    {
      finding: false,
      results: [],
      selectedItems: []
    }
  )

  const hasResults = results.length > 0;
  const noItemsSelected = selectedItems.length <= 0;

  useEffect(() => onUpdate(selectedItems), [selectedItems])

  async function handleFindList() {
    setSelector({ finding: true });

    const res = await onQuery().catch(() => {
      setSelector({ finding: false });
      return [];
    });
    
    setSelector({ results: res, finding: false });
  }

  function handleSelectQueryItem(item: ItemProps) {
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
        <S.SelectedList onClick={handleFindList}>
          {(noItemsSelected) ? (
            <p>Nada anexado...</p>
          ) : (
            <>
              {selectedItems?.map(item => (
                <S.Item key={item.id}>
                  {item.id} - {item.label}
                  <button onClick={() => handleRemoveItem(item.id)}><X size={'1rem'} color='#FFF'/></button>
                </S.Item>
              ))}
            </>
          )}
        </S.SelectedList>

        {hasResults && (
          <S.QueryListContainer>
            <S.QueryList>
              {results.map((item) => (
                <S.QueryItem 
                  disabled={selectedItems.find(el => el.id === item.id) ? true : false} 
                  key={item.id} onClick={() => handleSelectQueryItem(item)}>
                    {item.id} - {item.label}
                  </S.QueryItem>
              ))}
            </S.QueryList>
          </S.QueryListContainer>
        )}

        {finding ? (
          <S.Button disabled>
            <LoaderIcon size={'1.6rem'} color={colors.icon} />
          </S.Button>
        ) : (
          <>
            {hasResults ? (
              <S.Button onClick={() => setSelector({ finding: false, results: [] })}>
                <ChevronUp size={'1.6rem'} color={colors.icon} />
              </S.Button>
            ) : (
              <S.Button onClick={handleFindList}>
                <ChevronDown size={'1.6rem'} color={colors.icon} />
              </S.Button>
            )}
          </>
        )}
      </S.Area>
    </>
  )
}