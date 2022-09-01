export default function Blogpost({
  title,
  sneakPeak,
  timeToRead,
  createdOn,
  image,
  posts,
}) {
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
          <div className="relative self-stretch inline-block text-base text-gray-200 font-inter">
            {sneakPeak}
          </div>
        </div>
        <div className="flex flex-row items-start self-stretch justify-between text-sm font-inter">
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
}

export const getServerSideProps = async (pageContext) => {
  const query = encodeURIComponent('*[_type== "post]');
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
