import Post from "../components/Post";
import Link from "next/link";

export default function Desktop2() {
  return (
    <div className="relative bg-gray-500 shadow-[0px_4px_100px_rgba(255,_255,_255,_0.14)] [border:1px_solid_#fff] box-border w-full h-[1024px] flex flex-col p-[0px_64px] items-center justify-center md:pl-[24px] md:pr-[2px] md:box-border sm:pl-[16px] sm:pr-[16px] sm:box-border">
      <section className="rounded-[12px] w-[520px] flex flex-col p-[12px_0px] box-border items-start justify-center gap-[16px] text-left text-xl text-white font-roc-grotesk sm:w-full sm:rounded-[12px] sm:pl-[16px] sm:pr-[16px] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] md:w-full sm:w-full">
          <h1 className="m-[0] relative text-[inherit] tracking-[-0.4px] font-medium font-inherit inline-block sm:text-[32px]">
            Hi! Max here
          </h1>
          <p className="m-[0] self-stretch relative text-base leading-[24px] font-inter text-gray-100 inline-block">
            I’m full time Gen Ztler discovering the web3 and documenting my
            journey
          </p>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[4px] md:w-full">
          <a
            className="[text-decoration:none] rounded-[90px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[8px] box-border items-center justify-center"
            href="https://github.com/MaxBrych"
            target="_blank"
          >
            <img
              className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
              alt=""
              src="./assets/akariconsgithubfill.svg"
            />
          </a>
          <a className="[text-decoration:none] rounded-[90px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[8px] box-border items-center justify-center">
            <img
              className="relative w-[18px] h-[18px] shrink-0 overflow-hidden"
              alt=""
              src="./assets/akariconstwitterfill.svg"
            />
          </a>
        </div>
        <Link href="./api/Page.js">
          <div>
            <Post
              title="Test Title"
              sneakPeak="Lorem ipsum dolar sit"
              timeToRead="2"
              createdOn="2022.08.12"
              image="./assets/uniswap-image-01-1@2x.png"
            />
          </div>
        </Link>
      </section>
    </div>
  );
}
