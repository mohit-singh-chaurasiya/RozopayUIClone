import styled from '@emotion/styled';
import { makeStyles } from "@mui/styles";
export const useScroll=makeStyles ({
    sliderContainer: {
        overflow: 'hidden',
        display: 'flex',
        width: '100%', // Adjust width as needed
      },
      cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease-in-out', // Smooth scrolling
      },
      card: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '20%',
        height: '20%',
        borderRadius: '10px', // Add desired border radius
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Add subtle shadow
        transform: 'translateY(0)', // Initial transform for stacking effect
      },

      pages :{
        position: 'sticky',
        width: '100%',
        height: '100vh',
            top: 0,
        
        display: 'inline-block',
        padding: '10px',
        boxSizing: 'border-box',
        msScrollbarShadowColor:'#000'
    }

    
  }) 
const Slider = styled.div`
  /* Use styles from useStyles here */
  ${({ classes }) => `
    .${classes.sliderContainer} {
      ...${classes.sliderContainer}
    }
    .${classes.cardContainer} {
      ...${classes.cardContainer}
    }
    .${classes.card} {
      ...${classes.card}
    }
  `}
`;