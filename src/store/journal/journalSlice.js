import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null
    //   active:{
    //     id:'Avas',
    //     title:'',
    //     body:'',
    //     date:123456,
    //     imagetUrls:[]
    //   }
}

export const journalSlice = createSlice({
    name: 'journal',
    initialState,
    reducers: {
        savingNewNote:(state) =>{
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNodeById: (state, action) => {

        },

    },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNodeById, savingNewNote} = journalSlice.actions
