import React from "react";
import {Business} from "./Business";
import {Innovative} from "./Innovative";

export const About = () => (
    <div className="about">
        <div className="about__inner">
            <Business/>
            <Innovative/>
        </div>
    </div>
)