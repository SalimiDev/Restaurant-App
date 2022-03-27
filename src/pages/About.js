import React from 'react';
import '../styles/About.css';
import AboutImage from '../assets/about.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore eveniet, minima consequatur
                    recusandae quod doloribus hic eum in laborum nemo accusamus nulla reprehenderit facilis quibusdam soluta
                    nam impedit temporibus. Rerum eligendi eveniet sit, natus culpa fugit. Eos incidunt explicabo amet maxime
                    laboriosam deleniti quasi asperiores, quam officia sed libero, obcaecati, dicta perspiciatis nihil
                    tempore numquam aut at impedit atque nobis? Placeat perspiciatis illo voluptatibus, nostrum, quisquam
                    explicabo ducimus commodi quo numquam fugit ut dolore consectetur officiis cupiditate eius temporibus
                    mollitia cum a delectus eligendi magnam. Nobis quos dolores tempora, enim architecto nisi consequatur?
                    Fugiat, aut tempora tenetur repellat, quaerat incidunt saepe deserunt sit ratione obcaecati, dolore
                    aspernatur quia numquam possimus. Saepe labore qui dignissimos optio, quis debitis iure perferendis
                    quisquam hic nisi, aliquid sapiente. Magni odio officiis suscipit fugit esse praesentium cum.
                    Exercitationem atque inventore modi nostrum recusandae necessitatibus pariatur quas explicabo sunt, quod
                    illo laudantium earum, eaque cumque obcaecati commodi qui! Accusamus dolore fugiat itaque nostrum amet
                    sequi esse porro nulla voluptatibus temporibus ipsum corporis soluta, laborum beatae dolor doloribus
                    illum deserunt dolorum hic quae. Dignissimos officiis sint ullam vel velit similique iusto aliquid,
                    adipisci quis recusandae excepturi saepe sequi minus deleniti quasi distinctio illo reprehenderit!
                    Delectus, sequi est?
                </p>
            </div>
        </div>
    );
};

export default About;
