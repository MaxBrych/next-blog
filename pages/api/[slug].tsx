import type { NextPage } from "next";
import Link from "next/link";

const Slug: NextPage = () => {
  return (
    <div className="relative bg-gray-500 w-full h-[1024px] flex flex-col p-[32px_16px] box-border items-center justify-start text-left text-base text-white font-inter">
      <div className="rounded-[12px] w-[640px] flex flex-col p-[32px_0px] box-border items-start justify-start md:w-full">
        <Link href="/">
          <a className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-start gap-[4px] text-[inherit]">
            <img
              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
              alt=""
              src="../akariconsarrowdown.svg"
            />
            <div className="relative tracking-[-0.4px] leading-[24px] font-medium inline-block">
              All Posts
            </div>
          </a>
        </Link>
      </div>
      <div className="w-[640px] flex flex-col items-start justify-start gap-[32px] text-sm md:w-full sm:w-full">
        <img
          className="self-stretch rounded-[12px] max-w-full h-[240px] shrink-0 overflow-hidden object-cover sm:h-[160px]"
          alt=""
          src="../img@2x.png"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch border-t-[1px_solid_#313131] border-r-[0px_solid_#313131] border-b-[0px_solid_#313131] border-l-[0px_solid_#313131] box-border relative flex flex-row p-[4px_0px] items-start justify-between">
            <p className="m-[0] relative leading-[24px] inline-block">
              4 min read
            </p>
            <p className="m-[0] relative leading-[24px] inline-block">
              27.08.2022
            </p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl font-roc-grotesk">
            <h2 className="m-[0] self-stretch relative text-[inherit] tracking-[-0.4px] leading-[44px] font-medium font-inherit inline-block lg:text-xl lg:leading-[44px] sm:text-[36px] sm:leading-[40px]">
              How we move from small town to city to new country
            </h2>
            <p className="m-[0] self-stretch relative text-[18px] leading-[33px] font-inter text-gray-600 inline-block">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slug;
