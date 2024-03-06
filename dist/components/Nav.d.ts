/// <reference types="react" />
import { Navigation } from "../types";
export type NavProps = {
    navigation: Navigation[];
    className?: string;
};
declare const Nav: React.FC<NavProps>;
export default Nav;
