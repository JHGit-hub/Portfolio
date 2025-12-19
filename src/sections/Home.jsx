import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import Globe from "../components/globe";

export default function Home() {

    return (
        <SectionWrapper id="home">
            <div className="flex items-center">
                <div className="w-1/2 h-[400px]">
                    <Globe />
                </div>
                <div className="flex h-screen items-center">
                    <div className="w-1/2">
                        <h1>Développeur Web</h1>
                        <p className=" font-['poppins-semibold'] ">React · Symfony · WordPress</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>

    );
}