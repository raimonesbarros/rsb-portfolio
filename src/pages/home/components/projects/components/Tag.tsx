import { FC } from "react";
import { TagContent } from "./Tag.styles";

const Tag: FC<TagProps> = ({ content }) => (
  <TagContent $variant={content}>{content}</TagContent>
);

export default Tag;
