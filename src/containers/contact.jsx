import React from "react";
import { useForm } from "react-hook-form";
import { postEmail, upperOneStr, successToast, errorToast } from "../functions/generalFunction";
import '../styles/contactStyles.css'

const Contact = () => {
    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm()

    function onSubmit({name,lastName,phone,email,msj}) {
        postEmail(
            upperOneStr(name),
            upperOneStr(lastName),
            phone,
            email,
            msj)   
        .then(({data}) => successToast(data))
        .then(() => reset({
            name: '', 
            lastName: '', 
            phone: '', 
            email: '', 
            msj: ''
        }))
        .catch(err => {console.log(err); errorToast('Correo no enviado')})
    }

    return(
        <div id="contact">
            <div>
                <h1>CONTACTO</h1>
            </div>

            <div className="box">
                <div className="boxContact1">
                    {/* <div>DIRECCION</div> */}
                    <div className="box3">
                        <a className="links" href="https://www.google.com.ar/maps/place/Av+Irraz%C3%A1bal+1167,+Encarnaci%C3%B3n,+Paraguay/@-27.3346994,-56.9793559,8z/data=!4m5!3m4!1s0x9457955a1a923bad:0x8616a8f24401dae2!8m2!3d-27.3346994!4d-55.8587505" target="_blank" rel="noreferrer" >
                            <div>
                                <ion-icon id="location" name="location-sharp"></ion-icon>
                                <div>Av Irrazábal 1167, Encarnación, Paraguay</div>
                            </div>
                        </a>
                    </div>

                    {/* <div>FACEBOOK</div> */}
                    <div className="box3">
                        <a className="links" href="https://www.facebook.com/Rd-constructora-vial-1122582417763854/" target="_blank" rel="noreferrer" >
                            <div>
                                <ion-icon id="facebook" name="logo-facebook"></ion-icon>
                                <div>RD Construccíon Vial</div>
                            </div>
                        </a>
                    </div>

                    {/* <div>TELEFONO</div> */}
                    <div className="box3">
                        <a className="links" href="tel:+595985728995" target="_blank" rel="noreferrer" >
                            <div>
                                <ion-icon id="phono" name="call-sharp"></ion-icon>
                                <div>+595 985 728995</div>
                            </div>
                        </a>
                    </div>

                    {/* <div>WHATSAPP</div> */}
                    <div className="box3">
                        <a className="links" href="https://wa.me/5491136893101" target="_blank" rel="noreferrer" >
                            <div>
                                <ion-icon id="whatsapp" name="logo-whatsapp"></ion-icon>
                                <div>+595 985 728995</div>
                            </div>
                        </a>
                    </div>

                    {/* <div>EMAIL</div> */}
                    <div className="box3">
                        <a className="links" href="mailto:constructoravial.rd@gmail.com" target="_blank" rel="noreferrer" >
                            <div>
                                <ion-icon id="email" name="mail"></ion-icon>
                                <div>constructoravial.rd@gmail.com</div>
                            </div>
                        </a>
                    </div>

                </div>
                <form  className="boxContact2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="boxFulname">
                        <div>
                            <div><input {...register("name", { required: true })} placeholder="Nombre" required/></div>
                            <div><input {...register("lastName", { required: true })} placeholder="Apellido" required/></div>
                        </div>

                        <div>
                            <div><input {...register("phone", { required: true })} placeholder="Telefono" required/></div>
                            <div><input {...register("email", { required: true })} placeholder="E-mail" required type="email"/></div>   
                        </div>
                    </div>
                    <div className="box1">
                        <textarea {...register("msj", { required: true })} placeholder="Mensaje..." required ></textarea>
                    </div>

                    <div>
                        <input className="buttonSend" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

