
import React, { useState } from "react";
import Card from "./Card";

function Foreground() {
    const ref = useRef(null)
  const data = [
    {
      desc: "naughty horea kk",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "naughty horea kk",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "naughty horea kk",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
  ];

  return (
    <div ref = {reference} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-7 flex-wrap p-5 ">
     {data.map((item, index)=>(
 <Card data = {item} reference = {ref}/>
     ))}
    </div>
  );
};

export default Foreground;
