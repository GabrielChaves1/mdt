import React, { Suspense } from "react";
import { debugData } from "@/utils/debugData";
import * as S from "./styles";
import { AnimatePresence, motion } from "framer-motion";
import Aside from "./components/Aside";
import RoutesList from "./routes";
import Container from "./components/Container";
import Loading from "./components/Loading";
import RadialMenu from "./components/RadialMenu";
import { useVisibility } from "./contexts/VisibilityContext";

debugData<any>([
	{
		action: 'setVisible',
		data: true
	},
])

const App: React.FC = () => {
	const { visible } = useVisibility();

	return (
		<>
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
		</>
	);
}

export default App;