import heroImgUrl from "@assets/hero-section-img.png";

const HeroSection = () => {
	return (
		<section className="h-[calc(100vh-85px)] bg-gray-100">
			<div className="container flex h-full -translate-y-10 items-center justify-center px-24">
				<div className="flex max-w-[600px] flex-col gap-4">
					<h1 className="break-words text-6xl font-bold">
						Welcome to my full&#x2011;stack blog website.
					</h1>
					<p className="text-3xl text-gray-700">
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
