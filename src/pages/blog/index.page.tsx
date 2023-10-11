import { FC } from "react";
import { fetchIssues, getAllIssues } from "~/infra/api";
import {
  GetStaticProps,
  NextSeo,
  useForm,
  useRouter,
  useState,
} from "~/modules";
import { SEOBlog } from "~/utils/next-seo";
import { BackToTop, Footer, Header } from "../components";
import BlogContent from "./blog";
import { BlogContainer, BlogSection } from "./styles";

const Blog: FC<IssueInfoType> = (props) => {
  const [issues, setIssues] = useState<IssueInfoType>(props);
  const navigate = useRouter();
  const { reset } = useForm();

  const handleNewSearch = async (data: { search?: string }) => {
    const issues = await fetchIssues(data.search);
    setIssues(issues);
    reset();
  };

  const handlePostViewer = (postNumber: number | undefined) => {
    navigate.push(`/blog/post/${postNumber}`);
  };

  return (
    <BlogSection>
      <Header />
      <BlogContainer>
        <NextSeo {...SEOBlog} />
        <BlogContent
          issues={issues}
          onNewSearch={handleNewSearch}
          onPostViewer={handlePostViewer}
        />
      </BlogContainer>
      <Footer />
      <BackToTop />
    </BlogSection>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getAllIssues();

  return {
    props: {
      total_count: issues.total_count,
      items: issues.items,
    },
    revalidate: 60 * 60 * 1, // 1 Hour
  };
};

export default Blog;
