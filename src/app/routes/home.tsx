import HeroSection from "@/widgets/hero-section/hero-section";
import PostsList from "@/widgets/posts-list/posts-list";

const Home = () => {
	return (
		<main className="bg-gray-50">
			<HeroSection />
			<PostsList />
		</main>
	);
};

export default Home;
