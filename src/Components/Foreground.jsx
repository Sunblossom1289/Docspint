import { useRef } from "react";
import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "no puedes leer esto",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Believe in Yourself",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "You got this all",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-7 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
