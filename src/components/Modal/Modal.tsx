import {useContext} from 'react'
import {DataContext} from '../../context/models'

import './Modal.css'
import {Button} from '../Button'

function Modal() {
    const {modalContent, isModalOpen} = useContext(DataContext)
    const {setIsModalOpen} = useContext(DataContext)

    const closeOnClick = () => setIsModalOpen(false)
    
    return (
        <dialog id='modal' className='modal' aria-hidden={!isModalOpen}>
            <menu>
                <li>
                    <Button blockElement='modal' variant='secondary' onHandleClick={closeOnClick} >
                        fechar
                    </Button>
                </li>
            </menu>
            
            {modalContent}
        </dialog>
    )
}

export {Modal}