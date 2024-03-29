import styled from "styled-components";

interface iButton {
    backgroundColor?: string;
}

export const Button = styled.button<iButton>`
    background-color: ${({ backgroundColor }) =>
        backgroundColor || "var(--color-primary)"};
    color: #fff;
    font-weight: 500;
    font-size: 12.8347px;

    border: 1.2182px solid transparent;
    border-radius: 4px;

    padding: 10px 0;

    &:hover {
        background: var(--color-primary-focus);
        transition: 0.4s;
    }

    @media (min-width: 1080px) {
        font-size: 16px;
    }
`;
