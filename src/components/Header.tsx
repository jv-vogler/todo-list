import styled from 'styled-components';
import colors from '../constants/colors';

const StyledHeader = styled.h1`
  color: ${colors.LIGHT_BLUE};
  user-select: none;
`;

const Header = () => {
  return <StyledHeader>Todo App</StyledHeader>;
};
export default Header;
