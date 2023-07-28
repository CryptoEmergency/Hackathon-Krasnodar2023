declare module "*.svg" {
    const content: String;
    export default content;
}

declare module "*.png" {
    const content: String;
    export default content;
}

declare module "*.jpg" {
    const content: String;
    export default content;
}

declare module "*.jpeg" {
    const content: String;
    export default content;
}

declare module "*.gif" {
    const content: String;
    export default content;
}

declare interface Micro {
    name: String,
    loader: Function,
    display: Function
}