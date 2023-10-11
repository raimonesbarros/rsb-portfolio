import { FC } from "react";
import { useForm } from "~/modules";
import { EmptyBlog, Posts } from "./components";
import {
  BlogInfo,
  Button,
  FormContainer,
  Input,
  PostContainer,
  Span,
  Text,
} from "./styles";

type Props = {
  issues: IssueInfoType;
  onNewSearch: (data: { search?: string }) => Promise<void>;
  onPostViewer: (postNumber: number | undefined) => void;
};

const BlogContent: FC<Props> = ({ issues, onNewSearch, onPostViewer }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <>
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
      <FormContainer onSubmit={handleSubmit(onNewSearch)}>
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
              onPostViewer={onPostViewer}
            />
          ))
        ) : (
          <EmptyBlog />
        )}
      </PostContainer>
    </>
  );
};

export default BlogContent;
