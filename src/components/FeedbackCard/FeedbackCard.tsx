import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

interface props {
    title: string,
    location: string
    content: string,
}

export default function FeedbackCard({ title, location, content }: props) {
    return (
        <Card
            variant="outlined"
            sx={{
                width: '100%',
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e0dddd",
                borderRadius:"0px",
                borderBottom: "4px solid #3CA062"
            }}
        >
            
            <CardContent sx={{width: '80%', marginTop: '5%'}}>
                <Typography level="body-sm" sx={{fontSize: '90%'}}>
                    {content}
                </Typography>
                <Typography level="title-lg" sx={{marginTop: '6%'}}>{title}</Typography>
                <Typography level="title-lg" sx={{fontSize: '90%'}}>{location}</Typography>
            </CardContent>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Avatar src="/static/images/avatar/1.jpg" size="lg"/>
                <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px'}}>
                    <Avatar src="/static/images/avatar/2.jpg" />
                    <Avatar src="/static/images/avatar/3.jpg" />
                    <Avatar src="/static/images/avatar/4.jpg" />
                    <Avatar>+112</Avatar>
                </AvatarGroup>
            </Box>
        </Card>
    );
}
