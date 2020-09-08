import React from 'react'
const ArchProjects = () => {
    return (
        <div>
            <div id="architecture">
                <div class="container">
                    <div class="myBody">
                        <div class="row mx-0">
                            <div class="col-lg-12 mt-2">
                                <h1>Academic Projects</h1>
                            </div>
                        </div>
                        <div class="row mx-0 mt-5">
                            <div class="col-lg-3">
                                <h3>Thesis Project:</h3>
                                <h4>
                                    Residential And Cultural Complex
                         <span>with the approach in contextual architecture</span>
                                </h4>
                                <h4>
                                    Location: <span>Qeshm Island,Iran </span>
                                </h4>
                            </div>
                            <div class="col-lg-9 text-right">
                                <a>
                                <img class="ArchPhoto" src={require("../images/Arch/2.jpg")} />
                                </a>
                            </div>
                        </div>
                       

                <div class="row mx-0 my-5">
                    
                            <div class="col-lg-3">
                                <h3>Iranian Art Musuem:</h3>
                                <h4>
                                    Residential And Cultural Complex
                        <span>with the approach in contextual architecture</span>
                                </h4>
                                <h4>
                                    Location:
                             <span>Qeshm Island,Iran </span>
                                </h4>
                            </div>
                            <div class="col-lg-9 text-right">
                                <a>
                                <img class="ArchPhoto" src={require("../images/Arch/13.jpg")} />
                                </a>
                            </div>
                        </div>
                        <div class="row mx-0 my-5 pb-5">
                            <div class="col-lg-3 ">
                                <h3>Iranian Art Musuem:</h3>
                                <h4>
                                    Residential And Cultural Complex
                         <span>with the approach in contextual architecture</span>
                                </h4>
                                <h4>
                                    Location:
                         <span>Qeshm Island,Iran </span>
                                </h4>
                            </div>
                            <div class="col-lg-9 text-right">
                                <a>
                                <img class="ArchPhoto" src={require("../images/Arch/17.jpg")} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchProjects;
