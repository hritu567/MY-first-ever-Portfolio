import React from "react";
import "./portfolio.css";
import {SectionContainer} from "./../SectionContainer/SectionContainer";
import {SideNav} from'./../SideNav/SideNav';

export const Portfolio =({handleSectionClick, about, skills, selectedHeading, selectedQuote, selectedSection, projects})=>{
    return(
            <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                handleSectionClick={handleSectionClick}/>
            </div>
            <div className="main-section-container">
                <SectionContainer
                 about={about}
                 skills={skills}
                 selectedHeading={selectedHeading}
                 selectedQuote={selectedQuote}
                 selectedSection={selectedSection}
               
               />
            </div>
        </div>
    )
}