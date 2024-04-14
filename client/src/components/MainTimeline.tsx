import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { RootState } from "../state";
import { Box, Icon, Button } from "@mui/material";
import { GiStoneAxe } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { themeSettings } from '../theme';
import { useSelector } from 'react-redux';
import stone from "../../public/5234916.png";
import ancient from "../../public/ancient.jpeg";
import { useNavigate } from 'react-router-dom';
import React from 'react';

type Era = {
    name: string,
    startDate: Date | number,
    startPeriod: string
    endDate: Date | number,
    endPeriod: string,
    icon: string,
}

const eras: Era[] = [
    {
        name: "Prehistory",
        startDate: 3000000,
        startPeriod: "BC",
        endDate: 3000,
        endPeriod: "BC",
        icon: stone
    },
    {
        name: "Ancient history",
        startDate: 3000,
        startPeriod: "BC",
        endDate: 500,
        endPeriod: "AD",
        icon: ancient
    },
    {
        name: "Post-classical history",
        startDate: 500,
        startPeriod: "AD",
        endDate: 1500,
        endPeriod: "AD",
        icon: stone

    },
    {
        name: "Early modern period",
        startDate: 1500,
        startPeriod: "AD",
        endDate: 1800,
        endPeriod: "AD",
        icon: stone

    },
    {
        name: "Late modern period",
        startDate: 1800,
        startPeriod: "AD",
        endDate: new Date().getFullYear(),
        endPeriod: "AD",
        icon: stone
    },
    {
        name: "Present",
        startDate: 2024,
        startPeriod: "AD",
        endDate: new Date().getFullYear(),
        endPeriod: "AD",
        icon: stone
    },
]

const MainTimeline = () => {
    const mode = useSelector((state: RootState) => state.mode);
    const theme = themeSettings(mode).palette;
    const navigate = useNavigate();

    const goToTimeline = (eraName: string) => {
        navigate(`/${eraName.toLowerCase().replace(/\s+/g, '')}`);
    };

    return (
        <Box mt="3rem" width="100%" zIndex="1">
            <Timeline>
                {eras.map((era: Era) => (


                    <TimelineItem key={era.name}>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            fontSize="2rem"
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {era.name !== "Present" && (
                                <>
                                    {era.startDate.toString()}, {era.startPeriod}
                                </>
                            )}
                        </TimelineOppositeContent>
                        <TimelineSeparator sx={{ height: "10rem" }}>
                            <TimelineConnector />
                            <TimelineDot sx={{ p: "0", m: "0", bgcolor: "#ffffff" }}>
                                {era.name === "Present" ? (
                                    <Typography variant="h6" component="span" fontSize="2rem"
                                        p="1rem 2rem"
                                        color={theme.primary.light}>
                                        {era.name}
                                    </Typography>
                                ) : (
                                    <img src={era.icon} width="100%" style={{
                                        objectFit: "contain",
                                        borderRadius: "50%",
                                        width: "5rem"
                                    }} />
                                )}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ m: 'auto 0' }} >
                            <Button onClick={() => goToTimeline(era.name)} style={{ width: '100%', padding: 0 }}>
                                <Typography variant="h6" component="span" fontSize="2rem" position="relative"
                                    top="5rem"
                                >
                                    {era.name !== "Present" && (
                                        era.name
                                    )}
                                </Typography>
                            </Button>
                        </TimelineContent>
                    </TimelineItem>

                ))}
            </Timeline>
        </Box>
    )
}

export default MainTimeline;
