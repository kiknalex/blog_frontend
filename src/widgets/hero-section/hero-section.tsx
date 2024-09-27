import heroImgUrl from "@assets/hero-section-img.png";

const HeroSection = () => {
	return (
		<section className="h-[calc(100vh-85px)] bg-gray-100">
			<div className="container flex h-full flex-col items-center justify-center gap-24 md:flex-row md:gap-4 md:pb-24 xl:px-24">
				<div className="flex  max-w-[600px] flex-col gap-4">
					<h1 className="break-words text-2xl font-bold xxs:text-4xl md:text-5xl lg:text-6xl">
						Welcome to my full&#x2011;stack blog website.
					</h1>
					<p className="text-lg text-gray-700 xxs:text-3xl">
						why not learn how to backend?
					</p>
				</div>
				<div>
					<img
						alt=""
						className="w-auto"
						height="323"
						src={heroImgUrl}
						width="476"
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
