import { addDoc, collection, getDocs} from "firebase/firestore"
import { db } from "../../firebase-config"
import { toast } from "react-toastify";
import { setBookList } from "./bookSlice";

export const addBookAction = async (bookInfo) =>{
    try{
        const docRef= await addDoc(collection(db, "books"),bookInfo);
        toast.success("Book Added Successfully")
        

    }
    catch (e){

        toast.error("Error Occured")


    }
}

export const getBookList = () => async(dispatch)=>{
try{
    console.log("hello")
    const querySnapshotPromise= getDocs(collection(db, 'books'));
    toast.promise(querySnapshotPromise,{
        pending:'In Progress ...'
    })
    const querySnapshot= await querySnapshotPromise
    const booksListArr= [];
    querySnapshot.forEach((doc) => {
           const id = doc.id;
           const bookData = doc.data();
           console.log("inside loop", bookData);
          
           booksListArr.push({id, ...bookData
            
        });
        console.log("hello");

     });
     console.log(booksListArr);
     dispatch(setBookList(booksListArr));
    }
catch(e){
 console.log(e.message)
toast('failed',e.message);
}
}
