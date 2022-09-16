import Image from "next/image"
import imageOfRes from "../../public/resume.jpg"

export default function resume(){
  return(
	<Image src={imageOfRes} alt="resume image" />
  )
}
