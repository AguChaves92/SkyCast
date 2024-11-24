import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Tooltip,
} from "@mui/material";
import { useContextProvider } from "../../hooks/useMyContexthooks";
import { t } from "../../location/location";


interface Props {
    open:boolean,
    onClose:()=>void
}

const ContactFormModal = ({ open, onClose }:Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { setIsLoading } = useContextProvider();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (data:any) => {
    setIsLoading(true);
    // Simulamos el envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowSuccessMessage(true);
    reset();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Formulario de Contacto
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Tooltip title={t('yourEmail')}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              error={!!errors.email}
            />
          </Tooltip>
          <Tooltip title={t('comments')}>
          <TextField
            fullWidth
            margin="normal"
            label="Pregunta"
            multiline
            rows={4}
            {...register("question", { required: "La pregunta es requerida" })}
            error={!!errors.question}
            />
            </Tooltip>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
          {t('send')}
          </Button>
        </form>
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={6000}
          onClose={() => setShowSuccessMessage(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={() => setShowSuccessMessage(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {t('messageSentSuccesfully')}
          </Alert>
        </Snackbar>
      </Box>
    </Modal>
  );
};

export default ContactFormModal;
