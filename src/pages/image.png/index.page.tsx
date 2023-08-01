import Image from "next/image"
import favicon from "public/favicon.png"
import { blog1, home, projects } from "~/assets"

const ImageLink = () => {
  return (
    <>
      <Image src={home} width={1280} height={720} alt="logo RSB" />
      <Image src={projects} width={1280} height={720} alt="logo RSB" />
      <Image src={blog1} width={1280} height={720} alt="logo RSB" />
      <Image src={favicon} width={128} height={72} alt="logo RSB" />
    </>
  )
}

export default ImageLink
