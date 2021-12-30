import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./about-us";
import { AboutCompany } from "./about-company";

export function About() {

    return (
        <div>
            <h1>React application with React Router</h1>

            <Routes>
                <Route path={'/us'} element={<AboutUs />} />
                <Route path={'/company'} element={<AboutCompany />} />
            </Routes>
        </div>
    )
}
