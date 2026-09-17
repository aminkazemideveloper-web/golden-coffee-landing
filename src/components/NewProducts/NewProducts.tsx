import { useNavigate } from "react-router";
import Container from "../container/Container";
import ProductCard from "../productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay } from "swiper/modules";
import SwiperButtons from "./components/SwiperButtons";

function NewProducts() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      img: "/images/products/p1.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 100_000,
      offer: 12,
      productCount: 0,
      rating: 3.5,
    },
    {
      id: 2,
      img: "/images/products/p2.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 185_000,
      offer: 12,
      productCount: 50,
      rating: 4,
    },
    {
      id: 3,
      img: "/images/products/p3.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 185_000,
      productCount: 80,
      rating: 3,
    },
    {
      id: 4,
      img: "/images/products/p4.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 195_000,
      offer: 12,
      productCount: 10,
      rating: 4.5,
    },
    {
      id: 5,
      img: "/images/products/p3.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 215_000,
      offer: 12,
      productCount: 5,
      rating: 5,
    },
    {
      id: 6,
      img: "/images/products/p4.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 185_000,
      productCount: 1,
      rating: 4,
    },
  ];

  return (
    <section className="w-full min-w-0 py-12 sm:py-16 lg:py-20">
      <Container>
        <div dir="rtl">
          {/* Section Header */}
          <div className="mb-8 flex items-end justify-between sm:mb-10">
            <div className="flex flex-col gap-1">
              <h2
                className="
                  font-morabbaBold
                  text-500
                  leading-tight
                  text-zinc-800
                  dark:text-white
                  sm:text-600
                  lg:text-700
                "
              >
                جدیدترین محصولات
              </h2>

              <p
                className="
                  font-danaRegular
                  text-300
                  text-zinc-500
                  dark:text-zinc-400
                  sm:text-400
                "
              >
                تازه‌ترین محصولات فروشگاه
              </p>
            </div>

            <button
              type="button"
              className="
                hidden
                font-danaMedium
                text-sm
                text-orange-400
                transition-colors
                hover:text-orange-600
                sm:block
                cursor-pointer
              "
              onClick={() => navigate("/shop")}
            >
              مشاهده همه
            </button>
          </div>

          {/* Products */}
          <div className="relative w-full min-w-0 overflow-hidden">
            <Swiper
              loop
              slidesPerView="auto"
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="!w-full !min-w-0"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="!min-w-0">
                  <ProductCard {...product} />
                </SwiperSlide>
              ))}

              <SwiperButtons />
            </Swiper>
          </div>

          {/* Mobile See All */}
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              type="button"
              className="
                rounded-full
                border border-orange-300
                px-6 py-2
                font-danaMedium
                text-sm
                text-orange-400
                transition-all
                hover:bg-orange-300
                hover:text-white
              "
            >
              مشاهده همه محصولات
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NewProducts;
