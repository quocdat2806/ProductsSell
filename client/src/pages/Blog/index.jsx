import DefaultLayoutContainer from '../../layout/DefaultLayout/DefaultLayoutContainer';
import IndexModule from '../../components/IndexModule';
import BlogLeftLayout from '../../layout/BlogLeftLayout';
import PostItem from "../../components/PostItem";
import TopicList from "../../components/TopicList";
import Banners from "../../components/Banners";
const Blog = () => {

  const ModuleRow = IndexModule['index-module-row']
  const ModuCol = IndexModule['index-module-col']
  return (
    <DefaultLayoutContainer title="Bài viết nổi bật" 
    description="Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web."
    >
      <ModuleRow>
        <ModuCol col_66>
          <BlogLeftLayout>
            <div>
              <PostItem/>

            </div>

          </BlogLeftLayout>

        </ModuCol>
        <ModuCol col_33>
          <TopicList/>
          <Banners/>

        </ModuCol>
      </ModuleRow>

    </DefaultLayoutContainer>
  )
}

export default Blog