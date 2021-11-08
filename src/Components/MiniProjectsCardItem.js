import React from 'react';

function MiniProjectsCardItem(props) {
    return (
        <div className="d-none d-sm-block mb-4 col-lg-4 col-md-6">
            <div className="card">
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}<a className="ms-2" target="__blank" href={props.projectSrc}><i className="fab fa-github"></i></a>
                    {
                        props.deploymentLink && <a className="ms-2" target="__blank" href={props.deploymentLink}><i className="fas fa-arrow-alt-circle-right"></i></a>
                    } </h5>
                    <div className="d-flex mt-2 mb-4">
                        {
                            props.techStack.map((data) => {
                                return (
                                    <p style={{ backgroundColor: "#007BFF", fontWeight: 600 }} className="my-0 me-1 badge">{data}</p>
                                );
                            })
                        }
                    </div>
                    <p className="card-text">{props.projectDesc}</p>
                    <h6 className="ps-0 nav-link">{props.projectType}</h6>
                </div>
            </div>
        </div>
    );
}

export default MiniProjectsCardItem;