.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    gap: 1rem;
    width: 100%;
    padding: 2rem;
    place-items: center;
}

/******************************************************************************/
/****************************** Responsive Design *****************************/
/******************************************************************************/

/****************************** format tablette *****************************/
@media (max-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(2, 1fr);
        height: auto;
    }
}

/****************************** format mobile *****************************/
@media (max-width: 768px) {
    .projects-text {
        align-items: center;
        text-align: center;
    }

    .projects-paragraphs {
        width: 100%;
        font-size: 0.95rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        height: auto;
        gap: 3rem;
    }
}