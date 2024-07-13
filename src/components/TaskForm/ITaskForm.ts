import {ComponentProps, FormEventHandler} from 'react'

export interface ITaskForm extends ComponentProps<'form'> {
    onHandleSubmit: FormEventHandler<HTMLFormElement>
    onHandleChange: FormEventHandler<HTMLFormElement>
}