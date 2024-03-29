import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from "../../images/logo.png";

const FooterPage: React.FC = () => {
  return (
    <Box component="footer" sx={{
      bgcolor: '#15171F',
      color: 'white',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '20px'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens, horizontally on medium and up
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', // Adjusted to 100% to handle responsiveness
        gap: { xs: '10px', md: '0' }, // Increase gap for vertical layout on small screens
        maxWidth: '900px', // Optional: Constrain max width for larger screens
      }}>
        {/* Left box */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          mt: { xs: 0, sm: '20px' },
          mb: { xs: 0, sm: '20px' }
        }}>
          <img src="https://agas.eu/img/frontend/phone.png" alt="Description" style={{ width: '50px', border: '2px solid white', borderRadius: '50px', marginBottom: '10px' }} />
          <Typography variant="body2" sx={{fontWeight: '100'}}>Email: info@agas.eu</Typography>
        </Box>

        {/* Middle box */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* First row */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Typography variant="body2" sx={{ border: '1px solid white', padding: '4px'}}>Condizioni</Typography>
            <Typography variant="body2" sx={{ border: '1px solid white', padding: '4px' }}>Home page</Typography>
            <Typography variant="body2" sx={{ border: '1px solid white', padding: '4px' }}>Chi siamo</Typography>
          </Box>
          {/* Second row */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Typography variant="body2" sx={{ border: '1px solid white', padding: '4px' }}>Dove siamo</Typography>
            <Typography variant="body2" sx={{ border: '1px solid white', padding: '4px' }}>Informativo sui cookie</Typography>
            <Typography variant="body2" sx={{ border: '1px solid white', padding: '4px' }}>Privacy</Typography>
          </Box>
        </Box>

        {/* Right box */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '5px',
          mt: { xs: 0, sm: '20px' }
          }}>
          <img src="https://agas.eu/attachment/img/resized/d7t7t014.png" alt="Description" style={{ width: '50px', border: '2px solid white', borderRadius: '50px', marginBottom: '10px' }} />
          <img src="https://agas.eu/attachment/img/resized/97n5wwrt.png" alt="Description" style={{ width: '50px', border: '2px solid white', borderRadius: '50px', marginBottom: '10px'}} />
        </Box>
      </Box>



      
      {/* Bottom box */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '25px', 
        gap: '10px'
      }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: { xs: '10px', sm: '16px' } }}>aGAS © by vf srl</Typography>
        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: { xs: '10px', sm: '16px' } }}>P.IVA 03418740241</Typography>
        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: { xs: '10px', sm: '16px' } }}>REA VI-324008</Typography>
        <Typography variant="body2" sx={{ fontWeight: 400, fontSize: { xs: '10px', sm: '16px' } }}>Cap. Soc € 80.000,00 i.v. </Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 400, fontSize: { xs: '12px', md: '16px' } }}>CCIAA di Vicenza</Typography>
      </Box>


      {/* Logo */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <img src={logo} alt="Agas" style={{ maxWidth: '100px', height: '55px' }} />
      </Box>
    </Box>
  );
};

export default FooterPage;
