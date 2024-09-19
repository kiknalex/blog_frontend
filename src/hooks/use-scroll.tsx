import { MutableRefObject, useEffect } from "react";

const useScroll = (
	callback: VoidFunction,
	targetRef: MutableRefObject<HTMLElement | null>
) => {
	useEffect(() => {
		if (targetRef.current) {
			const targetElement = targetRef.current;
			const options = {
				threshold: 1,
			};
			const observerCallback = (entries: IntersectionObserverEntry[]) => {
				if (entries[0].isIntersecting) {
					console.log("test");
					callback();
				}
			};
			const observer = new IntersectionObserver(observerCallback, options);
			observer.observe(targetElement);
			return () => {
				observer.unobserve(targetElement);
			};
		}
	}, [targetRef, callback]);
};
export default useScroll;
