"use client";

import { motion } from "framer-motion";

const page = () => {
	return (
		<>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
				className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
			>
				<div className="p-2 lg:mx-4">
					<div className="lg:p-6 p-3">
						<div className="flex justify-between w-full">
							<div className="flex items-center gap-x-2">
								<div className="w-[6px] h-[6px] rounded-full bg-[#6b6b6b]" />
								<motion.h1
									initial={{ x: 100, opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: {
											duration: 0.2,
											delay: 0.4,
										},
									}}
									className="text-neutral-700 dark:text-[#C0C0C0] max:text-xl"
								>
									Design Engineer
								</motion.h1>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default page;
