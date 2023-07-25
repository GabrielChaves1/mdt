import React from "react";
import { debugData } from "@/utils/debugData";
import { useVisibility } from "@/contexts/VisibilityContext";
import * as S from "./styles";
import RoutesList from "./routes";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { ThemeManager, useThemeManager } from "./contexts/ThemeContext";
import Aside from "./components/Aside";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import SelectMenu from "./components/SelectMenu";

debugData([
	{
		action: 'setVisible',
		data: true
	},
])

const App: React.FC = () => {
	const { visible } = useVisibility();
	const { theme, updateTheme } = useThemeManager();

	return (
		<>
			<ThemeProvider theme={theme}>
				<ThemeManager>
					<GlobalStyles />
					<AnimatePresence>
						{visible && (
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1, transition: { duration: .3 } }}
								exit={{ opacity: 0, scale: 0 }}>
								<button onClick={() => updateTheme(theme.title === "light" ? dark : light)}>Switch</button>
								<S.Wrapper>
									<Aside />
									<S.Content>
										<S.Header>
											<SelectMenu.Root>
												<SelectMenu.Trigger>
													<SelectMenu.Value placeholder="Selecione uma guarnição..."/>
												</SelectMenu.Trigger>
											</SelectMenu.Root>
										</S.Header>

									</S.Content>
									{/* <RoutesList /> */}
								</S.Wrapper>
							</motion.div>
						)}
					</AnimatePresence>
				</ThemeManager>
			</ThemeProvider>
		</>
	);
}

export default App;