import { async } from "@firebase/util";
import { DockSharp } from "@mui/icons-material";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes} from "../../helpers";
import { addNewEmptyNote, deleteNodeById, savingNewNote, setActiveNote, setNotes, setPhotosToActivesNote, setSaving, updateNote } from "./";

export const startNewNote = () => {

    return async ( dispatch , getState ) => {

        dispatch( savingNewNote() );
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime()
        }

        const newDoc = doc( collection(FirebaseDB,`${ uid }/journal/notes`));

        const setDocResp = await setDoc(newDoc,newNote);

        newNote.id = newDoc.id;
       
        dispatch( addNewEmptyNote(newNote) );
        dispatch( setActiveNote(newNote) );

    }
}


export const startLoadingNotes = () =>{
    return async ( dispatch , getState ) => {
        const { uid } = getState().auth;
        if(!uid)  throw new Error("Usuario no existe");
        
       const notes = await loadNotes( uid );

       dispatch( setNotes(notes) )

    }

}

export const startSavingNotes = () => {

    return async (dispatch, getState) => {

        dispatch(setSaving())


        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const noteToFireStore = { ...note };

        delete noteToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        await setDoc( docRef, noteToFireStore, {merge:true});

        dispatch( updateNote( note ));

    }

}


export const startUploadingFiles = ( files = [] ) => {

    return async (dispatch, getState) => {

        dispatch(setSaving());

 
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }

        const photosUrls = await Promise.all(fileUploadPromises);
       

        dispatch(setPhotosToActivesNote(photosUrls));


      
    }

}

export const startDeletingNote = ( ) => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        const resp = await deleteDoc(docRef);

        dispatch( deleteNodeById( note.id ));


    }

}