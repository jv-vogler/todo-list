import Todo from '../interfaces/Todo';
import { RiDeleteBin5Fill, RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri';
import styled from 'styled-components';
import colors from '../constants/colors';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  font-size: 1.3rem;
  user-select: none;

  &::selection {
    color: ${colors.WHITE};
    background-color: ${colors.LIGHT_BLUE};
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DeleteBtn = styled(RiDeleteBin5Fill)`
  font-size: 2rem;
  color: ${colors.LIGHT_RED};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.MEDIUM_RED};
  }
`;

const UncheckedBtn = styled(RiCheckboxBlankLine)`
  font-size: 2rem;
  color: ${colors.LIGHT_BLUE};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.MEDIUM_BLUE};
  }
`;

const CheckedBtn = styled(RiCheckboxFill)`
  font-size: 2rem;
  color: ${colors.LIGHT_BLUE};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${colors.MEDIUM_BLUE};
  }
`;

const TodoList = (props: {
  items: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) => {
  return (
    <List>
      {props.items.map(item => (
        <ListItem key={item.id}>
          {item.text}
          <ActionsContainer>
            {item.completed ? (
              <CheckedBtn onClick={() => props.onToggle(item.id)} />
            ) : (
              <UncheckedBtn onClick={() => props.onToggle(item.id)} />
            )}
            <DeleteBtn onClick={() => props.onRemove(item.id)} />
          </ActionsContainer>
        </ListItem>
      ))}
    </List>
  );
};
export default TodoList;
