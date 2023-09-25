import Banner from '@/components/Banner';
import * as S from './styles';
import Switch from '@/components/Switch';
import { useThemeManager } from '@/contexts/ThemeContext';
import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import ConfigIcon from '@/assets/config.webp';

export default function Configurations() {
  const { theme, updateTheme } = useThemeManager();

  return (
    <S.Wrapper>
      <Banner.Root icon={ConfigIcon}>
        <Banner.Header>
          <Banner.Title>Configurações Locais</Banner.Title>
        </Banner.Header>
      </Banner.Root>

      <S.ConfigList>
        <S.ConfigItem>
          <p>Tema Escuro</p>
          <Switch onCheckedChange={(checked: boolean) => {
            updateTheme(checked ? dark : light)
          }} checked={theme.title === "dark"} />
        </S.ConfigItem>
      </S.ConfigList>
    </S.Wrapper>
  )
}