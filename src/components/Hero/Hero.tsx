function Hero() {
  return (
    <section dir="rtl" className="relative h-dvh w-full overflow-hidden">
      <img
        src="/images/headerBgMobile.webp"
        alt=""
        className="block h-full w-full object-cover lg:hidden"
      />

      <img
        src="/images/headerBgDesktop.webp"
        alt=""
        className="hidden h-full w-full object-cover lg:block"
      />

      <div
        dir="rtl"
        className="absolute inset-x-0 top-[15%] text-right text-white sm:top-[20%] lg:top-1/4"
      >
        <div className="flex w-full justify-end px-4 sm:px-8 lg:px-12">
          <div className="flex w-full max-w-[720px] flex-col items-start gap-3 sm:gap-4">
            <div className="flex flex-col items-start gap-1">
              <h1 className="font-morabbaBold text-600 leading-[1.15] sm:text-700 lg:text-800">
                قهوه عربیکا تانزانیا
              </h1>

              <h2 className="font-morabbaLight text-500 leading-[1.3] sm:text-600 lg:text-700">
                یک فنجان بالانس!
              </h2>
            </div>

            <div className="h-0.5 w-14 rounded-full bg-orange-300 sm:w-20 lg:w-24" />

            <p className="max-w-[95%] font-danaRegular text-300 leading-7 sm:max-w-[600px] sm:text-400 sm:leading-8">
              قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
