import Container from "../container/Container";
import BannerItem from "../BannerItem/BannerItem";

function Banner() {
  const bannerItems = [
    {
      id: 1,
      title: "انواع قهوه",
      desc: "ترکیبی و تک خاستگاه",
      img: "/images/categories/category-right.jpg",
    },
    {
      id: 2,
      title: "پودرهای فوری",
      desc: "نسکافه، هات چاکلت، ماسالا",
      img: "/images/categories/category-left.jpg",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20">
      <Container>
        <div
          dir="rtl"
          className="
            grid
            w-full
            grid-cols-1
            gap-4
            lg:grid-cols-2
            lg:gap-6
          "
        >
          {bannerItems.map((item) => (
            <BannerItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Banner;
