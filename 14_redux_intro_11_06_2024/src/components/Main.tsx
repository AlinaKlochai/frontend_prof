import { FC, useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import Library from "./Library";
import Sandwich from "./Sandwich";
import { navItems } from "../utils/constants";
import { IPageContext, PageContext } from "../App";

const Main: FC = () => {
    const { page } = useContext(PageContext) as IPageContext;
    const [backgroundClass, setBackgroundClass] = useState<string>('');

    useEffect(() => {
        switch (page) {
            case navItems[0]:
                setBackgroundClass('counter-bg');
                break;

            case navItems[1]:
                setBackgroundClass('sandwich-bg');
                break;

            case navItems[2]:
                setBackgroundClass('library-bg');
                break;

            default:
                setBackgroundClass('white');
                break;
        }
    }, [page]);

    return (
        <div className={backgroundClass}> {/* Здесь применяем класс CSS */}
            {page === navItems[0] && <Counter />}
            {page === navItems[1] && <Sandwich />}
            {page === navItems[2] && <Library />}
        </div>
    );
};

export default Main;
