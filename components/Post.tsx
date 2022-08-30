import type { NextPage } from "next";

type PostType = {
  title?: string;
  sneakPeak?: string;
  timeToRead?: string;
  createdOn?: string;
  image?: string;
};

const Post: NextPage<PostType> = ({
  title,
  sneakPeak,
  timeToRead,
  createdOn,
  image,
}) => {
  return (
    <div className="self-stretch h-[304px] shrink-0 flex flex-col items-start justify-start gap-[4px] cursor-pointer text-left text-lg text-white font-roc-grotesk lg:w-full">
      <div className="flex-[1] self-stretch [border:0.5px_solid_rgba(255,_255,_255,_0.24)] box-border relative overflow-hidden flex flex-row items-center justify-center">
        <img
          className="relative w-[587px] h-[196px] shrink-0 object-cover"
          alt=""
          src={image}
        />
      </div>
      <div className="self-stretch bg-gray-400 [border:0.5px_solid_#44494e] box-border relative flex flex-col p-[16px] items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch relative tracking-[-0.4px] leading-[24px] font-medium inline-block">
            {title}
          </div>
          <div className="self-stretch relative text-base font-inter text-gray-200 inline-block">
            {sneakPeak}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between text-sm font-inter">
          <div className="relative leading-[24px] inline-block">
            {timeToRead}
          </div>
          <div className="relative leading-[24px] inline-block">
            {createdOn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
