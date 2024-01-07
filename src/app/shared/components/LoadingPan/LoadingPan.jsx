import { motion } from "framer-motion";

import "./LoadingPan.css"

export const LoadingPan = () => (
	<div className="loading-container">
		<svg
			width={450}
			height={350}
			viewBox="0 0 450 350"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="LoadingPan">
				<motion.g
					id="Funghis"
					animate={{
						y: [0, 10, -80, 10, 0],
						x: [0, -35, 45, 0],
						rotate: [0, 360],
					}}
					transition={{
						times: [0, 1],
						duration: 1.5,
						repeat: Infinity,
						type: "keyframes",
						ease: "easeInOut",
					}}
				>
					<motion.g
						id="Funghi 1"
						animate={{
							rotate: [0, 360],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1"
							d="M167.271 228.441C166.706 233.331 166.301 236.829 154.033 229.508C140.391 234.071 140.822 230.339 141.387 225.449C141.953 220.558 148.205 217.264 155.353 218.09C162.5 218.916 167.836 223.55 167.271 228.441Z"
							fill="#52331F"
						/>
						<path
							id="Rectangle 3"
							d="M150.291 224.062L158.38 224.997L156.306 242.934C156.143 244.345 154.867 245.356 153.457 245.193C150.4 244.84 148.209 242.076 148.562 239.019L150.291 224.062Z"
							fill="#52331F"
						/>
					</motion.g>
					<motion.g
						id="Funghi 2"
						animate={{
							rotate: [360, 0],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1_2"
							d="M176.382 234.259C180.849 236.328 184.044 237.808 184.198 223.522C195.208 214.264 191.799 212.685 187.332 210.616C182.865 208.547 176.792 212.163 173.768 218.691C170.744 225.22 171.914 232.19 176.382 234.259Z"
							fill="#9E643C"
						/>
						<path
							id="Rectangle 3_2"
							d="M181.504 217.488L178.082 224.877L194.467 232.466C195.755 233.062 197.284 232.502 197.88 231.213C199.174 228.421 197.959 225.109 195.167 223.816L181.504 217.488Z"
							fill="#9E643C"
						/>
					</motion.g>
					<motion.g
						id="Funghi 3"
						animate={{
							rotate: [60, 420],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1_3"
							d="M183.907 241.701C179.846 238.919 176.941 236.928 174.415 250.99C162.02 258.29 165.119 260.414 169.18 263.196C173.241 265.979 179.83 263.422 183.897 257.487C187.964 251.551 187.968 244.484 183.907 241.701Z"
							fill="#CC804E"
						/>
						<path
							id="Rectangle 3_3"
							d="M176.069 257.387L180.671 250.67L165.776 240.465C164.604 239.662 163.004 239.961 162.201 241.133C160.462 243.671 161.11 247.138 163.648 248.877L176.069 257.387Z"
							fill="#CC804E"
						/>
					</motion.g>
				</motion.g>
				<motion.g
					id="Funghis 2"
					animate={{
						y: [10, 10, -150, 10, 10],
						x: [20, -20, 60, 20],
						rotate: [0, 720],
					}}
					transition={{
						times: [0, 1],
						duration: 1.5,
						repeat: Infinity,
						type: "keyframes",
						ease: "easeInOut",
					}}
				>
					<motion.g
						id="Funghi 5"
						animate={{
							rotate: [60, 420],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1_3"
							d="M183.907 241.701C179.846 238.919 176.941 236.928 174.415 250.99C162.02 258.29 165.119 260.414 169.18 263.196C173.241 265.979 179.83 263.422 183.897 257.487C187.964 251.551 187.968 244.484 183.907 241.701Z"
							fill="#52331F"
						/>
						<path
							id="Rectangle 3_3"
							d="M176.069 257.387L180.671 250.67L165.776 240.465C164.604 239.662 163.004 239.961 162.201 241.133C160.462 243.671 161.11 247.138 163.648 248.877L176.069 257.387Z"
							fill="#52331F"
						/>
					</motion.g>
					<motion.g
						id="Funghi 6"
						animate={{
							rotate: [360, 0],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1_2"
							d="M176.382 234.259C180.849 236.328 184.044 237.808 184.198 223.522C195.208 214.264 191.799 212.685 187.332 210.616C182.865 208.547 176.792 212.163 173.768 218.691C170.744 225.22 171.914 232.19 176.382 234.259Z"
							fill="#52331F"
						/>
						<path
							id="Rectangle 3_2"
							d="M181.504 217.488L178.082 224.877L194.467 232.466C195.755 233.062 197.284 232.502 197.88 231.213C199.174 228.421 197.959 225.109 195.167 223.816L181.504 217.488Z"
							fill="#52331F"
						/>
					</motion.g>
					<motion.g
						id="Funghi 5"
						animate={{
							rotate: [0, 360],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1"
							d="M167.271 228.441C166.706 233.331 166.301 236.829 154.033 229.508C140.391 234.071 140.822 230.339 141.387 225.449C141.953 220.558 148.205 217.264 155.353 218.09C162.5 218.916 167.836 223.55 167.271 228.441Z"
							fill="#9E643C"
						/>
						<path
							id="Rectangle 3"
							d="M150.291 224.062L158.38 224.997L156.306 242.934C156.143 244.345 154.867 245.356 153.457 245.193C150.4 244.84 148.209 242.076 148.562 239.019L150.291 224.062Z"
							fill="#9E643C"
						/>
					</motion.g>
				</motion.g>
				<motion.g
					id="Funghis 3"
					animate={{
						y: [10, 10, -80, 10, 10],
						x: [50, 0, 100, 50],
						rotate: [60, 420],
					}}
					transition={{
						times: [0, 1],
						duration: 1.5,
						repeat: Infinity,
						type: "keyframes",
						ease: "easeInOut",
					}}
				>
					<motion.g
						id="Funghi 7"
						animate={{
							rotate: [300, -60],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1_2"
							d="M176.382 234.259C180.849 236.328 184.044 237.808 184.198 223.522C195.208 214.264 191.799 212.685 187.332 210.616C182.865 208.547 176.792 212.163 173.768 218.691C170.744 225.22 171.914 232.19 176.382 234.259Z"
							fill="#CC804E"
						/>
						<path
							id="Rectangle 3_2"
							d="M181.504 217.488L178.082 224.877L194.467 232.466C195.755 233.062 197.284 232.502 197.88 231.213C199.174 228.421 197.959 225.109 195.167 223.816L181.504 217.488Z"
							fill="#CC804E"
						/>
					</motion.g>
					<motion.g
						id="Funghi 8"
						animate={{
							rotate: [60, 420],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1_3"
							d="M183.907 241.701C179.846 238.919 176.941 236.928 174.415 250.99C162.02 258.29 165.119 260.414 169.18 263.196C173.241 265.979 179.83 263.422 183.897 257.487C187.964 251.551 187.968 244.484 183.907 241.701Z"
							fill="#9E643C"
						/>
						<path
							id="Rectangle 3_3"
							d="M176.069 257.387L180.671 250.67L165.776 240.465C164.604 239.662 163.004 239.961 162.201 241.133C160.462 243.671 161.11 247.138 163.648 248.877L176.069 257.387Z"
							fill="#9E643C"
						/>
					</motion.g>
					<motion.g
						id="Funghi 9"
						animate={{
							rotate: [0, 360],
						}}
						transition={{
							times: [0, 1],
							duration: 1.5,
							repeat: Infinity,
							type: "keyframes",
							ease: "easeInOut",
						}}
					>
						<path
							id="Ellipse 1"
							d="M167.271 228.441C166.706 233.331 166.301 236.829 154.033 229.508C140.391 234.071 140.822 230.339 141.387 225.449C141.953 220.558 148.205 217.264 155.353 218.09C162.5 218.916 167.836 223.55 167.271 228.441Z"
							fill="#7A4D2F"
						/>
						<path
							id="Rectangle 3"
							d="M150.291 224.062L158.38 224.997L156.306 242.934C156.143 244.345 154.867 245.356 153.457 245.193C150.4 244.84 148.209 242.076 148.562 239.019L150.291 224.062Z"
							fill="#7A4D2F"
						/>
					</motion.g>
				</motion.g>
				<motion.g
					id="Pan"
					animate={{
						y: [0, 10, -20, 10, 0],
						x: [0, -50, 10, 0],
						rotate: [0, -5, 30, 0, -5, 0],
					}}
					transition={{
						times: [0, 1],
						duration: 1.5,
						repeat: Infinity,
						type: "keyframes",
						ease: "easeInOut",
					}}
				>
					<path
						id="Rectangle 1"
						d="M132.231 239.699C132.231 238.658 133.075 237.814 134.116 237.814H309.342C310.383 237.814 311.227 238.658 311.227 239.699C311.227 265.72 290.133 286.814 264.111 286.814H179.346C153.325 286.814 132.231 265.72 132.231 239.699Z"
						fill="#0E1116"
					/>
					<rect
						id="Rectangle 2"
						x={284.231}
						y={242.314}
						width={109}
						height={10}
						rx={5}
						fill="#0E1116"
					/>
				</motion.g>
			</g>
		</svg>
	</div>
);
