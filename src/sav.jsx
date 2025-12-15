<div className="project-card flex flex-col justify-center items-center relative gap-[1rem] pb-[0.5rem]">
            <div className="project-card-inner">
                <div className="project-card-front flex justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageSrcFront})` }}>
                    <div className="title-project relative">
                        <div className="project-card-wrapper relative">
                            <h5 className="title text-[var(--dark-color)] z-10 relative">{title}</h5>
                            <div className="blur-bg"></div>
                        </div>
                    </div>
                </div>
                <div className="project-card-back flex justify-center bg-[var(--light-color)] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageSrcBack})` }}>
                    <div className="project-card-back-inner h-full relative flex flex-col justify-center items-center gap-[1rem] p-[1rem]">
                        {/* <h6 className="title relative z-10">Description</h6> */}
                        <p className="techno-description text-[var(--dark-color)] relative z-10">{description}</p>
                        <TechnoUsed icons={technos} />
                        <div className="blur-bg-back"></div>
                    </div>
                </div>
            </div>
            <SecondaryBtn to={projectLink} />
        </div>