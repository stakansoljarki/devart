import React from "react";
import SvgIcon from "./SvgIcon";

const ShoppingCartIcon = ({className}) => {
    return(
        <SvgIcon className={className} width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M14 19.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM10.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-1.336-5L7.187 6H24l-2.938 7H9.164ZM4.195 3l3.432 12h12.597l-.839 2H6.146L2.672 5H.743L0 3h4.195Z" fill="#fff"
            />
        </SvgIcon>
    )
}

export default ShoppingCartIcon;
