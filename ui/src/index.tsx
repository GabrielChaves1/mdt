import React, { Suspense } from "react";
import { debugData } from "@/utils/debugData";
import { useVisibility } from "@/contexts/VisibilityContext";
import * as S from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useThemeManager } from "./contexts/ThemeContext";
import Aside from "./components/Aside";
import RoutesList from "./routes";
import Container from "./components/Container";
import Loading from "./components/Loading";
import RadialMenu from "./components/RadialMenu";

debugData([
	{
		action: 'setVisible',
		data: false
	},
])

const App: React.FC = () => {
	const { visible } = useVisibility();
	const { theme } = useThemeManager();

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<AnimatePresence>
					{visible && (
						<motion.div
							initial={{ opacity: 0, y: '100%' }}
							animate={{ opacity: 1, y: '0%', transition: { duration: .4 } }}>
							<S.Wrapper id="wrapper">
								<Aside />
								<S.Content>
									<AnimatePresence>
										<Suspense fallback={
											<Container>
												<Loading />
											</Container>
										}>
											<RoutesList />
										</Suspense>
									</AnimatePresence>
								</S.Content>
							</S.Wrapper>
						</motion.div>
					)}

					<AnimatePresence>
						<RadialMenu />
					</AnimatePresence>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;