interface BannerItemProps {
  id: number;
  img: string;
  title: string;
  desc: string;
}

function BannerItem({
  img,
  title,
  desc,
}: BannerItemProps) {
  return (
    <div
      dir="rtl"
      className="
        group
        relative
        min-h-[220px]
        w-full
        overflow-hidden
        rounded-2xl
        bg-cover
        bg-center
        sm:min-h-[260px]
        lg:min-h-[300px]
      "
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-l
          from-black/60
          via-black/20
          to-transparent
          transition-all
          duration-500
          group-hover:from-black/70
        "
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex h-full min-h-[220px]
          flex-col
          items-start
          justify-center
          px-6 py-8
          text-right
          text-white
          sm:min-h-[260px]
          sm:px-8
          lg:min-h-[300px]
          lg:px-10
        "
      >
        <h3
          className="
            font-danaDemiBold
            text-500
            leading-tight
            sm:text-600
            lg:text-700
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            font-danaMedium
            text-300
            leading-relaxed
            text-white/90
            sm:text-400
            lg:text-500
          "
        >
          {desc}
        </p>

        {/* Decorative Line */}
        <span
          className="
            mt-5
            h-0.5
            w-12
            rounded-full
            bg-orange-300
            transition-all
            duration-300
            group-hover:w-20
          "
        />
      </div>
    </div>
  );
}

export default BannerItem;