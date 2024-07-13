import {useContext} from 'react'
import {DataContext} from '../../context/models'

import './Modal.css'
import {Button} from '../Button'

function Modal() {
    const {modalContent, isModalOpen} = useContext(DataContext)
    const {setIsModalOpen} = useContext(DataContext)

    const closeOnClick = () => setIsModalOpen(false)
    
    return (
        <dialog open={isModalOpen} aria-hidden={!isModalOpen}>
            <menu>
                <li>
                    <Button blockElement='modal' variant='secondary' onClick={closeOnClick} />
                </li>
            </menu>
            
            {modalContent}
        </dialog>
    )
}

export {Modal}