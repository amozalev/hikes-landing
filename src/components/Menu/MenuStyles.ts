import styled from 'styled-components';

export const StyledMenu = styled.div`
    display: flex;
    justify-content: space-between;
    height: 44px;

    .menu {
        position: fixed;
        top: 0;
        left: 100vw;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 16px;
        background: #1a3e3e;

        z-index: 1000;
        transition: transform 250ms linear;
    }

    .open {
        transform: translateX(-100vw);
    }

    .icon-wrapper {
        display: flex;
        justify-content: flex-end;
        padding: 5px;
    }

    //@media (min-width: 390px) {
    //}
`;
