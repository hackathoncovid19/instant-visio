import React from 'react'
import {
    useParams
} from "react-router-dom"
import VideoCallFrame from './components/VideoCallFrame/VideoCallFrame'

const Call = () => {
    let {callId}  = useParams()

    return  <div>
        <VideoCallFrame url={`https://instantvisio.daily.co/${callId}`}/>
    </div>
}

export default Call
