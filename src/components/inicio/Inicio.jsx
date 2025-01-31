import React from 'react'
import './inicio.css'
import Footer from '../footer/Footer'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import {motion} from 'framer-motion'
import ReactPlayer from 'react-player'

const Inicio = () => {
    const [showModal, setShowModal] = useState(false)
    const [projectIndex, setProjectIndex] = useState(0)

    const gridContainerVariants = {
        hidden: {
          opacity: 0
          }, 
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25
          }
        }
    }

    const gridElementVariants = {
        hidden: {opacity: 0, y: 70},
        show: {opacity: 1, y: 0}
    }
    
      const gridElementTransition = {
        duration: 0.5,
        delay: 0.25
    }

    const openImage = (index) => {
        showImage();
        setProjectIndex(index)
    }

    const getImages = (index) => {
        switch(index){
            case 0:
                return(
                    <div className='wrapper'>
                        <div className='card-wrapper'><img src="/totopos1.png" alt="totopos1" /></div>
                        <div className='card-wrapper'><img src="/totopos2.png" alt="totopos2" /></div>
                        <div className='card-wrapper'><img src="/totopos3.png" alt="totopos3" /></div>
                        <div className='card-wrapper'><img src="/totopos4.png" alt="totopos4" /></div>
                        <div className='card-wrapper'><img src="/totopos5.png" alt="totopos5" /></div>
                        <div className='card-wrapper'><ReactPlayer url={"https://www.youtube.com/watch?v=3h2N0ZKLR3w"}></ReactPlayer></div>
                    </div>
                )
            case 1:
                return(
                    <div className='wrapper'>
                        <div className='card-wrapper'><img src="/chafafans_menu.gif" alt="chat_mc" /></div>
                        <div className='card-wrapper'><img src="/chat_mc.png" alt="" /></div>
                        <div className='card-wrapper'><ReactPlayer url={"https://www.youtube.com/watch?v=sIZuNa0HAOA"}></ReactPlayer></div>
                    </div>
                )
            case 2:
                return(
                    <div className='wrapper'>
                        <img className='card-wrapper' src="/skypagina.png" alt="" />
                    </div>
                )
            case 3:
                return(
                    <div className='wrapper'>
                        <div className='card-wrapper'><ReactPlayer url={"https://www.youtube.com/watch?v=84uIDWVS9Zc"}></ReactPlayer></div>
                    </div>
                )
            case 4:
                return(
                    <div className='wrapper'>
                        <div className='card-wrapper'><img src="/pixel2.png" alt="" /></div>
                        <div className='card-wrapper'><img src="/pixel3.png" alt="" /></div>
                        <div className='card-wrapper'><img src="/pixel4.png" alt="" /></div>
                        <div className='card-wrapper'><img src="/pixel5.png" alt="" /></div>
                        <div className='card-wrapper'><img src="/pixel6.png" alt="" /></div>
                        <div className='card-wrapper'><img src="/pixel7.png" alt="" /></div>
                    </div>
                )
        }
    }

    const showImage = () => setShowModal(true)
    const hideImage = () => setShowModal(false)

  return (
    <div id='inicio'>
        <Modal dialogClassName='modal-image' show={showModal} onHide={hideImage} centered>
            <Modal.Body className='modalBody-image'>
                {getImages(projectIndex)}
            </Modal.Body>
        </Modal>
        <motion.div variants={gridElementVariants} initial="hidden" animate="show" transition={gridElementTransition} id='container-title'>
            <motion.div variants={gridElementVariants} initial="hidden" animate="show" transition={gridElementTransition}>
                <h1>Bienvenidos</h1>
                <p>Mi nombre es Manuel Arotinco, un estudiante de ingenieria de sistemas enfocado en el desarrollo web y más familiarizado con los
                    lenguajes de programación Java y Javascript. Adicionalmente, aplico mis conocimientos en el desarrollo de mods y 
                    datapacks para el videojuego de Minecraft, a su vez también trabajando en la administración de servidores y el manejo
                    de errores.
                </p>
            </motion.div>
            <img src="/manuxs.jpg" alt="" />
        </motion.div>

        <motion.div variants={gridElementVariants} initial="hidden" animate="show" transition={gridElementTransition} style={{textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{marginBottom:'0', color:'whitesmoke'}}>Mis proyectos</h1>
            <p style={{color:'whitesmoke'}}>Aquí pueden ver una colección de los proyectos en los que he trabajado (dar click a las imágenes para ver más información)</p>

            <motion.div variants={gridElementVariants} initial="hidden" animate="show" transition={gridElementTransition} id='container-projects'>
                <div className='card-project'>
                    <div className='container-img' onClick={() => openImage(0)}>
                        <img src="/totopos1.png" alt="" />
                    </div><br />
                    <div style={{textAlign:'left'}}>
                        <h2>TotoposLand</h2>
                        <p>Servidor de Minecraft creado por el streamer T0psue2 en el cual tuve la oportunidad de ser uno de los
                            administradores que llevarian a cabo la realización del servidor. Principalmente, me encargué de los ajustes
                            generales del servidor así como de la instalación de mods y plugins y sus configuraciones. A lo largo de la
                            vida del servidor también me tuve que hacer cargo de la solución de crasheos en la consola y bugs que se
                            los jugadores reportaban.
                        </p>
                    </div>
                </div>
                <div className='card-project'>
                    <div className='container-img' onClick={() => openImage(1)}>
                        <img src="/chafafans.png" alt="" />
                    </div><br />
                    <div style={{textAlign:'left'}}>
                        <h2>Chafafans 2</h2>
                        <p>Servidor de Minecraft creado y administrado por mi para una comunidad pequeña de discord llamada "Skyland".
                            Me encargué pincipalmente de la instalación de mods y sus configuraciones, así como el manejo de errores y bugs que
                            se presentaban en el servidor. También, configure un canal en el servidor de discord para que los miembros del servidor
                            se puedan comunicar con los jugadores
                        </p>
                    </div>
                </div>
                <div className='card-project'>
                    <div className='container-img' onClick={() => openImage(2)}>
                        <img src="/skyawards.png" alt="" />
                    </div><br />
                    <div style={{textAlign:'left'}}>
                        <h2>Skyland Awards</h2>
                        <p>Los Skyland Awards son unas premiciaciones que se llevaron a cabo en un servidor de discord llamado "Skyland".
                            Se me encargó la tarea de crear una pagina web para las votaciones. Esta fue creada en una biblioteca de 
                            Javascript llamada React y esta conectada a una base de datos en donde se almacena toda la información.
                        </p>
                        <a rel='noopener noreferrer' target='_blank' href="https://skyawards-client.vercel.app/"><img className='icono' src="/netIcon.svg" alt="" /></a>
                    </div>
                </div>
                <div className='card-project'>
                    <div className='container-img' onClick={() => openImage(3)}>
                        <img src="/slendy.png" alt="" />
                    </div><br />
                    <div style={{textAlign:'left'}}>
                        <h2>Slendytubbies Mod</h2>
                        <p>Un mod en el que recientemente he estado trabajando. Como indica su nombre se trata de una recreación del famoso
                            juego indie de terror "Slendytubbies" dentro de Minecraft. Sigue aún en desarrollo y estara disponible para la 
                            versión de Forge 1.20.1. Se esta utlizando MCreator para su creación.
                        </p>
                    </div>
                </div>
                <div className='card-project'>
                    <div className='container-img' onClick={() => openImage(4)}>
                        <img src="/pixel1.png" alt="" />
                    </div><br />
                    <div style={{textAlign:'left'}}>
                        <h2>Proyectos pixel art</h2>
                        <p>En cada proyecto en el que me involucré también tuve que crear diseños pixel art ya sea para items, modelos,
                            interfaces, etc.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>

        <Footer/>
    </div>
  )
}

export default Inicio