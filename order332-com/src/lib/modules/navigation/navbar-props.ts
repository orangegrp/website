type NavbarProps = {
    links: {
        text: string,
        url: string,
        align: "left" | "middle" | "right",
        isButton?: boolean
    }[]
};

export type { NavbarProps };