import styled from 'styled-components';

type Props = {
    color?: string;
    hoverColor?: string;
};

export const StyledIconButton = styled.button<Props>`
    background: none;
    border: none;
    color: ${({ color }) => color || '#fff'};

    :hover {
        cursor: pointer;
        color: ${({ hoverColor }) => hoverColor || '#F2BE22'};
    }
`;
