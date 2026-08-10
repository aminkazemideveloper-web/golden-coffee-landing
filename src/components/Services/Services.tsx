
import ServicesItem from '../ServicesItem/ServicesItem'
import Container from '../container/Container'

function Services() {
  const servicesItem = [
    {id:1 , img: "/images/svgs/services/pitcher.svg" , title: "پشتیبانی شبانه روزی" , desc: "7 روز هفته ، 24 ساعته"},
    {id:2 , img: "/images/svgs/services/coffee.svg" , title: "اکسسوری قهوه" , desc: "وسایل و ادوات دم آوری"},
    {id:3 , img: "/images/svgs/services/support.svg" , title: "رست تخصصی" , desc: "تازه برشته شده و با کیفیت"},
    {id:4 , img: "/images/svgs/services/express-delivery.svg" , title: "امکان تحویل اکسپرس" , desc: "ارسال بسته با سرعت باد"},
  ]
  return (
    <Container>
      <div className='mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-16'>
        {servicesItem.map(item =>(
          <ServicesItem key={item.id} {...item} />
          
        ))}
        
        
      </div>
    </Container>
  )
}

export default Services