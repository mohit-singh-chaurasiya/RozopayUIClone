import { Transform, Visibility } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
export const acceptStyle = makeStyles({
   

    card: {
        position: 'relative',
        // width: '100%',
        height: '100%',
        // border: '1px solid #ccc',
        borderRadius: 8,
      
        overflow: 'hidden',
        '&:hover $description': {
          transform: 'translateY(0)',
        },
    },
    content: {
        padding: 6,
        textAlign: 'center',
      },
      description: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
         
        transform: 'translateY(100%)',
        transition: 'transform 0.25s ease-in-out',
      },
    

    
    



})
