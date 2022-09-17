import type { FC } from "react";
import { Hero } from "@components/Hero";
import { Layout } from "@components/Layout";

const HomePage: FC = () => {
	return (
		<Layout title="Home">
			<Hero />
		</Layout>
	);
};

export default HomePage;
