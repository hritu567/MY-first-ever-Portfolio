import React from 'react';
import './sidenav.css';

export const SideNav=({handleSectionClick})=>{
    return(
        <div className="sidenav">
            <img src="https://i.ibb.co/qMTG0QT/hritushree.jpg"  className="avatar" alt="Hritushree Mog"/>
            <h2 className="main-name">Hritushree Mog</h2>
            <p className="subtitle">"A Cadet Who is looking for an Opportunity in front-end"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={()=>handleSectionClick("about")} >About Me</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("skills")} >Skills</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("projects")} >Projects</p>
            </div>
        </div>
    )
}
