import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Casino from './Casino';
import Cricket from './Cricket';
import Navbar from './Navbar';


function Home() {
    const dispatch = useDispatch();
    const [tabValue, setTabValue] = useState(0);
    const handleTabs = (e, val) => {
        setTabValue(val);
    }
    return (
        <>
            <Navbar />
            <div className="row">
                <div className='col-6'>
                    <div className="home_image">

                    </div>
                    <div className="home_tabs">
                        <AppBar position="static" className="home_tabs_bar" style={{ background: "#34568b" }}>
                            <div>
                                <Tabs value={tabValue} onChange={handleTabs} TabIndicatorProps={{
                                    style: {
                                        background: "#11174b"
                                    }
                                }} >
                                    <Tab label="Casino" />
                                    <Tab label="Cricket" />
                                </Tabs>
                            </div>
                        </AppBar>
                        {tabValue === 0 && <Casino />}
                        {tabValue === 1 && <Cricket />}
                    </div>

                </div>
            </div>
        </>



    )
}
export default Home