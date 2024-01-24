import { ReactNode } from 'react';
import { TEXT_TYPES, TEXT_ALIGN } from './constants';

type TTextType = (typeof TEXT_TYPES)[number];
type TTextAlign = (typeof TEXT_ALIGN)[number];

export interface ITextProps {
    children: ReactNode;
    level: TTextType;
    size: number;
    weight?: number | string;
    color?: string;
    text_align?: TTextAlign;
    className?: string;
}

export interface ITextStyle {
    size: number;
    fontWeight?: number | string;
    color?: string;
    text?: TTextAlign;
}
