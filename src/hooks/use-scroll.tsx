import { useCallback } from "react";

const useScroll = (callback: VoidFunction) => {
	const sentinelRef = useCallback(
		(targetRef: HTMLDivElement) => {
			const options = {
				rootMargin: "500px 0px 400px 0px",
				threshold: 0,
			};
			const observerCallback = (entries: IntersectionObserverEntry[]) => {
				if (entries[0].isIntersecting) {
					callback();
				}
			};
			const observer = new IntersectionObserver(observerCallback, options);
			if (targetRef) {
				observer.observe(targetRef);
			} else {
				observer.disconnect();
			}
		},
		[callback]
	);
	return sentinelRef;
};
export default useScroll;
