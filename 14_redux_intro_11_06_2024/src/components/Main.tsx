import { FC, useContext } from "react";
import Counter from "./Counter";
import Library from "./Library";
import Sandwich from "./Sandwich";
import { navItems } from "../utils/constants";
import { IPageContext, PageContext } from "../App";

const Main: FC = () => {
    const { page } = useContext(PageContext) as IPageContext;

    let backgroundClass = '';
    switch (page) {
        case navItems[0]:
            backgroundClass = 'counter-bg';
            break;
        case navItems[1]:
            backgroundClass = 'sandwich-bg';
            break;
        case navItems[2]:
            backgroundClass = 'library-bg';
            break;
        default:
            backgroundClass = 'white';
            break;
    }

    return (
        <div className={backgroundClass}> {/* Здесь применяем класс CSS */}
            {page === navItems[0] && <Counter />}
            {page === navItems[1] && <Sandwich />}
            {page === navItems[2] && <Library />}
        </div>
    );
};

export default Main;

