import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";

interface ILink{
    href: string;
    children: any;
}

export function Link({href, children}: ILink) {
    return (
        <NextLink href={href}>
            <a>
                {children}
            </a>
        </NextLink>
    );
}

Link.protoTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
