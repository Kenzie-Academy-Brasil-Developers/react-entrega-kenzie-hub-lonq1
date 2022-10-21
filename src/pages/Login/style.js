import styled from "styled-components";

export const MainLogin = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    height: 100vh;

    header {
        justify-content: center;
    }

    h2 {
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 18px;
        text-align: center;
        margin: 20px 0;
    }

    a > p {
        margin: 10px 0;
    }

    .btn__redirect {
        border-radius: 4px;
        padding: 10px 0;
        width: 100%;
        text-align: center;
        border: none;
        background: var(--color-grey-1);
        border: 1.2182px solid transparent;
        font-weight: 500;
        font-size: 12.8347px;
        color: var(--color-grey-0);

        &:hover {
            background: var(--color-primary-focus);
        }

        @media (min-width: 1080px) {
            font-size: 16.5px;
        }
    }

    .link__redirect {
        max-width: max-content;
        align-self: center;
    }
`;
