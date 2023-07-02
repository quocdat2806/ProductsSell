
import DefaultLayoutContainer from '../../layout/DefaultLayout/DefaultLayoutContainer'
import ScrollList from '../../components/ScrollList'
import SuggestionBox from '../../components/SuggestionBox';

const Courses = () => {
  return (
    <DefaultLayoutContainer title="Khóa hoc"
     description="Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học miễn phí, chất lượng, nội dung dễ hiểu."
     >
      <ScrollList hide />
      <SuggestionBox/>

    </DefaultLayoutContainer>
  )
}

export default Courses