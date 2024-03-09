import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from './TwoSidesLayoult';

export default function oneProductAd() {
    return (
        <TwoSidedLayout>
            <Typography color="primary" fontSize="lg" fontWeight="lg" sx={{color: "#3CA062"}}>
                The power to do more
            </Typography>
            <Typography
                level="h1"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                sx={{color: "white"}}
                >
                Veja a nossa grande gama de produtos
            </Typography>
            <Typography fontSize="lg" textColor="white" lineHeight="lg">
                A descriptive secondary text placeholder. Use it to explain your business
            offer better.
            </Typography>
            <Box
            sx={{
                display: 'flex',
                    gap: 2,
                    my: 2,
                    flexWrap: 'wrap',
                    '& > *': { flex: 'auto' },
            }}
        >
            <Button size="lg" sx={{color: "white", backgroundColor: "#3CA062"}} endDecorator={<ArrowForward/>}>
            Scopri di più
            </Button>
            </Box>
            <Box
            sx={(theme) => ({
                display: 'flex',
                textAlign: 'center',
                alignSelf: 'stretch',
                columnGap: 4.5,
                '& > *': {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    flex: 1,
                },
                [theme.breakpoints.up(834)]: {
                    textAlign: 'left',
                    '& > *': {
                        flexDirection: 'row',
                        gap: 1.5,
                        justifyContent: 'initial',
                        flexWrap: 'nowrap',
                        flex: 'none',
                    },
                },
            })}
        >
            <div>
                <Typography
                    fontSize="xl4"
            fontWeight="lg" textColor="white"
            endDecorator={<Star sx={{ color: '#ece443' }} />}
            >
            4.9
            </Typography>
            <Typography textColor="white">
                Over <b>5k</b> positive <br /> customer reviews.
            </Typography>
            </div>
            <div>
            <Typography textColor="white" fontSize="xl4" fontWeight="lg">
                2M
            </Typography>
            <Typography textColor="white">
                Global <br /> Transactions.
                </Typography>
                </div>
                </Box>
                <Typography
            level="body-xs"
            sx={{
                position: 'absolute',
                    top: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
            }}
        >
            </Typography>
        </TwoSidedLayout>
);
}
