import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
	const ref = useRef();

	useEffect(() => {
		const handleDocumentClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handler();
			}
		};

		document.addEventListener("mousedown", handleDocumentClick);

		return () => {
			document.removeEventListener("mousedown", handleDocumentClick);
		};
	});

	return ref;
};
