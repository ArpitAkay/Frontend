import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import React from 'react'

const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
        <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
                09:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color='secondary' variant='outlined'/>
                {/* <TimelineConnector /> */}
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline
