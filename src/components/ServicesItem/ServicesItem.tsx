

interface ServicesItem {
    id: number;
    img: string;
    title: string;
    desc: string;
}


function ServicesItem({img , desc ,title}:ServicesItem) {
  return (
    <div className='flex items-center justify-center space-x-4 '>
        <div className='w-[66px]'>
            <img className='w-full' src={img} alt="" />
        </div>
        <div className='flex flex-col space-y-3.5 dark:text-white'>
            <span className='font-danaDemiBold text-lg'>{title}</span>
            <span className='font-danaRegular text-[14px]'>{desc}</span>
        </div>
    </div>
  )
}

export default ServicesItem