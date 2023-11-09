import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => (props.isDragging ? "black" : "magenta")};
  border: 3px solid #39ff14;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  color: ${props => (props.isDragging ? "white" : "black")};
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
