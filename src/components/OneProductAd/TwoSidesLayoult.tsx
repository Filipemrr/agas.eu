import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import { typographyClasses } from '@mui/joy/Typography';
import ReactPlayer from 'react-player/youtube';

export default function TwoSidedLayout({children, reversed,}: React.PropsWithChildren<{ reversed?: boolean }>) {
    return (
        <Container
            sx={(theme) => ({
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: reversed ? 'column-reverse' : 'column',
                alignItems: 'center',
                py: 10,
                gap: 4,
                [theme.breakpoints.up(834)]: {
                    flexDirection: 'row',
                    gap: 6,
                },
                [theme.breakpoints.up(1199)]: {
                    gap: 12,
                },
            })}
        >
            <Box
                sx={(theme) => ({
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    maxWidth: '50ch',
                    textAlign: 'center',
                    flexShrink: 999,
                    [theme.breakpoints.up(834)]: {
                        minWidth: 420,
                        alignItems: 'flex-start',
                        textAlign: 'initial',
                    },
                    [`& .${typographyClasses.root}`]: {
                        textWrap: 'balance',
                    },
                })}
            >
                {children}
            </Box>
            <AspectRatio
                ratio={16 / 9}
                variant="outlined"
                sx={(theme) => ({
                    minWidth: 300,
                    alignSelf: 'stretch',
                    [theme.breakpoints.up(834)]: {
                        alignSelf: 'initial',
                        flexGrow: 1,
                        '--AspectRatio-maxHeight': '540px',
                        '--AspectRatio-minHeight': '385px',
                    },
                    borderRadius: 'sm',
                    bgcolor: 'background.level2',
                    flexBasis: '50%',
                })}
            >
                <ReactPlayer url={`https://www.youtube.com/watch?v=4fFix5dUVgY&t=24s`}
                             width='100%'
                             height='100%'
                             controls={false}
                             playing
                             loop
                />
            </AspectRatio>
        </Container>
    );
}
