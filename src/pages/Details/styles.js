import styled from "styled-components";

export const Container =styled.div`
    width: 90vw;
    margin: auto;

    a + div {
      display: flex;
      align-items: center;
      gap: 2rem;

      > h2 {
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
      }

      svg {
        font-size: 2rem;
      }
      
    }

    aside:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 50px;
      
      > button {
        background: none;
        font-size: 16px;
        color: ${ ({ theme } ) => theme.COLORS.GRAY_400};
      }
    }

    h2 + div {
      margin: 9px 0;
    }

    p img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    div + div { 
      display: flex;
      gap: 1rem;
      
      p, span {
        display: flex;
        align-items: center;
        gap: 0.8rem; 
      };

      svg {
        color: ${ ({ theme }) => theme.COLORS.PINK };
      }
    }

    div:nth-child(4) {
      margin-block: 2.7rem 4.5rem;
    }
 
    @media(min-width:768px) {
      width: 77vw;
    }
`;