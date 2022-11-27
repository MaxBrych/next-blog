import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

export const Post = ({ body, title, image }) => {
  console.log(title);

  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "94cropdl",
      dataset: "production",
    });
    setImageURL(imgBuilder.image(image));
  }, [image]);

  return (
    <div className="relative bg-[#101112] w-full h-screen flex flex-col p-[32px_16px] box-border items-center justify-start text-left text-base text-white font-inter">
      <div className="rounded-[12px] w-[640px] flex flex-col p-[32px_0px] box-border items-start justify-start md:w-full">
        <Link href="/">
          <a className="cursor-pointer text-white [text-decoration:none] flex flex-row items-center justify-start gap-[4px] text-[inherit]">
            <img
              className="relative w-[20px] h-[20px] shrink-0 overflow-hidden"
              alt=""
              src="../assets/akariconsarrowdown.svg"
            />
            <div className="relative tracking-[-0.4px] leading-[24px] font-medium inline-block">
              All Posts
            </div>
          </a>
        </Link>
      </div>
      <div className="w-[640px] flex flex-col items-start justify-start gap-[32px] text-sm md:w-full sm:w-full">
        {imageURL && (
          <img
            className="self-stretch rounded-[12px] max-w-full h-[240px] shrink-0 overflow-hidden object-cover sm:h-[160px]"
            src={imageURL}
          ></img>
        )}
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch border-t-[1px_solid_#313131] border-r-[0px_solid_#313131] border-b-[0px_solid_#313131] border-l-[0px_solid_#313131] box-border relative flex flex-row p-[4px_0px] items-start justify-between">
            <p className="m-[0] relative leading-[24px] inline-block">
              timeToRead
            </p>
            <p className="m-[0] relative leading-[24px] inline-block">
              publishedAt
            </p>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl font-roc-grotesk">
            <h1 className="m-[0] text-[40px] self-stretch relative text-[inherit] tracking-[-0.4px] leading-[44px] font-medium font-inherit inline-block lg:text-xl lg:leading-[44px] sm:text-[36px] sm:leading-[40px]">
              {title}
            </h1>

            <p className="m-[0] self-stretch relative text-[18px] leading-[33px] font-inter text-gray-600 inline-block">
              <BlockContent blocks={body} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  console.log(pageSlug);

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}"]`
  );
  const url = `https://94cropdl.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      otFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
        timeToRead: post.timeToRead,
        publishedAt: post.publishedAt,
      },
    };
  }
};

export default Post;
