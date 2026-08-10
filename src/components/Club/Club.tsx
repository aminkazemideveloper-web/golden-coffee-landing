import { IoIosArrowBack } from "react-icons/io";

import Container from "../container/Container";
import ClubBox from "../ClubBox/ClubBox";

function Club() {
  const clubImages = [
    {
      id: 1,
      title: "چرخ و بخت",
      img: "/images/club/Activity.svg",
    },
    {
      id: 2,
      title: "ماموریت‌ها",
      img: "/images/club/Discovery.svg",
    },
    {
      id: 3,
      title: "جایزه‌ها",
      img: "/images/club/Discovery.svg",
    },
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-20">
      <Container>
        <div
          dir="rtl"
          className="
            w-full
            overflow-hidden
            rounded-2xl
            bg-emerald-500
            px-4 py-6
            sm:px-6 sm:py-8
            lg:px-10 lg:py-8
          "
        >
          <div
            className="
              flex flex-col gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            {/* Club Introduction */}
            <div
              className="
                flex items-center gap-4
                lg:flex-1
                lg:gap-6
              "
            >
              <img
                src="/images/club/diamond.png"
                alt="کافی کلاب"
                className="
                  w-20 shrink-0
                  sm:w-24
                  lg:w-28
                "
              />

              <div className="flex flex-col gap-1.5 text-right text-white sm:gap-2">
                <h2
                  className="
                    font-morabbaBold
                    text-500
                    leading-tight
                    sm:text-600
                    lg:text-700
                  "
                >
                  کافی کلاب
                </h2>

                <p
                  className="
                    font-morabbaLight
                    text-300
                    leading-relaxed
                    sm:text-400
                    lg:text-500
                  "
                >
                  میدونستی می‌تونی با امتیاز‌هات قهوه بگیری؟
                </p>
              </div>
            </div>

            {/* Club Actions */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-5
                lg:flex-1
                lg:justify-end
                lg:gap-8
              "
            >
              {/* Club Boxes */}
              <div
                className="
                  flex
                  items-center
                  gap-2
                  sm:gap-3
                  lg:gap-5
                "
              >
                {clubImages.map((item) => (
                  <ClubBox key={item.id} {...item} />
                ))}
              </div>

              {/* Score */}
              <div
                className="
                  flex shrink-0
                  flex-col
                  items-start
                  gap-1
                  text-white
                "
              >
                <span
                  className="
                    font-danaMedium
                    text-500
                    leading-none
                    sm:text-600
                  "
                >
                  529
                </span>

                <span
                  className="
                    whitespace-nowrap
                    font-danaRegular
                    text-300
                    sm:text-400
                  "
                >
                  امتیاز شما
                </span>

                <button
                  type="button"
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-1
                    rounded-full
                    bg-linear-to-l
                    from-orange-300
                    to-orange-100
                    px-3 py-2
                    font-danaMedium
                    text-xs
                    text-zinc-700
                    shadow-sm
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:shadow-md
                    sm:text-sm
                  "
                >
                  <span className="whitespace-nowrap">دریافت جایزه</span>

                  <IoIosArrowBack className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Club;
