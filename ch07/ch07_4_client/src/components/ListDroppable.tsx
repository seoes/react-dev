import { useRef } from "react";
import { DivProps } from "./Div";
import { useDrop } from "react-dnd";

export type ListDroppableProps = DivProps & {};

export function ListDroppable({ ...props }: ListDroppableProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [, drop] = useDrop({
        accept: "list",
    });
    drop(divRef);
    return <div ref={divRef} {...props} />;
}
