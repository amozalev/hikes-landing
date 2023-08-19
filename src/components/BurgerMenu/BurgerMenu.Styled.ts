import styled from 'styled-components';

export const StyledBurgerMenu = styled.div`
    .menu {
        display: flex;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transform: translateX(200vw);
        transition: transform 350ms linear;
    }

    .menu[data-open='true'] {
        transform: translateX(0);
    }

    .menu-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 16px;
        background: #1a3e3e;
    }

    .icon-wrapper {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
    }

    @media (min-width: 850px) {
        display: none;
    }
`;
