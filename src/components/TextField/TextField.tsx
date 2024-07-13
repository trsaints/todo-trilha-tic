import {ITextField} from './ITextField'

import {Input} from '../../components'

function TextField(props: ITextField) {
    return (
        <div className='text-field'>
            <label className='text-field__label' htmlFor={props.id}>{props.label}</label>

            <Input
                name={props.name}
                type={props.type}
                id={props.id}
            />
        </div>
    )
}

export {TextField}
