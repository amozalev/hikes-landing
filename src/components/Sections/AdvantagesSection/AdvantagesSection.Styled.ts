import styled from 'styled-components';

export const StyledAdvantagesSection = styled.div`
    .advantages {
        display: grid;
        grid-template: repeat(3, 1fr) / 1fr auto;
        gap: 32px 16px;
    }

    .advantage {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`;
