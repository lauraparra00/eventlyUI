import React from "react";
import { Row, View } from "../../styles/styles.styled";
import { ModuleVerticalSmallCard } from "./ModuleVerticalSmallCard";
import { ModuleTags } from "./ModuleTags";
import { ModuleHorizontalMidCard } from "./ModuleHorizontalMidCard";
import { LinkButton } from "../buttons/LinkButton";
import { ModuleVerticalMainCard } from "./ModuleVerticalMainCard";
import { Wrapper, FeedCnt } from "./feed.styled.jsx";

export const HomeFeed = ({ events, tags, tag, setTag, eventsByTag, setEventsByTag, onlineEvents, offlineEvents, seeAll, setSeeAll, participations }) => {

    return (
        <View>
            <Wrapper>
                <Row height='unset' justifyContent="flex-end">
                    {tag ?
                        <LinkButton callback={() => { setTag(); setEventsByTag(); setSeeAll(false) }} content={'Clear'} />
                        :
                        !seeAll ?
                            <LinkButton callback={() => { setSeeAll(true); setTag(); setEventsByTag() }} content={'See All'} /> :
                            <LinkButton callback={() => { setSeeAll(false); setTag(); setEventsByTag() }} content={'By type'} />}
                </Row>

                <ModuleTags tags={tags} callback={(data) => { setTag(data); setSeeAll(false) }} />

                <FeedCnt>
                    {!eventsByTag && !seeAll &&
                        <React.Fragment>
                            <ModuleHorizontalMidCard title={'Offline'} events={offlineEvents} />
                            <ModuleVerticalSmallCard title={'Online'} events={onlineEvents} />
                        </React.Fragment>
                    }
                    {!seeAll && eventsByTag && <ModuleVerticalMainCard title={'By tag'} events={eventsByTag} width={'29rem'} />}
                    {seeAll && !eventsByTag && <ModuleVerticalMainCard title={'All'} events={events} width={'29rem'} />}
                </FeedCnt>
            </Wrapper>
        </View >
    )
}