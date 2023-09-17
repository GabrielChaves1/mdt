import React, { Suspense } from "react";
import { debugData } from "@/utils/debugData";
import { useVisibility } from "@/contexts/VisibilityContext";
import * as S from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider, useTheme } from "styled-components";
import { ThemeManager, useThemeManager } from "./contexts/ThemeContext";
import Aside from "./components/Aside";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import RoutesList from "./routes";
import { ClipLoader } from "react-spinners";

debugData([
	{
		action: 'setVisible',
		data: true
	},
])

const App: React.FC = () => {
	const { visible } = useVisibility();
	const { theme, updateTheme } = useThemeManager();
	const { colors } = useTheme();

	return (
		<>
			<ThemeProvider theme={theme}>
				<ThemeManager>
					<GlobalStyles />
					<AnimatePresence>
						{visible && (
							<motion.div
								initial={{ opacity: 0, y: '100%' }}
								animate={{ opacity: 1, y: '0%', transition: {duration: .4} }}>
								<button onClick={() => updateTheme(theme.title === "light" ? dark : light)}>Switch</button>
								<S.Wrapper>
									<Aside />
									<S.Content>
										<AnimatePresence>
											<Suspense fallback={<ClipLoader color={colors.primary} />}>
												<RoutesList />
											</Suspense>
										</AnimatePresence>
									</S.Content>
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