import React from 'react';
import './sidenav.css';

export const SideNav=({handleSectionClick})=>{
    return(
        <div className="sidenav">
            <img src="https://scontent-del1-1.xx.fbcdn.net/v/t1.15752-9/109748090_1018995878532708_2843945152862440269_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=IxN8A7Uhx6MAX_ws6FE&_nc_ht=scontent-del1-1.xx&oh=a574a4f9b73eb68636293cd3a9f6ecab&oe=5F3C0675"  className="avatar" alt="Hritushree Mog"/>
            <h2 className="main-name">Hritushree Mog</h2>
            <p className="subtitle">"A Cadet Who wants to be a developer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={()=>handleSectionClick("about")} >About Me</p>
                <p className="section-list-element" onClick={()=>handleSectionClick("skills")} >Skills</p>
            </div>
        </div>
    )
}