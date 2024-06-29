import { makeStyles } from "@mui/styles";
export const homeStyle=makeStyles({
  card: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    border: '1px solid #ccc',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    position: 'absolute',
    
  },
  content: {
    textAlign: 'center',
    position:'sticky'
  },
    

})