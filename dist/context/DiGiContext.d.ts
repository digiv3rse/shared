/// <reference types="react" />
import { Container } from "unstated-next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import components from "../components/DefaultComponents";
import hooks from "../hooks/DefaultHooks";
export type DiGiComponentsType = typeof components & {
    ConnectButton?: typeof ConnectButton.Custom;
    Image: typeof Image;
    Link: typeof Link;
};
export type DiGiHooksType = typeof hooks;
export type DiGiSharedContextType = {
    GlobalContext?: Container<any>;
};
export type DiGiContextType = {
    components: DiGiComponentsType;
    hooks: DiGiHooksType;
    context: DiGiSharedContextType;
};
declare const _default: import("react").Context<DiGiContextType>;
export default _default;
