<<<<<<< HEAD
import { FC, useContext } from "react";
=======
import { FC, useContext, useEffect, useState } from "react";
>>>>>>> 84d47a83339b5cb5390191dd5e7974a25f06cbc5
import Counter from "./Counter";
import Library from "./Library";
import Sandwich from "./Sandwich";
import { navItems } from "../utils/constants";
import { IPageContext, PageContext } from "../App";

const Main: FC = () => {
    const { page } = useContext(PageContext) as IPageContext;
<<<<<<< HEAD

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
=======
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
>>>>>>> 84d47a83339b5cb5390191dd5e7974a25f06cbc5

    return (
        <div className={backgroundClass}> {/* Здесь применяем класс CSS */}
            {page === navItems[0] && <Counter />}
            {page === navItems[1] && <Sandwich />}
            {page === navItems[2] && <Library />}
        </div>
    );
};

export default Main;
<<<<<<< HEAD

=======
>>>>>>> 84d47a83339b5cb5390191dd5e7974a25f06cbc5
