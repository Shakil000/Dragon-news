import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/LayoutComponent/LeftNavbar';
import RightNavbar from '../components/LayoutComponent/RightNavbar';
import CategoryNews from '../Pages/CategoryNews';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <header>
            <Header></Header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
           </header>
           <nav className='w-11/12 mx-auto py-5'>
            <Navbar></Navbar>
           </nav>
           <main className='w-11/12 mx-auto py-5 grid grid-cols-12 gap-7'>
            <aside className='col-span-2'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-8'>
              <Outlet></Outlet>
            </section>
            <aside className='col-span-2'>
                <RightNavbar></RightNavbar>
            </aside>
           </main>
        </div>
    );
};

export default MainLayout;