import { useSwiper } from "swiper/react";

function SwiperButtons() {
  const swiper = useSwiper();

  return (
    <>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className="absolute right-2 top-1/2 z-50 flex h-8 w-8 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-orange-400 hover:bg-orange-600 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className="absolute left-2 top-1/2 z-50 flex h-8 w-8 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-orange-400 hover:bg-orange-600 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
}

export default SwiperButtons;
