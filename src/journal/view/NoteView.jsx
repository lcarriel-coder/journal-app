import { useMemo, useEffect } from "react";
import {
  DeleteOutline,
  Notes,
  SaveOutlined,
  UploadFileOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
import {
  setActiveNote,
  startDeletingNote,
  startSavingNotes,
  startUploadingFiles,
} from "../../store/journal";
import { useRef } from "react";

//import { ImageGallery } from '../components'

export const NoteView = () => {
  const fileInputRef = useRef();
  const distpatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    if (messageSaved?.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  useEffect(() => {
    distpatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    distpatch(startSavingNotes());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    distpatch(startUploadingFiles(target.files));
  };


  const onDelete = () => {
    distpatch(startDeletingNote());
  };

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: "none" }}
        />

        <IconButton>
          <UploadOutlined
            color="primary"
            disabled={isSaving}
            onClick={() => fileInputRef.current.click()}
          />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un t??tulo"
          label="T??tulo"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="??Qu?? sucedi?? en el d??a de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button onClick={onDelete}>
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      {/* Image gallery */}
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
