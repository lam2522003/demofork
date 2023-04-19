import React from "react";
import { Simulate } from "react-dom/test-utils";
import "./Content2_Item.css";

const Content2_Item = () => {
    return (
        <div className="Content2_Item">
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/148019114_1165401657196262_949220552139744148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=idb3ZF6PqwcAX-1oJOS&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDmw2OpjbJhq57ZpALR-W5H55RVCYth0tPB-lAFE-9jfA&oe=64658F90"></img>
                <p className="Content2_Item--text">
                    ProManage is undoubtedly the top-choice Product Management Tool for company. Efficiency and intelligence are built into the design, which enables a very smooth management workflow experience, from design, implementation! I switched to using ProManage 5 years ago and have never looked back. It has certainly made my business easier. I am producing more with less effort.
                    <h3 className="Content2_Item--dev">
                        Le Hai Lam
                    </h3>
                    <h4 className="Content2_Item--job">
                        Founder of Avengers
                    </h4>
                </p>
            </div>
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Angie%20Jones.jpg">
                </img>
                <p className="Content2_Item--text">
                    I'm an old school developer, so I didn't move to IntelliJ IDEA when all the cool kids did. However, when I started teaching coding workshops for engineers, the participants asked if they could use it. I realized then that I should try it. Wow, was I missing out! I've been using it extensively ever since and love how efficient it makes me as a developer.
                    <h3 className="Content2_Item--dev">
                        Angie Jones
                    </h3>
                    <h4 className="Content2_Item--job">
                        Senior Developer Advocate & Java Champion
                    </h4>   
                </p>
                 
            </div>    
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Mercedes%20Wyss.png"></img>
                <p className="Content2_Item--text">
                    What I like the most about IntelliJ IDEA, far beyond all the technology integrations, shortcuts, and that kind of stuff that makes us more productive, are the simple and smart suggestions. They suggest how to name everything, applying naming conventions that give us best practices, or they give us instructions on how to migrate to new Java features. This is one of the characteristics that I highlight in talks with students.
                    <h3 className="Content2_Item--dev">
                        Mercedes Wyss
                    </h3>
                    <h4 className="Content2_Item--job">
                        Groundbreakers Ambassador & CTO
                    </h4>
                </p>
                
            </div>
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Mohamed%20Taman.jpg"></img>
                <p className="Content2_Item--text">
                    I always feel happy and at home when working on my projects using IntelliJ IDEA Ultimate Edition. First of all, it makes me productive and does a lot in a short time. It is like a Swiss Army knife, providing me with all the features and tools I need to finish the task at hand seamlessly and more effectively. And it comes complete with excellent code tips and amazing testing support.
                    <h3 className="Content2_Item--dev">
                        Mohamed Taman
                    </h3>
                    <h4 className="Content2_Item--job">
                        Owner/CEO & Java Champion
                    </h4>
                </p>
            </div>
        </div>
    );
}

export default Content2_Item;
