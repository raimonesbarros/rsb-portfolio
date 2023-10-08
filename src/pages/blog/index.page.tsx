import { FC } from "react";
import { api } from "~/infra/api";
import {
  GetStaticProps,
  NextSeo,
  useForm,
  useRouter,
  useState,
} from "~/modules";
import { SEOBlog } from "~/utils/next-seo";
import { BackToTop, Footer, Header } from "../components";
import { EmptyBlog, Posts } from "./components";
import {
  BlogContainer,
  BlogInfo,
  BlogSection,
  Button,
  FormContainer,
  Input,
  PostContainer,
  Span,
  Text,
} from "./styles";

const Blog: FC<IssueInfoType> = (props) => {
  const [issues, setIssues] = useState<IssueInfoType>(props);
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  async function fetchIssues(query = "") {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `repo:raimonesbarros/github-blog ${query}`,
        _sort: "created_at",
        _order: "desc",
      },
    });

    setIssues(response.data);
  }

  function handleNewSearch(data: { search?: string }) {
    fetchIssues(data.search);
    reset();
  }

  const handlePostViewer = (postNumber: number | undefined) => {
    navigate.push(`/blog/post/${postNumber}`);
  };

  return (
    <BlogSection>
      <Header />
      <BlogContainer>
        <NextSeo {...SEOBlog} />
        <BlogInfo>
          <Text>Publicações</Text>
          <Span>
            {issues.total_count &&
              (issues.total_count <= 1
                ? issues.total_count
                : issues.total_count)}{" "}
            publicações
          </Span>
        </BlogInfo>
        <FormContainer onSubmit={handleSubmit(handleNewSearch)}>
          <Input
            type="text"
            id="search"
            placeholder="Buscar conteúdo"
            {...register("search")}
          />
          <Button type="submit" disabled={isSubmitting} />
        </FormContainer>
        <PostContainer>
          {issues.items && issues.items.length > 0 ? (
            issues.items.map((issue) => (
              <Posts
                key={issue.number}
                id={issue.number}
                title={issue.title}
                createdAt={issue.created_at}
                body={issue.body}
                onPostViewer={handlePostViewer}
              />
            ))
          ) : (
            <EmptyBlog />
          )}
        </PostContainer>
      </BlogContainer>
      <Footer />
      <BackToTop />
    </BlogSection>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get(`/search/issues`, {
    params: {
      q: `repo:raimonesbarros/github-blog`,
      _sort: "created_at",
      _order: "desc",
    },
  });

  const issues = response.data;

  return {
    props: {
      total_count: issues.total_count,
      items: issues.items,
    },
    revalidate: 60 * 60 * 1, // 1 Hour
  };
};
