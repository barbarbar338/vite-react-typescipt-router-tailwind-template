import { type FC, useState } from "react";
import { ArrowDown, ArrowUp } from "react-feather";

// template from https://tailwindcomponents.com/component/modern-saas-hero-component
export const Hero: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<section className="py-24 flex items-center min-h-screen justify-center bg-white">
			<div className="mx-auto max-w-[43rem]">
				<div className="text-center">
					<p className="text-lg font-medium leading-8 text-indigo-600/95">
						Vite + React + TypeScript + Tailwind + Router Template
					</p>
					<h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
						Get started easily <br /> with Vite, React & Tailwind
					</h1>
					<p className="mt-3 text-lg leading-relaxed text-slate-400">
						Read{" "}
						<a
							href="https://vitejs.dev/"
							target="_blank"
							className="text-green-500"
						>
							Vite
						</a>
						,{" "}
						<a
							href="https://reactjs.org/"
							target="_blank"
							className="text-blue-500"
						>
							React
						</a>{" "}
						and{" "}
						<a
							href="https://tailwindcss.com/"
							target="_blank"
							className="text-purple-500"
						>
							Tailwind
						</a>{" "}
						docs to learn more.
					</p>
					<p className="mt-3 text-lg leading-relaxed text-slate-400">
						Edit{" "}
						<code className="bg-gray-200 px-1 rounded text-purple-500">
							src/components/Hero/index.tsx
						</code>{" "}
						to see changes!
					</p>
					<p className="text-slate-500 text-xl">Count: {count}</p>
				</div>

				<div className="mt-6 flex items-center justify-center gap-4">
					<button
						onClick={() => setCount(count + 1)}
						className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700 flex"
					>
						<ArrowUp className="mr-2" /> Increment
					</button>
					<button
						onClick={() => setCount(count - 1)}
						className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50 flex"
					>
						<ArrowDown className="mr-2" /> Decrement
					</button>
				</div>
			</div>
		</section>
	);
};
