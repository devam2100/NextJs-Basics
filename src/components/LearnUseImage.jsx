

import Image from "next/image"
import MyImage from "../../public/1.png"
const LearnUseImage = () => {
  return (
    <div>
      <Image src={MyImage} alt="devam" height={50} width={50} />
    </div>
  )
}

export default LearnUseImage
