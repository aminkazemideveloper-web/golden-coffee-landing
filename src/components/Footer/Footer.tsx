import { CiLocationOn, CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { RiTelegram2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { title: "حریم خصوصی", href: "#" },
    { title: "پرسش‌های متداول", href: "#" },
    { title: "عودت کالا", href: "#" },
    { title: "فرصت‌های شغلی", href: "#" },
    { title: "شرایط استفاده", href: "#" },
    { title: "ضمانت‌نامه‌ها", href: "#" },
    { title: "ثبت سفارش", href: "#" },
    { title: "ارتباط با ما", href: "#" },
  ];

  return (
    <footer
      dir="rtl"
      className="
        mt-20
        bg-zinc-900
        text-white
        dark:bg-zinc-950
      "
    >
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-12
          "
        >
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="mb-5 font-morabbaBold text-500 text-orange-300 sm:text-600">
              درباره گلدن کافی
            </h3>

            <p
              className="
                max-w-md
                font-danaRegular
                text-300
                leading-7
                text-zinc-300
                sm:text-400
              "
            >
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم.
            </p>

            <p
              className="
                mt-4
                max-w-md
                font-danaRegular
                text-300
                leading-7
                text-zinc-400
              "
            >
              می‌پنداریم که نظر مردم ایران و منطقه باید نسبت به کالای ایرانی
              بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-morabbaBold text-500 text-orange-300 sm:text-600">
              دسترسی سریع
            </h3>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="
                      font-danaRegular
                      text-300
                      text-zinc-300
                      transition-colors
                      hover:text-orange-300
                      sm:text-400
                    "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-morabbaBold text-500 text-orange-300 sm:text-600">
              در تماس باشیم
            </h3>

            <ul className="flex flex-col gap-5">
              {/* Address */}
              <li className="flex items-start gap-3">
                <CiLocationOn className="mt-0.5 h-6 w-6 shrink-0 text-orange-300" />

                <span className="font-danaRegular text-300 leading-6 text-zinc-300 sm:text-400">
                  بلوار میرداماد، خیابان البرز،
                  <br />
                  کوچه قبادیان شرقی، پلاک ۳۳
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <CiMail className="h-6 w-6 shrink-0 text-orange-300" />

                <a
                  href="mailto:info@coffee.com"
                  dir="ltr"
                  className="
                    font-danaRegular
                    text-300
                    text-zinc-300
                    transition-colors
                    hover:text-orange-300
                    sm:text-400
                  "
                >
                  info@coffee.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <LuPhone className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:09021236628"
                    dir="ltr"
                    className="
                      font-danaRegular
                      text-300
                      text-zinc-300
                      transition-colors
                      hover:text-orange-300
                      sm:text-400
                    "
                  >
                    0902 123 6628
                  </a>

                  <a
                    href="tel:0216789012"
                    dir="ltr"
                    className="
                      font-danaRegular
                      text-300
                      text-zinc-400
                      transition-colors
                      hover:text-orange-300
                      sm:text-400
                    "
                  >
                    021 - 6789012
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-5 font-morabbaBold text-500 text-orange-300 sm:text-600">
              ما را دنبال کنید
            </h3>

            <p className="mb-5 font-danaRegular text-300 leading-6 text-zinc-400 sm:text-400">
              برای اطلاع از جدیدترین محصولات و اخبار قهوه با ما همراه باشید.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-white/5
                  text-zinc-300
                  transition-all
                  hover:bg-orange-300
                  hover:text-white
                "
              >
                <FiInstagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-white/5
                  text-zinc-300
                  transition-all
                  hover:bg-orange-300
                  hover:text-white
                "
              >
                <RiTelegram2Fill className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <span
                dir="ltr"
                className="font-danaRegular text-sm text-zinc-400"
              >
                @golden_coffee
              </span>

              <span
                dir="ltr"
                className="font-danaRegular text-sm text-zinc-400"
              >
                @golden_coffee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            gap-3
            px-4
            py-5
            text-center
            sm:px-6
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-8
            lg:text-right
          "
        >
          <p className="font-danaRegular text-xs leading-6 text-zinc-400 sm:text-sm">
            تمام حقوق این رابط کاربری متعلق به{" "}
            <span className="text-orange-300">سبزلرن</span> می‌باشد و دانشجوی
            این دوره اجازه استفاده از آن را در مصارف شخصی و تجاری ندارد.
          </p>

          <p
            dir="ltr"
            className="font-danaRegular text-xs text-zinc-500 sm:text-sm"
          >
            Copyright © 2023 Golden Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
