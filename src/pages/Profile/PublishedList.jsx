import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BackButtonRelative } from "../../components/buttons";
import { TitleCard } from "../../components/cards/cards.styled";
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard";
import { Footer } from "../../components/footer/Footer";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Col, DetailText, Row, View } from "../../styles/styles.styled";
import { Wrapper } from "./search.styled";

export const PublishedList = () => {
    const [eventsByTag, setEventsByTag] = useState();    
    const navigate = useNavigate();
    const location = useLocation()
    const tagName = location.search.split("=")[1]

    useEffect(()=>{
        if(!tagName) return;
        getEventsByTag(tagName)
    },[tagName]);

    const getEventsByTag = (tagName) => {
        eventService.getEventsByTag(tagName).then(res => {
            if (!res) return
            setEventsByTag(res)
        })
    }

    return (
            <View height='80%'>
            <NavTop/>
                <Wrapper>
                    <Row height='15%' width='95%'>
                        <Col width='4rem' alignItems='flex-start'>
                            <BackButtonRelative callback={()=>navigate(-1)}/>
                        </Col>
                        <Col>
                            <TitleCard>With tag {tagName}</TitleCard>
                        </Col>
                    </Row>
                    
                    <Col height='85%'>
                        {eventsByTag && eventsByTag.length > 0 ?
                        <ModuleVerticalMultiCard tag={tagName} events={eventsByTag} title={eventsByTag.length === 1?`${eventsByTag.length} event found`: eventsByTag.length > 1? `${eventsByTag.length} events found` : ''}/>
                        :
                        <DetailText>There are no events with this tag.</DetailText>
                        }
                    </Col>
                </Wrapper>
                <Footer/>
            </View>    
            )
}