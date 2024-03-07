import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

interface props {
    title: string,
    content: string
}

export default function FeedbackCard({ title, content }: props) {
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
                marginTop: "3%",
                borderRadius:"0px",
                borderBottom: "4px solid #3CA062"
            }}
        >
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
            <CardContent>
                <Typography level="title-lg">{title}</Typography>
                <Typography level="body-sm">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
}
