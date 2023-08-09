import styled from 'styled-components';

type Props = {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
    zIndex?: number;
};
export const StyledRating = styled.div<Props>`
    width: 65px;
    height: 32px;
    padding: 4px 8px;
    border-radius: 4px 0 0 4px;
    background: rgba(253, 253, 253, 0.4);
    backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;

    color: #1a3e3e;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 128.571% */

    position: absolute;
    z-index: ${({ zIndex }) => (zIndex !== undefined ? zIndex : 0)};
    ${({ top }) => top !== undefined && `top: ${top}px;`}
    ${({ right }) => right !== undefined && `right: ${right}px;`}
    ${({ bottom }) => bottom !== undefined && `bottom: ${bottom}px;`}
    ${({ left }) => left !== undefined && `left: ${left}px;`} 
    
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3.5px;
    }
`;
