import React, { ReactChildren } from "react";

type ContainerType = {
    children: JSX.Element|JSX.Element[];
}

const Container = ({ children }: ContainerType) => {
    return (
        <main className=" max-w-screen-md my-10 px-5 container mx-auto">
            {children}
        </main>
    );
}

export default Container;