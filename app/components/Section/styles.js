import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionContainer = styled.div`
  margin: 20px;
`;
const SectionStyled = styled.a`
  width: 100px;
  height: 100px;
  background: #e5e5e5;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SectionName = styled.div`
  text-align: center;
  margin-top: 10px;
  color: #232323;
`;
const Options = styled.div`
  width: 150px;
  position: absolute;
  margin-left: -25px;
  margin-top: 15px;
  height: auto;
  border-radius: 20px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    background: #e5e5e5;
    margin-top: -10px;
    z-index: -1;
    margin-left: 65px;
    transform: rotate(45deg);
  }
`;
const Option = styled(Link)`
  padding: 10px;
  text-align: center;
  color: #232323;
  text-decoration: none;
`;

export { SectionContainer, SectionStyled, SectionName, Options, Option };
