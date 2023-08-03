import styled from 'styled-components';

type Props = {
    color: string;
};

export const StyledAdvantageIconCard = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background: ${({ color }) => color || '#fff'};
`;
