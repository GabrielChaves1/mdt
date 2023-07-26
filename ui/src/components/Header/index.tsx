import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from '@radix-ui/react-icons';
import SelectMenu from '@/components/SelectMenu';
import * as S from './styles';

export default function Header() {
  return (
    <>
      <S.Container>
        <SelectMenu.Root>
          <SelectMenu.Trigger>
            <SelectMenu.Value placeholder="Selecione..." />
            <SelectMenu.Icon>
              <ChevronDownIcon />
            </SelectMenu.Icon>
          </SelectMenu.Trigger>

          <SelectMenu.Portal>
            <SelectMenu.Content position='popper' sideOffset={5}>
              <SelectMenu.ScrollUpButton>
                <ChevronUpIcon />
              </SelectMenu.ScrollUpButton>
              <SelectMenu.Viewport>
                <SelectMenu.Group>
                  <SelectMenu.Label>Unidades</SelectMenu.Label>
                  <SelectMenu.Item  value='pmerj'>
                    <SelectMenu.ItemText>PMERJ</SelectMenu.ItemText>
                  </SelectMenu.Item>
                  <SelectMenu.Item value='civil'>
                    <SelectMenu.ItemText>Policia Civil</SelectMenu.ItemText>
                  </SelectMenu.Item>
                  <SelectMenu.Item value='federal'>
                    <SelectMenu.ItemText>Policia Federal</SelectMenu.ItemText>
                  </SelectMenu.Item>
                  <SelectMenu.Item value='coe'>
                    <SelectMenu.ItemText>C.O.E</SelectMenu.ItemText>
                  </SelectMenu.Item>
                  <SelectMenu.Item value='rocam'>
                    <SelectMenu.ItemText>ROCAM</SelectMenu.ItemText>
                  </SelectMenu.Item>
                </SelectMenu.Group>
              </SelectMenu.Viewport>
            </SelectMenu.Content>
          </SelectMenu.Portal>
        </SelectMenu.Root>
      </S.Container>
    </>
  )
}