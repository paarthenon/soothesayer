import React from 'react';
import {useDispatch} from 'react-redux';
import {MenuView, View} from '@/core/view';
import {Action} from '@/redux/actions';
import {isOfVariant} from 'variant';

export interface LinkProps {
    text?: string;
    goto?: View | MenuView;
    href?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
export const Link = ({text, goto, href, onClick, children}: LinkProps) => {
    const dispatch = useDispatch();
    function click() {
        if (onClick != undefined) {
            onClick();
        } else if (goto != undefined) {
            if (isOfVariant(goto, View)) {
                dispatch(Action.GoTo(goto))
            } else if (isOfVariant(MenuView)) {
                dispatch(Action.GoToMenuView(goto));
            }
        } else if (href != undefined) {
            window.location.href = href;
        }
    }
    const linkStyle: React.CSSProperties = {
        cursor: 'pointer',
        textDecoration: 'underline',
    };
    return (
        <a style={linkStyle} onClick={click}>
            {text}
            {children}
        </a>
    );
};
