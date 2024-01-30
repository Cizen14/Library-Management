import { addDoc, collection, doc, getDoc, getDocs, setDoc} from "firebase/firestore"
import { db } from "../../firebase-config"
import { toast } from "react-toastify";
import { setBookList, setSelectedBook } from "./bookSlice";



export const addBookAction = async (bookInfo) =>{
    try{
        const docRef= await addDoc(collection(db, "books"),bookInfo);
        toast.success("Book Added Successfully")
        

    }
    catch (e){

        toast.error("Error Occured")
    }
}

export const getBookListAction = () => async(dispatch)=>{
try{

    //get the books list from the firebase db

    const querySnapshotPromise= getDocs(collection(db, 'books'));
    toast.promise(querySnapshotPromise,{
        pending:'In Progress ...'
    })
    const querySnapshot= await querySnapshotPromise;
    const booksListArr= [];
    querySnapshot.forEach((doc) => {
           const id = doc.id;
           const bookData = doc.data();
           booksListArr.push({id, 
            ...bookData
        });
     });
 
     dispatch(setBookList(booksListArr));
        }
catch(error){
 console.log(error.message)
toast('failed',error.message);
}
}

export const updateBookAction = async ({ id, ...restBook }) => {
    try {
      const bookRef = doc(db, "books", id);
      await setDoc(bookRef, restBook, { merge: true })
      toast.success("Book updated!")
    } catch(e) {
      console.log(e);
    }
  }

export const getBookByIdAction = (id) => async (dispatch) =>{
    
     
    try{
        //get the user document from firebase database
        const docRef= doc(db, 'books', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()){
            const book = {
                ...docSnap.data(), id
            }
            dispatch(setSelectedBook(book))
        }
        else{
            
            toast.error("Book Not found!")
            
            
        }
    }
    catch(e){
        console.log(e);
    }
}
