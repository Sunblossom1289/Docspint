import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
function Card ({ data , reference }){
  return (
    <motion.div drag dragConstraints ={reference} whileDrag ={{scale:1.1}} dragElastic= {0.3} className=" relative flex-shrink-0 w-60 h-72 bg-zinc-700/40 rounded-[45px] text-white  py-10 overflow-hidden">
      <span className="absolute px-8">
        <FaRegFileAlt />
      </span>
      <p className="text-xs  px-7 mt-6  font-semibold leading-tighter">
        {data.desc}
      </p>
      <div className="footer absolute  bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8  py-3">
          <h5>{data.filesize}</h5>
          <span className="w-5 h-5 bg-slate-500 rounded-[50%]  flex items-center justify-center ">
            {data.close ? (
              <IoMdClose />
            ) : (
              <MdOutlineFileDownload size="0.9em" color="black" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-3 ${data.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-md  font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
