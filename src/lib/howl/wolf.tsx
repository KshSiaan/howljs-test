import React, { CSSProperties } from "react";

interface WolfType {
  variant?: "success" | "error" | "warn" | "info";
}

export default function Wolf({ variant = "info" }: WolfType) {
  const successStyle = {
    backgroudColor: "green",
  };

  const infoStyle = {
    backgroundColor: "#aaaaff",
    color: "black",
  };

  return (
    <div
      className="fixed h-32 w-[30dvw] rounded-lg bottom-4 right-4 !p-4 border bg-background"
      style={
        variant == "success"
          ? (successStyle as CSSProperties)
          : (infoStyle as CSSProperties)
      }
    >
      <h4 className="font-bold">Title</h4>
      <p className="text-sm overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id eos
        voluptatem quaerat incidunt a cum exercitationem, rerum nemo dignissimos
        commodi, aliquid nulla eligendi magni eum accusantium laudantium
        pariatur sint?
      </p>
    </div>
  );
}
