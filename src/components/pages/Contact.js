import React from "react";
import '../../App.css';
import '../Button.css';
import Footer from "../Footer";

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact-wrapper">
                    <h1 className='contact-title'>Contactenos</h1>
                    <form action='' className='contact-form'>
                        <div>
                            <input type='text' className='form-control' placeholder='Nombre' />
                        </div>
                        <div>
                            <input type='email' className='form-control' placeholder='Email' />
                        </div>
                        <div>
                            <input type='tel' className='form-control' placeholder='Telefono' />
                        </div>
                        <div>
                            <textarea
                                name=''
                                id=''
                                className='form-control'
                                cols="30"
                                rows="4"
                                placeholder='Comentarios'>
                            </textarea>
                        </div>
                        <div className=''>
                            <button className='btn btn--medium'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact