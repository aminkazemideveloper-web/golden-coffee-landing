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
        flex min-w-[150px] shrink-0
        flex-col items-center gap-3
        sm:min-w-0
      "
    >
      {/* Image */}
      <div
        className="
          w-[150px]
          sm:w-[170px]
          lg:w-[200px]
        "
      >
        <img
          src={img}
          alt={title}
          className="
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
          whitespace-nowrap
          text-center
          font-danaDemiBold
          text-300
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
