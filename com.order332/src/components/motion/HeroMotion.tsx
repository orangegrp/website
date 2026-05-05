import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroMotion() {
	const reduceMotion = useReducedMotion();
	const [daysActive, setDaysActive] = useState<number | null>(null);

	useEffect(() => {
		const startedAt = Date.UTC(2020, 8, 6);
		const msPerDay = 1000 * 60 * 60 * 24;
		setDaysActive(Math.floor((Date.now() - startedAt) / msPerDay));
	}, []);

	return (
		<motion.div
			className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
			initial={reduceMotion === true ? false : { opacity: 0, y: 20, scale: 0.97 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
		>
			<div className="relative z-10 mx-4 flex max-w-2xl flex-col items-center gap-8 px-8 py-14 text-center sm:px-16 sm:py-20">
				<img
					src="/polygon.svg"
					alt="332"
					className="h-20 w-20 sm:h-24 sm:w-24"
					fetchPriority="high"
					width={96}
					height={96}
					style={{
						filter: "drop-shadow(0 0 16px oklch(1 0 0 / 15%))",
					}}
				/>

				<div className="flex flex-col items-center gap-4">
					<div className="text-muted-foreground flex items-center gap-2 text-xs tracking-widest uppercase">
						<span suppressHydrationWarning>
							{daysActive !== null
								? `Active for ${daysActive} days`
								: "\u00a0"}
						</span>
						<span className="opacity-30">·</span>
						<span>EST. 2020</span>
					</div>

					<h1 className="text-foreground text-3xl leading-snug tracking-wider sm:text-4xl md:text-5xl">
						332<span className="blink-cursor">_</span>
					</h1>

					<p className="text-muted-foreground max-w-md text-sm leading-relaxed sm:text-base">
						Community. Knowledge. Friendship.
					</p>
				</div>

				<p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
					Welcome to 332: Discord's best invite-only hub for all things cybersecurity, gaming and unrivalled freedom. Keep scrolling to learn more about what you're missing out on.
				</p>

				<div className="flex flex-wrap items-center justify-center gap-3">
					<a
						href="/about"
						className="glass-button glass-button-glass text-foreground inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm tracking-wider no-underline transition-all"
					>
						About us
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden={true}
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</a>
					<a
						href="/blog"
						className="glass-button text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm tracking-wider no-underline transition-all"
					>
						Read the Blog
					</a>
				</div>
			</div>

			<div
				className="flex flex-col items-center gap-2 text-xs tracking-widest uppercase opacity-40"
				aria-hidden={true}
			>
				<span>Scroll</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-3.5 w-3.5 animate-bounce"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			</div>
		</motion.div>
	);
}
