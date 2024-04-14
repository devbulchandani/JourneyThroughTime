import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { RootState } from "../state";
import { Box } from "@mui/material"
import { themeSettings } from '../theme';
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as apiClient from "../apiClient"
// import React from 'react';


type Period = {
    name: string,
    startDate: Date | number,
    startPeriod: string
    endDate: Date | number,
    endPeriod: string,
    IconUrl: string,
}




const PeriodTimeline = () => {
    const mode = useSelector((state: RootState) => state.mode);
    const theme = themeSettings(mode).palette;

    const { era } = useParams()
    const { data: period } = useQuery("getPeriodByEra", () => {
        if (!era) {
            return; // If era is not provided, do not make the API call
        }
        return apiClient.getPeriodByEra(era);
    }, {
        enabled: !!era // Enable the query only when era is truthy
    });
    const periods = period || [];

    return (
        <Box mt="3rem" width="100%" zIndex="1">

            <Timeline >
                {periods.map((era: Period) => (
                    <TimelineItem>
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
                        <TimelineSeparator
                            sx={{
                                height: "10rem"
                            }}
                        >
                            <TimelineConnector />
                            <TimelineDot sx={{
                                p: "0",
                                m: "0",
                                bgcolor: "#ffffff",
                            }}  >
                                {
                                    era.name === "Present" ? (
                                        <Typography variant="h6" component="span" fontSize="2rem"
                                            p="1rem 2rem"
                                            color={theme.primary.light}>
                                            {era.name}
                                        </Typography>
                                    ) : (

                                        <img src={era.IconUrl} width="100%" style={{
                                            objectFit: "contain",
                                            borderRadius: "50%",
                                            width: "5rem"
                                        }} />


                                    )
                                }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ m: 'auto 0' }} >
                            <Typography variant="h6" component="span" fontSize="2rem" position="relative"
                                top="5rem"
                            >
                                {era.name !== "Present" && (
                                    era.name
                                )}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}


            </Timeline>
        </Box>
    )
}

export default PeriodTimeline
