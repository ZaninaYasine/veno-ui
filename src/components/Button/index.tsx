// Libraries Imports
import React from "react";

// Styled component import
import styled from "styled-components";
import GlobalStyle from "../../globalStyles";

// Types
export interface VnButtonProps {
    color?: "primary" | "secondary";
    size?: "default" | "small" | "large";
    leftAdorment?: any;
    rightAdorment?: any;
    status?: "danger" | "success" | "warning" | "undefined";
    radius?: "xs" | "s" | "m" | "l" | "xl" | "full";
    dropDown?: boolean;
    fullWidth?: boolean;
}

/**
 * Generic button comopnent with custom props that include:
 * @param color Pick which color you wish to render the button
 * @param size can pick one of three sizes for the button
 * @param leftAdorment Takes any HTML element
 * @param rightAdorment Takes any HTML element
 * @param status This gives a status color to the button
 * @param dropDown Adds an indicator that this button has dropDown menu available
 * @param fullWidth If passed as true the button will take all the space available
 */
const Button = (props: VnButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <>
            <GlobalStyle />
            <ButtonComponent {...props}>
                {props.leftAdorment}
                <span>{props.children}</span>
                {props.rightAdorment}
            </ButtonComponent>
            {props.dropDown && (
                <DropDown {...props}>
                    <svg viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
                    </svg>
                </DropDown>
            )}
        </>
    );
};

// Types

const ButtonComponent = styled.button<VnButtonProps>`
    /* dimenssions */
    width: ${(props) => (props.fullWidth ? (props.dropDown ? "calc(100% - 31px)" : "100%") : "fit-content")};
    height: auto;

    /* display */
    display: inline-grid;
    grid-template-columns: ${(props) => (props.leftAdorment ? "24px" : "")} 1fr ${(props) =>
            props.rightAdorment ? "24px" : ""};

    ${(props) => props.size === "default" && "padding: 6px"};
    ${(props) => props.size === "small" && "padding: 4px"};
    ${(props) => props.size === "large" && "padding: 10px"};

    ${(props) => props.color === "primary" && "background-color: var(--primary)"};
    ${(props) => props.color === "secondary" && "background-color: var(--secondary)"};

    ${(props) => props.status === "success" && "background-color: var(--success); color: #ffffff"};
    ${(props) => props.status === "warning" && "background-color: var(--warning); color: #ffffff"};
    ${(props) => props.status === "danger" && "background-color: var(--danger); color: #ffffff"};

    border-top-left-radius: var(${(props) => (props.radius ? "--radius-" + props.radius : "--radius-s")});
    border-top-right-radius: ${(props) =>
        props.dropDown ? `0` : `var(${props.radius ? "--radius-" + props.radius : "--radius-s"})`};
    border-bottom-left-radius: var(${(props) => (props.radius ? "--radius-" + props.radius : "--radius-s")});
    border-bottom-right-radius: ${(props) =>
        props.dropDown ? `0` : `var(${props.radius ? "--radius-" + props.radius : "--radius-s"})`};

    border: var(--border);
    /* box-shadow: inset 0px 1px 1px rgba(7, 1, 1, 0.06), inset 0px -1px 1px rgba(0, 0, 0, 0.25); */
    span {
        height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        display: flex;

        ${(props) => props.color === "primary" && "color: var(--primary-contrast)"};
        ${(props) => props.color === "secondary" && "color: var(--secondary-contrast)"};

        ${(props) => props.status === "success" && "color: #ffffff"};
        ${(props) => props.status === "warning" && "color: #ffffff"};
        ${(props) => props.status === "danger" && "color: #ffffff"};

        ${(props) => props.size === "default" && "padding: 0 6px; font-size: 1rem; font-weight: 600"};
        ${(props) => props.size === "small" && "padding: 0 4px; font-size: 0.825rem; font-weight: 400"};
        ${(props) => props.size === "large" && "padding: 0 10px; font-size: 1.125rem; font-weight: 700"};
    }
`;

export const DropDown = styled.button<VnButtonProps>`
    height: auto;

    display: inline-grid;

    ${(props) => props.size === "default" && "padding: 6px 3px"};
    ${(props) => props.size === "small" && "padding: 4px 3px"};
    ${(props) => props.size === "large" && "padding: 10px 3px"};

    vertical-align: bottom;

    ${(props) => props.color === "primary" && "background-color: var(--primary); color: var(--primary-contrast)"};
    ${(props) => props.color === "secondary" && "background-color: var(--secondary); color: var(--secondary-contrast)"};

    ${(props) => props.status === "success" && "background-color: var(--success)"};
    ${(props) => props.status === "warning" && "background-color: var(--warning)"};
    ${(props) => props.status === "danger" && "background-color: var(--danger)"};

    border-top-right-radius: var(${(props) => (props.radius ? "--radius-" + props.radius : "--radius-s")});
    border-bottom-right-radius: var(${(props) => (props.radius ? "--radius-" + props.radius : "--radius-s")});

    border: var(--border);
    border-left: 1px solid #00000022;

    svg {
        margin: auto;
        path:last-child {
            ${(props) => props.color === "primary" && "fill: var(--primary-contrast)"};
            ${(props) => props.color === "secondary" && "fill: var(--secondary-contrast)"};
        }
    }
`;

export default Button;
