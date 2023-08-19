import styled from 'styled-components';

type Props = {
    backgroundColor?: string | undefined;
};

export const StyledSection = styled.section<Props>`
    display: flex;
    flex-direction: column;
    background: ${({ backgroundColor }) => backgroundColor || '#fff'};
`;
