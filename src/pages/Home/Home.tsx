import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import Banner from "../../components/Banner/Banner";
import Category from "../../components/Category/Category";
import Club from "../../components/Club/Club";
import Description from "../../components/Description/Description";
import Hero from "../../components/Hero/Hero";
import NewProducts from "../../components/NewProducts/NewProducts";
import Services from "../../components/Services/Services";

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#f1f1f1] pb-10 dark:bg-zinc-800">
      <main className="flex w-full min-w-0 flex-col items-center">
        <Hero />

        {/* <NewProducts /> */}

        <AnimatedSection animation="from-left">
          <Banner />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <Category />
        </AnimatedSection>

        <AnimatedSection animation="from-right">
          <Club />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <Description />
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <Services />
        </AnimatedSection>
      </main>
    </div>
  );
}

export default Home;
