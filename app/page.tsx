import { Github } from "lucide-react";
import Image from "next/image";
import { PageEffects } from "@/components/page-effects";
import { Header } from "@/components/header";
import { GlassCard, MousePositionEffect } from "@/components/ui/glass-card";

const tools = [
	{
		name: "JavaScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
	},
	{
		name: "TypeScript",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
	},
	{
		name: "Python",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
	},
	{
		name: "Go",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
	},
	{
		name: "Rust",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
	},
	{
		name: "C++",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
	},
	{
		name: "Solidity",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
	},
	{
		name: "Ethereum",
		logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Ethereum_logo.svg",
	},
	{
		name: "Next.js",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
	},
	{
		name: "Node.js",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
	},
	{
		name: "Django",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
	},
	{
		name: "Solana",
		logo: "https://solana.com/src/img/branding/solanaLogoMark.svg",
	},
	{
		name: "Hardhat",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
	},
	{
		name: "Docker",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
	},
	{
		name: "Git",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
	},
	{
		name: "PostgreSQL",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
	},
	{
		name: "MongoDB",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
	},
	{
		name: "Firebase",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
	},
];

const tools2 = [
	{
		name: "React",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	},
	{
		name: "Vue.js",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
	},
	{
		name: "Angular",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
	},
	{
		name: "TailwindCSS",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		name: "HTML5",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
	},
	{
		name: "CSS3",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
	},
	{
		name: "Redux",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
	},
	{
		name: "GraphQL",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
	},
	{
		name: "Prisma",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
	},
	{
		name: "MySQL",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
	},
	{
		name: "SQLite",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
	},
	{
		name: "Redis",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
	},
];

const tools3 = [
	{
		name: "AWS",
		logo: "https://cdn.brandfetch.io/idVoqFQ-78/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
	},
	{
		name: "Kubernetes",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
	},
	{
		name: "NGINX",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
	},
	{
		name: "Linux",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
	},
	{
		name: "Sui",
		logo: "https://cdn.simpleicons.org/sui/6FBCF0",
	},
	{
		name: "Uniswap",
		logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Uniswap_Logo.svg",
	},
	{
		name: "Vercel",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
	},
	{
		name: "Anchor",
		logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2314b8a6'><path d='M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1 5V9h3a1 1 0 1 1 0 2h-3v4.5A6.5 6.5 0 0 0 19.5 9a1 1 0 1 1 2 0 8.5 8.5 0 0 1-8 8.48V21a1 1 0 1 1-2 0v-3.52A8.5 8.5 0 0 1 2.5 9a1 1 0 1 1 2 0A6.5 6.5 0 0 0 11 15.5V11H8a1 1 0 1 1 0-2h3V7h2Z'/></svg>",
	},
	{
		name: "Cloudflare",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
	},
	{
		name: "Jest",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
	},
	{
		name: "NextJs",
		logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tabler-icons_brand-nextjs.svg/640px-Tabler-icons_brand-nextjs.svg.png",
	},
	{
		name: "ESLint",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg",
	},
	{
		name: "Playwright",
		logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-plain.svg",
	},
];

const interests = [
	{
		title: "Open Source",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-12 h-12"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M12 3a9 9 0 1 0 9 9h-4a5 5 0 1 1-5-5V3z" />
			</svg>
		),
	},
	{
		title: "Running",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-12 h-12"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M13 5a2 2 0 1 1 2 2M4 22l5-4 3-6 4 2 3 6" />
			</svg>
		),
	},
	{
		title: "Gaming",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-12 h-12"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M6 12h12M9 9v6m6-6v6" />
			</svg>
		),
	},
	{
		title: "Reading",
		icon: (
			<svg
				viewBox="0 0 24 24"
				className="w-12 h-12"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M4 19a6 6 0 0 1 8-5.29A6 6 0 0 1 20 19V6a6 6 0 0 0-8 5.29A6 6 0 0 0 4 6z" />
			</svg>
		),
	},
];

const projects = [
	{
		title: "Staking DApp",
		description:
			"A Web3 dApp for token staking and rewards on Sepolia, featuring a custom algorithm for automated reward calculation.",
		live: "https://staking-dapp-7.vercel.app/",
		github: "https://staking-dapp-7.vercel.app/",
		techs: ["Solidity", "React", "Web3", "Sepolia"],
	},
	{
		title: "NFT Marketplace",
		description:
			"A full-featured marketplace for creating, minting, and trading NFTs, with decentralized metadata storage via IPFS.",
		live: null,
		github: "https://github.com/gks2022004/NFTMarketPlace",
		techs: ["Solidity", "React", "IPFS", "Node.js"],
	},
	{
		title: "Crypto Wallet",
		description:
			"A secure crypto wallet with 24-word seed phrase generation for non-custodial management and ETH transfers.",
		live: "https://cryptowallet-virid.vercel.app/",
		github: "https://cryptowallet-virid.vercel.app/",
		techs: ["React", "Web3", "Ethereum"],
	},
	{
		title: "Q-Notes",
		description:
			"A cross-platform, end-to-end encrypted notes app implementing post-quantum secure encryption (Kyber-768).",
		live: null,
		github: "https://github.com/gks2022004/Q-NOTES",
		techs: ["React Native", "Encryption", "Kyber-768"],
	},
];

export default function Page() {
	return (
		<div className="max-w-4xl mx-auto px-6 py-6">
			<PageEffects />
			<MousePositionEffect />
			<Header />

			{/* About */}
			<section id="about" data-reveal className="mb-20">
				<GlassCard>
					<div className="md:flex md:items-center md:space-x-12">
						<div className="md:w-2/3">
							<h1 className="text-4xl font-bold mb-1 text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.12)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
								Gaurav Kumar Singh
							</h1>
							<p className="text-base text-foreground/80 mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.25)]">
								Blockchain Developer
							</p>
							<div className="text-lg text-foreground/90 space-y-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.08)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.25)]">
								<p>
									I build secure, scalable, and innovative decentralized
									applications. I enjoy solving complex Web3 problems and
									shipping user-centric products.
								</p>
								<p></p>
							</div>
						</div>
						<div className="flex-shrink-0 mt-8 md:mt-0 md:w-1/3 flex justify-center">
							<div className="relative h-48 w-48 rounded-full ring-2 ring-border shadow-lg shadow-black/10 dark:shadow-black/40 overflow-hidden">
								<Image
									src="/hero.jpeg"
									alt="Portrait of Gaurav Kumar Singh"
									fill
									sizes="192px"
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</GlassCard>
			</section>

			{/* Tools & Technologies */}
			<section id="tools" data-reveal className="mb-20">
				<h2 className="text-2xl font-bold mb-8 text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.15)]">
					Tools and Technologies
				</h2>

				{/* Row 1 */}
				<div className="overflow-hidden relative group py-3 mask-x-fade">
					<div className="marquee flex min-w-full w-max animate-[scroll-left_18s_linear_infinite] hover:[animation-play-state:paused] gap-4">
						{tools
							.concat(tools)
							.map((t, i) => (
								<div
									key={`r1-${i}`}
									className="group flex-shrink-0 w-[150px] h-[150px] flex flex-col items-center justify-center bg-secondary text-secondary-foreground rounded-xl text-center hover:-translate-y-1.5 transition shadow-sm p-3"
								>
									<div className="h-10 w-16 flex items-center justify-center">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={t.logo}
											alt={`${t.name} Logo`}
											className="h-10 w-16 object-contain opacity-60 grayscale saturate-50 transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
											loading="lazy"
										/>
									</div>
									<span className="mt-3 text-xs sm:text-sm text-secondary-foreground">
										{t.name}
									</span>
								</div>
							))}
					</div>
				</div>

				{/* Row 2 */}
				<div className="overflow-hidden relative group py-3 mask-x-fade">
					<div className="marquee flex min-w-full w-max animate-[scroll-left_18s_linear_infinite_reverse] hover:[animation-play-state:paused] gap-4">
						{tools2
							.concat(tools2)
							.map((t, i) => (
								<div
									key={`r2-${i}`}
									className="group flex-shrink-0 w-[150px] h-[150px] flex flex-col items-center justify-center bg-secondary text-secondary-foreground rounded-xl text-center hover:-translate-y-1.5 transition shadow-sm p-3"
								>
									<div className="h-10 w-16 flex items-center justify-center">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={t.logo}
											alt={`${t.name} Logo`}
											className="h-10 w-16 object-contain opacity-60 grayscale saturate-50 transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
											loading="lazy"
										/>
									</div>
									<span className="mt-3 text-xs sm:text-sm text-secondary-foreground">
										{t.name}
									</span>
								</div>
							))}
					</div>
				</div>

				{/* Row 3 */}
				<div className="overflow-hidden relative group py-3 mask-x-fade">
					<div className="marquee flex min-w-full w-max animate-[scroll-left_18s_linear_infinite] hover:[animation-play-state:paused] gap-4">
						{tools3
							.concat(tools3)
							.map((t, i) => (
								<div
									key={`r3-${i}`}
									className="group flex-shrink-0 w-[150px] h-[150px] flex flex-col items-center justify-center bg-secondary text-secondary-foreground rounded-xl text-center hover:-translate-y-1.5 transition shadow-sm p-3"
								>
									<div className="h-10 w-16 flex items-center justify-center">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img
											src={t.logo}
											alt={`${t.name} Logo`}
											className="h-10 w-16 object-contain opacity-60 grayscale saturate-50 transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100 group-hover:drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
											loading="lazy"
										/>
									</div>
									<span className="mt-3 text-xs sm:text-sm text-secondary-foreground">
										{t.name}
									</span>
								</div>
							))}
					</div>
				</div>
			</section>

			{/* Experience */}
			<section id="experience" data-reveal className="mb-20">
				<h2 className="text-2xl font-bold mb-8 text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.15)]">
					Experience
				</h2>
				<div className="space-y-6">
					<GlassCard>
						<article>
							<div className="flex items-start gap-4">
								<div className="h-16 w-16 rounded-lg border bg-secondary flex items-center justify-center flex-shrink-0">
									<Image
										src="/quranium.png"
										alt="Quranium logo"
										width={40}
										height={40}
										className="opacity-80"
									/>
								</div>
								<div className="flex-1">
									<div className="flex justify-between items-baseline">
										<h3 className="text-lg font-semibold">Quranium</h3>
										<div className="text-xs sm:text-sm text-card-foreground/70">
											Oct 2024 – Present
										</div>
									</div>
									<p className="text-sm sm:text-base text-card-foreground/80 italic">
										Blockchain Developer (Remote)
									</p>
									<ul className="list-disc list-inside mt-2 text-sm text-card-foreground/80 space-y-1">
										<li>
											Contributed to the integration of multi-chain in Token-Bound
											Accounts (Q-TBA).
										</li>
										<li>
											Built the first prototype of the Q-Safe wallet, implementing
											core buy/sell functionality.
										</li>
										<li>
											Integrated quantum-safe smart contracts with the Q-Dex frontend.
										</li>
									</ul>
								</div>
							</div>
						</article>
					</GlassCard>
				</div>
			</section>

			{/* Projects */}
			<section id="projects" data-reveal className="mb-20">
				<h2 className="text-2xl font-bold mb-8 text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.15)]">
					Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{projects.map((p) => {
						const isGithub = p.github && /https?:\/\/github\.com\//.test(p.github);
						return (
							<GlassCard key={p.title}>
								<svg
									className="w-6 h-6 mb-2 text-card-foreground"
									fill="none"
									stroke="currentColor"
									strokeWidth={1.5}
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 7.125A2.25 2.25 0 014.5 4.875h15A2.25 2.25 0 0121.75 7.125v10.5A2.25 2.25 0 0119.5 19.875h-15A2.25 2.25 0 012.25 17.625V7.125z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 4.875v15m-4.5-15h9"
									/>
								</svg>
								<h3 className="font-semibold text-lg">{p.title}</h3>
								<p className="text-sm text-card-foreground/75 mb-3">
									{p.description}
								</p>
								{p.techs?.length ? (
									<div className="flex flex-wrap gap-2 mb-3">
										{p.techs.map((t) => (
											<span
												key={t}
												className="bg-secondary text-secondary-foreground text-[0.7rem] font-medium px-2 py-[2px] rounded-full"
											>
												{t}
											</span>
										))}
									</div>
								) : null}
								<div className="flex items-center gap-2 mt-auto">
									{p.live && (
										<a
											href={p.live}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center px-3 py-1.5 rounded-md bg-card-foreground text-card text-sm font-medium shadow-sm hover:opacity-90"
										>
											Live Demo
										</a>
									)}
									{isGithub && (
										<a
											href={p.github!}
											target="_blank"
											rel="noreferrer"
											aria-label="GitHub"
											className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-secondary border"
										>
											<Github className="w-4 h-4" />
										</a>
									)}
								</div>
							</GlassCard>
						);
					})}
				</div>
			</section>

			<section id="interests" data-reveal className="mb-16">
				<h2 className="text-2xl font-bold mb-8 text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.15)]">
					Beyond the Keyboard
				</h2>
				<div className="overflow-hidden relative group py-3">
					<div className="flex min-w-full w-max animate-[scroll-left_15s_linear_infinite] hover:[animation-play-state:paused] gap-6">
						{interests
							.concat(interests)
							.map((item, i) => (
								<GlassCard
									key={i}
									className="text-center w-[250px] flex-shrink-0"
								>
									<div className="mx-auto mb-2 opacity-80">{item.icon}</div>
									<h3 className="font-semibold text-lg">{item.title}</h3>
									<p className="text-sm text-card-foreground/80">
										Exploring this area passionately.
									</p>
								</GlassCard>
							))}
					</div>
				</div>
			</section>

			<footer className="text-center text-foreground text-sm py-8 [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
				<div className="flex items-center justify-center gap-4 mb-2">
					<a
						href="https://github.com/gks2022004"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className="hover:text-foreground"
					>
						<svg
							viewBox="0 0 24 24"
							className="w-5 h-5"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.05-1.61-4.05-1.61-.55-1.39-1.34-1.77-1.34-1.77-1.1-.75.09-.74.09-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .5Z" />
						</svg>
					</a>
					<a
						href="https://x.com/i_amgauravkumar"
						target="_blank"
						rel="noreferrer"
						aria-label="X"
						className="hover:text-foreground"
					>
						<svg
							viewBox="0 0 24 24"
							className="w-5 h-5"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M13.83 10.29 20.5 3h-1.64l-5.77 6.35L8.3 3H3.02l6.98 10.02L3.02 21h1.64l6.21-6.83L15.7 21h5.28l-7.15-10.71Zm-2.2 2.42-.72-.99L5 4.17h2.7l4.61 6.34.72.99 6.16 8.49h-2.7l-4.86-6.28Z" />
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/imgauravkumar7/"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="hover:text-foreground"
					>
						<svg
							viewBox="0 0 24 24"
							className="w-5 h-5"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.83v2.19h.05C12.2 8.9 13.86 8 16.1 8 21 8 22 11.26 22 15.63V24h-4v-7.14c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V24h-4V8z" />
						</svg>
					</a>
				</div>
				<p>
					&copy; 2025 Gaurav Kumar Singh. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
