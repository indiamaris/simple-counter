import Header from "./header/header";
import Info from "./info/info";
import { StartButton } from "./start-button/start-button";

export const Main = () => {
	return (
        <div>
            <Header />
			<Info />
			<StartButton />
		</div>
	);
};