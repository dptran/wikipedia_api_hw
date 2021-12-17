import React from 'react'
import { Route, Routes } from 'react-router'
import { Wiki } from './Wiki'

export const Main = () => {
    return (
        <React.Fragment>
            <header>

            </header>

            <main className="container">
                <Routes>
                    <Route path='/Wiki' element={<Wiki />} />
                </Routes>
            </main>

            <footer>

            </footer>
        </React.Fragment>
    )
}
