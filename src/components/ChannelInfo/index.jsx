import { useEffect, useState } from "react"
import api from "../../utils/api"


const ChannelInfo = ({id}) => {
    const [channelInfo, setChanelInfo] = useState(null)
    useEffect(()=>{
        api.get(`video/info?id=${id}`).then((res)=>setChanelInfo(res))
     
    },[]);
    console.log(id)
  return (
    <div>
          <h1>ChannelInfo</h1>
    </div>
   
  )
}

export default ChannelInfo