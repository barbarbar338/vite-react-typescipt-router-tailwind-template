import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import routes from "~react-pages";

export const Router = () => {
	const element = useRoutes(routes);
	return <Suspense fallback={<p>Loading...</p>}>{element}</Suspense>;
};
