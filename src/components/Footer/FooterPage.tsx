import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from "../../images/logo.png";

const FooterPage: React.FC = () => {
  return (
    <Box component="footer" sx={{ height: '300px', bgcolor: '#15171F', color: 'white', paddingTop: '4%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
      <Box sx={{ position: 'absolute', marginLeft: '50%', display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
        <Box sx={{ textAlign: 'center', mr: 'auto', mt: '10px' }}> {/* Margin top applied here */}
          <img src="https://agas.eu/img/frontend/phone.png" alt="Description" style={{ width: '50px', border: '2px solid white', borderRadius: '50px', display: 'block', margin: '0 auto', marginBottom: '10px' }} />
          <Typography variant="body2">Email: info@agas.eu</Typography>
        </Box>
      </Box>
      {/* Right box */}
      <Box sx={{ position: 'absolute', marginLeft: '50%', justifyContent: 'flex-end', width: '6%'}}>
        {/* Inner Box for the image and Typography */}
        <Box sx={{ display: 'flex', textAlign: 'center', ml: 'auto', mt: '10px' }}> {/* Adjusted for right alignment */}
          <img src="https://agas.eu/attachment/img/resized/d7t7t014.png" alt="Description" style={{ width: '50px', border: '2px solid white', borderRadius: '50px', display: 'block', padding: '5%', margin: '0 auto', marginBottom: '10px' }} />
          <img src="https://agas.eu/attachment/img/resized/97n5wwrt.png" alt="Description" style={{ width: '50px', border: '2px solid white', borderRadius: '50px', display: 'block', padding: '5%', margin: '0 auto', marginBottom: '10px'}} />
        </Box>
      </Box>

      {/* Box for new typographies, structured as two rows */}
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '10px' }}>
        {/* First row */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: 'auto' }}>
          <Typography variant="body2" sx={{ textAlign: 'center', border: '1px solid white', padding: '4px'}}>Condizioni</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', border: '1px solid white', padding: '4px' }}>Home page</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', border: '1px solid white', padding: '4px' }}>Chi siamo</Typography>
        </Box>
        {/* Second row */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: 'auto'  }}>
          <Typography variant="body2" sx={{ textAlign: 'center', border: '1px solid white', padding: '4px' }}>Dove siamo</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', border: '1px solid white', padding: '4px' }}>Informativo sui cookie</Typography>
          <Typography variant="body2" sx={{ textAlign: 'center', border: '1px solid white', padding: '4px' }}>Privacy</Typography>
        </Box>
      </Box>

      {/* Adjusted inner Box with gap property */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '1%', gap: '10px', width: 'auto' }}>
        <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 'bold'}}>aGAS © by vf srl</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 400}}>P.IVA 03418740241</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 400 }}>REA VI-324008</Typography>
        <Typography variant="body2" sx={{ textAlign: 'center', fontWeight: 400 }}>Cap. Soc € 80.000,00 i.v. </Typography>
        <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 400 }}>CCIAA di Vicenza</Typography>
      </Box>

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <img src={logo} alt="Agas" style={{ maxWidth: '100px', height: '55px' }} />
      </Box>
    </Box>
  );
};

export default FooterPage;
