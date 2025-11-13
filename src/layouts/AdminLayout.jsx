import {Outlet} from 'react-router-dom';
import { Nav } from "../components/Nav/Nav";

export const AdminLayout = () => {
    return (
        <section>
            <Outlet />
        </section>
    );
};
