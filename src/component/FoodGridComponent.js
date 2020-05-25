
import styled from 'styled-components';
import { TitleStyle } from '../styles/title';

export const FoodGridComponent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap 20px;
`;

export const FoodComponent = styled.div`
    height: 200px;
    background-image: ${({ img }) => `url(${img});`};
    font-size: 20px;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    margin-top: 5px;
    transition-property: box-shadow margin-top; 
    transition-duration: .1s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px;
    &:hover{
        margin-top: 0px;
        margin-bottom: 5px;
        cursor: pointer;
        opacity: 0.9;
    }
}
`;

export const FoodLabelComponent = styled(TitleStyle)`
    position: absolute;
    background-color: #ffffffa1;
    padding: 5px;
`;
