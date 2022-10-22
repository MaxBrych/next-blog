import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Blogpost from "../components/Blogpost";

export default function Home({ posts }) {
  const router = useRouter();

  const [mappedPosts, setMappedPosts] = useState([]);

  useEffect(() => {
    if (posts.length) {
      const imgBuilder = imageUrlBuilder({
        projectId: "94cropdl",
        dataset: "production",
      });
      setMappedPosts(
        posts.map((p) => {
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(540).height(240),
          };
        })
      );
    } else {
      setMappedPosts([]);
    }
  }, [posts]);

  console.log(mappedPosts);
  return (
    <div className="relative bg-gray-500 shadow-[0px_4px_100px_rgba(255,_255,_255,_0.14)] [border:1px_solid_#fff] box-border w-full h-full flex flex-col p-[0px_64px] items-center justify-center md:pl-[24px] md:pr-[2px] md:box-border sm:pl-[0px] sm:pr-[0px] sm:box-border">
      <section className="rounded-[12px] w-[520px] flex flex-col p-[12px_0px] box-border items-start justify-center gap-[16px] text-left text-xl text-white font-roc-grotesk sm:w-full sm:rounded-[12px] sm:pl-[16px] sm:pr-[16px] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] md:w-full sm:w-full">
          <h1 className="m-[0] relative text-[inherit] tracking-[-0.4px] font-medium font-inherit inline-block sm:text-[32px]">
            Lifelog Blog
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
            rel="noreferrer"
          >
            <Image className="w-[18px] h-[18px]" alt="" src="" />
          </a>
          <a className="[text-decoration:none] rounded-[90px] bg-gray-300 w-[36px] h-[36px] shrink-0 flex flex-row p-[8px] box-border items-center justify-center">
            <Image className="w-[18px] h-[18px]" alt="" src="" />
          </a>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-lg text-white font-roc-grotesk sm:w-full">
          {mappedPosts.length ? (
            mappedPosts.map((p, index) => (
              <Link href={`./post/${p.slug.current}`} key={index}>
                <div className="sm: w-full sm: ">
                  <Blogpost
                    onClick={() => router.push(`./post/${p.slug.current}`)}
                    key={index}
                    title={p.title}
                    image={p.mainImage}
                    timeToRead={p.timeToRead}
                    createdOn={p.publishedAt}
                  />
                </div>
              </Link>
            ))
          ) : (
            <>No Posts Yet</>
          )}
        </div>
      </section>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent('*[ _type == "post" ]');
  const url = `https://94cropdl.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());

  if (!result.result || !result.result.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: result.result,
      },
    };
  }
};
