interface CategoryItemProps {
  id: number;
  img: string;
  title: string;
}

function CategoryItem({ img, title }: CategoryItemProps) {
  return (
    <div
      className="
        group
        flex
        w-[120px]
        shrink-0
        flex-col
        items-center
        gap-2

        sm:w-[150px]
        sm:gap-3

        lg:w-[180px]
      "
    >
      {/* Image */}
      <div
        className="
          w-[120px]

          sm:w-[150px]

          lg:w-[180px]
        "
      >
        <img
          src={img}
          alt={title}
          draggable="false"
          className="
            block
            w-full
            object-contain
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Title */}
      <span
        className="
          max-w-full
          whitespace-nowrap
          text-center
          font-danaDemiBold
          text-300
          leading-6
          text-zinc-700
          transition-colors
          duration-300
          group-hover:text-orange-500
          dark:text-white

          sm:text-400
        "
      >
        {title}
      </span>
    </div>
  );
}

export default CategoryItem;
