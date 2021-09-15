import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../firebase"
import "./css/form.css"

let PublicPreview = ()=>{

    let {rid} = useParams()

    let [previewData, setPreviewData] = useState(null);

    useEffect(()=>{
        firestore.collection("resume").doc(rid).get().then((doc)=>{
            let data = doc.data();
            setPreviewData(data);
        })
    },[])

    
    return <> 

    { 
        previewData && previewData.details.isPublic?<>
        <p className = {`template-${previewData.code}`}>{previewData.details.fname}</p>
        </>:"Not publically available"
    }
    
    </>
}

export default PublicPreview