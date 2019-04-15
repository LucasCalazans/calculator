import styled from 'styled-components';
import colors from '@/helpers/colors';

export const Wrapper = styled.div`
  width: 60%;
  overflow: hidden;
  max-width: 350px;
  border-radius: 20px;
  background-color: #FFF;
`;

export const Result = styled.div`
  color: #FFF;
  padding: 15px;
  font-size: 46px;
  min-height: 80px;
  text-align: right;
  background-color: ${colors.secondary};
`;

export const Expression = styled.div`
  padding: 15px;
  font-size: 26px;
  min-height: 58px;
  text-align: right;
  color: ${colors.secondary};
  background-color: ${colors.white};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border: 0;
  width: 25%;
  color: #FFF;
  cursor: pointer;
  font-size: 20px;
  padding: 25px 15px;
  background-color: ${colors.primary};
  
  :hover {
    background-color: ${colors.primaryDark};
  }
`;
