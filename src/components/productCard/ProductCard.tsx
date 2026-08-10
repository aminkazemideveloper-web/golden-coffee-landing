import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { HiOutlineStar } from "react-icons/hi";

interface ProductCardProps {
  id: number;
  img: string;
  title: string;
  price: number;
  offer?: number;
  productCount: number;
}

function ProductCard({
  img,
  title,
  price,
  offer,
  productCount,
}: ProductCardProps) {
  const isAvailable = productCount > 0;

  const discountedPrice = offer
    ? Math.round(price * (1 - offer / 100))
    : price;

  const formatPrice = (value: number) => {
    return value.toLocaleString("fa-IR");
  };

  return (
    <article
      dir="rtl"
      className="
        group
        flex h-full
        flex-col
        justify-between
        overflow-hidden
        rounded-2xl
        border border-zinc-100
        bg-white
        p-3
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        dark:border-zinc-700
        dark:bg-zinc-800
      "
    >
      {/* Product Image */}
      <div className="relative">
        <div
          className="
            flex
            aspect-square
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            bg-zinc-50
            dark:bg-zinc-700/50
          "
        >
          <img
            src={img}
            alt={title}
            className="
              h-full
              w-full
              object-contain
              p-2
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Offer */}
        {offer && isAvailable && (
          <span
            className="
              absolute
              right-2
              top-2
              flex
              h-8
              min-w-10
              items-center
              justify-center
              rounded-full
              bg-orange-300
              px-2
              font-danaDemiBold
              text-xs
              text-white
              shadow-sm
              sm:text-sm
            "
          >
            {offer}٪
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 flex flex-1 flex-col gap-3">
        {/* Title */}
        <h3
          className="
            line-clamp-2
            min-h-[3rem]
            font-danaMedium
            text-300
            leading-6
            text-zinc-700
            dark:text-white
            sm:text-400
          "
        >
          {title}
        </h3>

        {/* Price */}
        <div className="min-h-10">
          {isAvailable ? (
            offer ? (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                {/* Discounted Price */}
                <div
                  className="
                    flex
                    items-baseline
                    gap-1
                    font-danaDemiBold
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  <span className="text-400 sm:text-500">
                    {formatPrice(discountedPrice)}
                  </span>

                  <span className="font-danaRegular text-[10px] sm:text-xs">
                    تومان
                  </span>
                </div>

                {/* Old Price */}
                <div
                  className="
                    relative
                    font-danaRegular
                    text-xs
                    text-zinc-400
                    line-through
                    sm:text-sm
                  "
                >
                  {formatPrice(price)}
                </div>
              </div>
            ) : (
              <div
                className="
                  flex
                  items-baseline
                  gap-1
                  font-danaDemiBold
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                <span className="text-400 sm:text-500">
                  {formatPrice(price)}
                </span>

                <span className="font-danaRegular text-[10px] sm:text-xs">
                  تومان
                </span>
              </div>
            )
          ) : (
            <span
              className="
                font-danaRegular
                text-xs
                text-red-400
                sm:text-300
              "
            >
              فعلاً موجود نیست
            </span>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div
        className="
          mt-4
          flex
          items-center
          justify-between
          border-t
          border-zinc-100
          pt-3
          dark:border-zinc-700
        "
      >
        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={!isAvailable}
            aria-label="افزودن به سبد خرید"
            className="
              flex
              h-9 w-9
              items-center
              justify-center
              rounded-full
              bg-zinc-100
              text-zinc-500
              transition-all
              duration-200
              hover:bg-emerald-600
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-40
              dark:bg-zinc-700
              dark:text-zinc-300
              dark:hover:bg-emerald-600
            "
          >
            <MdOutlineShoppingCart className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="مقایسه محصول"
            className="
              flex
              h-8 w-8
              items-center
              justify-center
              text-zinc-400
              transition-colors
              duration-200
              hover:text-emerald-600
              dark:text-zinc-400
            "
          >
            <HiOutlineArrowsRightLeft className="h-5 w-5" />
          </button>
        </div>

        {/* Rating */}
        <div
          dir="ltr"
          className="flex items-center gap-0.5"
          aria-label="امتیاز 5 از 5"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <HiOutlineStar
              key={index}
              className="
                h-3.5 w-3.5
                text-yellow-400
                sm:h-4 sm:w-4
              "
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;