import Image from "next/image"
import { portfolio } from "~/assets"

const ImageLink = () => {
  return <Image src={portfolio} width={1280} height={720} alt="logo RSB" />
}

export default ImageLink
