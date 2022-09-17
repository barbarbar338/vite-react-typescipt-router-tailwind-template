import type { FC } from "react";
import { Helmet } from "react-helmet";

export interface ILayout {
	children: React.ReactNode;
	title: string;
}

export const Layout: FC<ILayout> = ({ children, title }) => {
	return (
		<>
			<Helmet>
				<title>{title} - Vite + React + TS + Router + Tailwind</title>
			</Helmet>
			{children}
		</>
	);
};
