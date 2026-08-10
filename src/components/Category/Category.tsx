import Container from "../container/Container";
import CategoryItem from "../CategoryItem/CategoryItem";

function Category() {
  const categoryItems = [
    {
      id: 1,
      img: "/images/categories/category1.png",
      title: "قهوه دمی و اسپرسو",
    },
    {
      id: 2,
      img: "/images/categories/category2.png",
      title: "لوازم جانبی و تجهیزات",
    },
    {
      id: 3,
      img: "/images/categories/category3.png",
      title: "اسپرسو ساز",
    },
    {
      id: 4,
      img: "/images/categories/category4.png",
      title: "پک تستر قهوه",
    },
    {
      id: 5,
      img: "/images/categories/category5.png",
      title: "قهوه ترک",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div dir="rtl">
          {/* Title */}
          <div className="mb-8 flex flex-col gap-1 text-right sm:mb-10">
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
              دسته‌بندی محصولات
            </h2>

            <span
              className="
                font-danaRegular
                text-300
                text-zinc-500
                dark:text-zinc-400
                sm:text-400
              "
            >
              محصولات مورد علاقه خودت رو پیدا کن
            </span>
          </div>

          {/* Categories */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-6
             
              pb-4
              

              
              lg:gap-6
            "
          >
            {categoryItems.map((item) => (
              <CategoryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Category;
