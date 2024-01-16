"use client";

import { toast } from "sonner";

import { useEffect } from "react";

function ViewerCount() {
	useEffect(() => {
		const viewerCountDate = localStorage.getItem("viewerCount");

		const oneHourInMilliseconds = 60 * 60 * 1000;
		const currentTime = Date.now();

		const isOneHourPassed = true

		if (!viewerCountDate || isOneHourPassed) {
			fetch(
				`${process.env.NEXT_PUBLIC_VIEWS_API}/viewer-count`,
				{
					method: "POST",
				}
			)
				.then((res) => res.json())
				.then((res) => {
					localStorage.setItem("viewerCount", Date.now().toString());
					toast.info(`👋 Hello there! You're visitor number #${res.views} to my portfolio. Thanks for dropping by!`, {
						position: "top-center",
					});
				});
		}
	}, []);

	return null;
}

export default ViewerCount;
