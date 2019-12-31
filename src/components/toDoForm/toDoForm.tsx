import React, {useRef} from 'react'

interface ToDoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd (ref.current!.value)
            ref.current!.value = ''
        }
    }
    return (
        <div className='input-field'>
            <input onKeyPress={keyPressHandler} ref={ref} type="text" id='title'/>
            <label htmlFor="title" className='active' placeholder='Введите название дела'>Введите название дела</label>
        </div>
    )
}