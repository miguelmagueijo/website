import ArrowDown from "./ArrowDown.astro";
import Box from "./Box.astro";
import Clipboard from "./Clipboard.astro";
import CodeDesktop from "./CodeDesktop.astro";
import Email from "./Email.astro";
import Facebook from "./Facebook.astro";
import Github from "./Github.astro";
import HambugerMenu from "./HamburgerMenu.astro";
import LinkedIn from "./LinkedIn.astro";
import Suitcase from "./Suitcase.astro";
import User from "./User.astro";

const DEFAULT_WIDTH = "500px";
const DEFAULT_HEIGHT = "500px";
const DEFAULT_STROKE = "#000000";
const DEFAULT_STROKE_WIDTH = 2;
const DEFAULT_FILL = "none";

export function cleanProps(props: SvgIconArgs) {
    props.width = props.width || DEFAULT_WIDTH;
    props.height = props.height || DEFAULT_HEIGHT;
    props.stroke = props.stroke || DEFAULT_STROKE;
    props.fill = props.fill || DEFAULT_FILL;

    if (props.class) {
        if (props.class.includes("stroke-"))
            props.stroke = null;
        if (props.class.includes("fill-"))
            props.fill = null;
        if (props.class.includes("w-"))
            props.width = null;
        if (props.class.includes("h-"))
            props.height = null;
    }

    if (isNaN(Number(props.strokeWidth))) {
        props.strokeWidth = DEFAULT_STROKE_WIDTH;
    }

    return props;
}

export const Icons = {
    ArrowDown,
    Box,
    Clipboard,
    CodeDesktop,
    Email,
    Facebook,
    Github,
    HambugerMenu,
    LinkedIn,
    Suitcase,
    User,
};