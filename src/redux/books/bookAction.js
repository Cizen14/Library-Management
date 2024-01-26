import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase-config"
import { toast } from "react-toastify";

export const addBookAction = async (bookInfo) =>{
    try{
        const docRef= await addDoc(collection(db, "books"),bookInfo);
        toast.success("Book Added Successfully")
        

    }
    catch (e){

        toast.error("Error Occured")


    }
}