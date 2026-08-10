import { useNavigate } from "react-router-dom";
import Container from "../container/Container";
import ProductCard from "../productCard/ProductCard";

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
    },
    {
      id: 2,
      img: "/images/products/p2.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 185_000,
      offer: 12,
      productCount: 50,
    },
    {
      id: 3,
      img: "/images/products/p3.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 185_000,
      productCount: 80,
    },
    {
      id: 4,
      img: "/images/products/p4.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 195_000,
      offer: 12,
      productCount: 10,
    },
    {
      id: 5,
      img: "/images/products/p3.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 215_000,
      offer: 12,
      productCount: 5,
    },
    {
      id: 6,
      img: "/images/products/p4.png",
      title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
      price: 185_000,
      productCount: 1,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
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
          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              sm:gap-5
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
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
