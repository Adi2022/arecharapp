import React from 'react'
import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from 'react'

const styles = {
  main: {
    position: "relative",
    marginTop: {
      xs: "36%",
      md: "10%"
    }
  },
  callQueryButton: {
    transform: "rotate(-90deg)",
    backgroundColor: "#009090",
    color: "#fff",

    "@media (max-width: 600px)": {
      width: "100px", // Adjusted width for medium screens
      height: "50px", // Adjusted height for medium screens
    },
    "@media (max-width: 400px)": {
      width: "40px", // Adjusted width for small screens
      height: "40px", // Adjusted height for small screens
    },
    "@media (max-width: 320px)": {
      width: "30px", // Adjusted width for extra small screens
      height: "30px", // Adjusted height for extra small screens
    },
  },
  buttonContainer: {
    position: "fixed", // Change position to "fixed"
   
    zIndex: 999,
    top:{
      md:"400px",
      xs:"150px"
    },
    right:{
      md:"-10px",
      xs:"-10px"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "300px",
    borderRadius: "8px",
  },
};

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Box sx={styles.buttonContainer}>
        <Button
          sx={styles.callQueryButton}
          onClick={handleOpenModal}
        >
          Call Query
        </Button>
      </Box>
      <Modal open={isModalOpen} onClose={handleCloseModal} sx={styles.modal}>
        <Box sx={styles.modalContent}>
          <TextField label="Name" variant="outlined" fullWidth margin="normal" />
          <TextField label="Email" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default ModalComponent;
