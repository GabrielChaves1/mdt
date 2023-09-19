import React, { Suspense } from "react";
import { debugData } from "@/utils/debugData";
import { useVisibility } from "@/contexts/VisibilityContext";
import * as S from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider, useTheme,  } from "styled-components";
import { useThemeManager } from "./contexts/ThemeContext";
import Aside from "./components/Aside";
import RoutesList from "./routes";
import { ClipLoader } from "react-spinners";
import Container from "./components/Container";

debugData([
	{
		action: 'setVisible',
		data: true
	},
])

const App: React.FC = () => {
	const { visible } = useVisibility();
	const { theme } = useThemeManager();
	const { colors } = useTheme();

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AnimatePresence>
					{visible && (
						<motion.div
							initial={{ opacity: 0, y: '100%' }}
							animate={{ opacity: 1, y: '0%', transition: { duration: .4 } }}>
							<S.Wrapper>
								<Aside />
								<S.Content>
									<AnimatePresence>
										<Suspense fallback={
											<Container>
												<ClipLoader color={colors.primary} />
											</Container>
										}>
											<RoutesList />
										</Suspense>
									</AnimatePresence>
								</S.Content>
							</S.Wrapper>
						</motion.div>
					)}
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;