// components/Loader.jsx
import { CircularProgress, Box } from '@mui/material';

const Loader = () => (
  <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    }}
  >
    <CircularProgress />
  </Box>
);

export default Loader;