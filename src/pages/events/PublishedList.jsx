import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButtonRelative } from "../../components/buttons";
import { TitleCard } from "../../components/cards/cards.styled";
import { ModuleVerticalMultiCard } from "../../components/feeds/ModuleVerticalMultiCard";
import { Footer } from "../../components/footer/Footer";
import { NavRail } from "../../components/navs/NavRail";
import { NavTop } from "../../components/navs/NavTop";
import { eventService } from "../../services/API/eventService";
import { Col, DetailText, Row, View } from "../../styles/styles.styled";
import { Wrapper } from "../search/search.styled";

export const PublishedList = () => {
    const [publishedEvents, setPublishedEvents] = useState();    
    const navigate = useNavigate();

    useEffect(()=>{
        getPublishedEvents()
    },[]);

    const getPublishedEvents = () => {
        eventService.getPublishedEvents().then(res => {
            if (!res) return
            setPublishedEvents(res)
        })
    }

    return (
            <View height='80%'>
            <NavTop/>
            <NavRail/>
                <Wrapper>
                    <Row height='15%' width='95%'>
                        <Col width='4rem' alignItems='flex-start'>
                            <BackButtonRelative callback={()=>navigate(-1)}/>
                        </Col>
                        <Col>
                            <TitleCard>My events:</TitleCard>
                        </Col>
                    </Row>
                    
                    <Col height='85%'>
                        {publishedEvents && publishedEvents.length > 0 ?
                        <ModuleVerticalMultiCard events={publishedEvents} title={publishedEvents.length === 1?`You have posted ${publishedEvents.length} event`: publishedEvents.length > 1? `You have posted ${publishedEvents.length} events` : ''}/>
                        :
                        <DetailText>You haven't posted any event yet.</DetailText>
                        }
                    </Col>
                </Wrapper>
                <Footer/>
            </View>    
            )
}