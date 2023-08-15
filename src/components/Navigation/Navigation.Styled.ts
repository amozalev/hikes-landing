import styled from 'styled-components';

type Props = {
    column?: boolean;
};

export const StyledNavigation = styled.nav<Props>`
    display: flex;
    ${({ column }) => `
    flex-direction: ${column ? 'column' : 'row'};
    `}
    gap: 16px;
`;
