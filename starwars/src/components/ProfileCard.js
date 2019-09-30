import React from 'react';
import {Card, CardText, CardTitle} from 'reactstrap';

export default function ProfileCard(props) {

    return (
        <Card className="character-profile">
            <CardTitle><h2>{props.name}</h2></CardTitle>
            <CardText>Height: {props.height}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Eye Color: {props.eye_color}</CardText>
            <CardText>Hair Color: {props.hair_color}</CardText>
        </Card>
    )
}