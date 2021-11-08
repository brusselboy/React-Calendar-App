import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {EventActionCreators} from "../store/reducers/event/action-creators";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    useEffect(() => {
        dispatch(EventActionCreators.fetchGuests())
        dispatch(EventActionCreators.fetchEvents(user.username))
    }, [])

    const handleCancel = () => {
        setModalVisible(false)
    }

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false)
        dispatch(EventActionCreators.createEvent(event))
    }

    return (
        <Layout>
            <Row justify={"center"}>
                <Button
                    onClick={() => setModalVisible(true)}
                    style={{margin: '1rem'}}
                >
                    Добавить событие
                </Button>
            </Row>
            <EventCalendar events={events} />
            <Modal
                title={"Добавить событие"}
                visible={modalVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;