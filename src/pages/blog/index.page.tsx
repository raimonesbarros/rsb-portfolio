import { api } from "~/lib"
import { Posts, EmptyBlog } from "./components"
import { SEOBlog } from "~/utils/next-seo/blog"
import { Footer, HandleFallback, Header } from "../components"
import {
  GetServerSideProps,
  NextSeo,
  useDinamicRouter,
  useForm,
  useRouter,
  useState,
} from "~/modules"
import {
  BlogContainer,
  BlogInfo,
  Button,
  FormContainer,
  Input,
  PostContainer,
  Span,
  Text,
} from "./styles"

const Blog = (props: IssueInfoType) => {
  const [issues, setIssues] = useState<IssueInfoType>(props)
  const navigate = useRouter()
  const { isFallback } = useDinamicRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm()

  if (isFallback) {
    return <HandleFallback />
  }

  async function fetchIssues(query = "") {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `repo:raimonesbarros/github-blog ${query}`,
        _sort: "created_at",
        _order: "desc",
      },
    })

    setIssues(response.data)
  }

  function handleNewSearch(data: { search?: string }) {
    fetchIssues(data.search)
    reset()
  }

  function handlePostVostViewer(postNumber: number | undefined) {
    navigate.push(`/blog/post/${postNumber}`)
  }

  return (
    <>
      <NextSeo {...SEOBlog} />
      <Header />
      <BlogContainer>
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
          <Button type="submit" disabled={isSubmitting}></Button>
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
                onPostViewer={handlePostVostViewer}
              />
            ))
          ) : (
            <EmptyBlog />
          )}
        </PostContainer>
      </BlogContainer>
      <Footer />
    </>
  )
}

export default Blog

export const getStaticProps: GetServerSideProps = async () => {
  const issues = await api.get(`/search/issues`, {
    params: {
      q: `repo:raimonesbarros/github-blog`,
      _sort: "created_at",
      _order: "desc",
    },
  })

  return {
    props: {
      total_count: issues.data.total_count,
      items: issues.data.items,
    },
  }
}
