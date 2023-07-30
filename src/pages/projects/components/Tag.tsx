import { TagContent } from "./Tag.styles"

const Tag = ({ content }: TagProps) => {
  return <TagContent $variant={content}>{content}</TagContent>
}

export default Tag
