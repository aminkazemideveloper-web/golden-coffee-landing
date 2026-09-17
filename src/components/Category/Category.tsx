import clsx from "clsx";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./Category.module.css";

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

// تکرار آیتم‌ها برای ایجاد حرکت پیوسته
const items = [...categoryItems, ...categoryItems];

function Category() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-8 text-center lg:text-start sm:mb-10">
          <h2 className="font-morabbaBold text-600 text-zinc-800 dark:text-white">
            دسته‌بندی محصولات
          </h2>
        </div>

        {/* Carousel */}
        <div className={styles.viewport}>
          <div className={styles.track}>
            {items.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={clsx(styles.item, index === 2 && styles.active)}
              >
                <CategoryItem id={item.id} img={item.img} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
