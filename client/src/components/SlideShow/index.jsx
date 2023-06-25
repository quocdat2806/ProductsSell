/* eslint-disable react/prop-types */
import Slider from 'react-slick'
const SlideShow = ({data}) => {

    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000
    }
  return (
    <Slider {...settings}>
        {data.map((img,index)=>{
            return(
                <img key={index} height="270px" width="100%" src={img} />
            )
        })}

    </Slider>
  )
}

export default SlideShow