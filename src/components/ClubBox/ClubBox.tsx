interface ClubBoxProps {
  id: number;
  title: string;
  img: string;
}

function ClubBox({ title, img }: ClubBoxProps) {
  return (
    <a
      href="#"
      className="
        group
        flex h-[72px] w-[72px]
        shrink-0
        flex-col items-center justify-center
        gap-2
        rounded-xl
        bg-white
        text-emerald-600
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        sm:h-20 sm:w-20
        lg:h-[98px] lg:w-[98px]
        lg:gap-3
      "
    >
      <img
        src={img}
        alt={title}
        className="
          h-9 w-9
          object-contain
          transition-transform duration-300
          group-hover:scale-110
          sm:h-10 sm:w-10
          lg:h-12 lg:w-12
        "
      />

      <span
        className="
          whitespace-nowrap
          font-danaRegular
          text-[11px]
          text-zinc-600
          sm:text-xs
          lg:text-sm
          transition-colors duration-300
          group-hover:text-emerald-600
        "
      >
        {title}
      </span>
    </a>
  );
}

export default ClubBox;
