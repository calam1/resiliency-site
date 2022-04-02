import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

function Details() {
    const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
    const container = "scrollContainer";

    const menuRef = useRef(null);
    const [menuHeight, setMenuHeight] = useState(0);

    const isMobile = useMediaQuery({
    });

    useEffect(() => {
        setMenuHeight(menuRef.current.clientHeight);
    }, [menuRef]);

    return (
        <div className="flex absolute right-0 bottom-0 left-0 top-0 justify-center mx-auto overflow-auto" >

            <div id={container} className="container justify-center mx-auto md:flex-row flex flex-col overflow-auto border border-box" style={{ flexBasis: "65%", flex: 2 }} >
                <div ref={menuRef} className="md:w-64  border-r-2 sticky top-0 flex-shrink-0 ">
                    {
                        items.map((item) => (
                            <div className="cursor-pointer m-2 underline" key={item} >
                                <Link
                                    to={item}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    containerId={container}
                                    offset={isMobile ? - menuHeight : null}
                                >
                                    {item}
                                </Link>
                            </div>
                        ))}
                </div>

                <div style={{ flex: 1 }}>
                    {
                        items.map((item) => (

                            <table key={item} id={item} className="container flex justify-center mx-auto flex-col border-b border-gray-200 w-full" >
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            ID
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Name
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Email
                                        </th>
                                        <th className="px-6 py-2 text-xs text-gray-500">
                                            Created_at
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            1
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                Jon doe
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">jhondoe@example.com</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            2021-1-12
                                        </td>
                                    </tr>
                                    <tr className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            1
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                Jon doe
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">jhondoe@example.com</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            2021-1-12
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Details;
