import styled from 'styled-components';

type Props = {
    backgroundColor?: string | undefined;
};

export const StyledColoredSection = styled.section<Props>`
    display: flex;
    flex-direction: column;
    background: ${({ backgroundColor }) => backgroundColor || '#fff'};
`;
