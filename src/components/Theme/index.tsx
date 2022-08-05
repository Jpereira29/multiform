import { ReactNode } from 'react'
import { useForm } from '../../context/FormContext'
import { Header } from '../Header'
import { SideBarItem } from '../SideBarItem'
import * as C from './styles'

type Props = {
    children: ReactNode
}

export function Theme({ children }: Props) {

    const { state } = useForm()

    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.SideBar>
                        <SideBarItem
                            title='Pessoal'
                            description='Se identifique'
                            icon='profile'
                            path='/'
                            active={state.currentStep === 1}
                        />

                        <SideBarItem
                            title='Proficional'
                            description='Seu nível'
                            icon='book'
                            path='/step2'
                            active={state.currentStep === 2}
                        />

                        <SideBarItem
                            title='Contatos'
                            description='Como te achar'
                            icon='mail'
                            path='/step3'
                            active={state.currentStep === 3}
                        />

                         <SideBarItem
                            title='Contatos'
                            description='Como te achar'
                            icon='database'
                            path='/step4'
                            active={state.currentStep === 4}
                        />
                    </C.SideBar>

                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}