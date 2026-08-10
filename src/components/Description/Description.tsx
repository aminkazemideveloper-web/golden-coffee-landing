import { FiPhone } from "react-icons/fi";
import Container from "../container/Container";

function Description() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div
          dir="rtl"
          className="
            flex flex-col items-center gap-10
            lg:flex-row
            lg:items-center
            lg:gap-16
          "
        >
          {/* Image */}
          <div className="w-full lg:w-1/3">
            <img
              src="/images/contact.png"
              alt="فضای کافه"
              className="
                mx-auto
                w-full max-w-[500px]
                rounded-2xl
                object-cover
                lg:max-w-none
              "
            />
          </div>

          {/* Content */}
          <div
            className="
              flex w-full flex-col
              items-start
              text-right
              text-zinc-700
              dark:text-white
              lg:w-2/3
          "
          >
            {/* Title */}
            <h2
              className="
                font-morabbaBold
                text-600
                leading-tight
                sm:text-700
                lg:text-800
              "
            >
              یکی از بهترین قهوه‌ها!
            </h2>

            {/* Subtitle */}
            <span
              className="
                mt-2
                font-morabbaLight
                text-400
                leading-relaxed
                sm:text-500
                lg:text-600
              "
            >
              کیفیت قهوه را از ما بخواهید...
            </span>

            {/* Decorative dots */}
            <div
              className="
                my-5
                text-xl
                tracking-[0.5em]
                text-orange-300
                lg:my-6
              "
              aria-hidden="true"
            >
              ...
            </div>

            {/* Description */}
            <p
              className="
                max-w-[65ch]
                font-danaRegular
                text-300
                leading-8
                sm:text-400
                sm:leading-9
                lg:text-400
              "
            >
              فضای گرم و دنج ما را احساس کنید، جایی که همه می‌توانند قهوه‌ای
              معطر پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه
              شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش‌برخورد ما روز
              شما را می‌سازد!
            </p>

            {/* Phone Order */}
            <a
              href="tel:+989000000000"
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                border border-orange-300
                px-5 py-3
                font-danaRegular
                text-sm
                text-orange-400
                transition-all duration-300
                hover:bg-orange-300
                hover:text-white
                sm:text-base
                lg:mt-8
              "
            >
              <FiPhone className="h-5 w-5 sm:h-6 sm:w-6" />

              <span>ثبت سفارش تلفنی</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Description;
