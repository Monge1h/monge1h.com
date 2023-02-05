import React, { useEffect } from "react";

declare var kofiWidgetOverlay: any;

const KoFiWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      kofiWidgetOverlay.draw("monge1h", {
        type: "floating-chat",
        "floating-chat.donateButton.text": "Support me",
        "floating-chat.donateButton.background-color": "#323842",
        "floating-chat.donateButton.text-color": "#fff",
      });
    });
  }, []);

  return <></>;
};

export default KoFiWidget;