import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import NewProducts from '../../components/NewProducts/NewProducts';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Club from '../../components/Club/Club';
import Description from '../../components/Description/Description';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';

function Home() {


  
      return (
          <div className="bg-[#f1f1f1] dark:bg-zinc-800 ">
              <header>
                  <Header />
              </header>
              <main className="flex flex-col items-center" >
                  <Hero />
                  <NewProducts />
                  <Banner />
                  <Category />
                  <Club />
                  <Description />
                  <Services />
  
              </main>
              <footer>
                  <Footer />
              </footer>
  
          </div>
)
}

export default Home