import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../context/FormContext";
import { Container } from "./styles";

export function FormStep2() {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    function handleNextStep() {
        navigate('/step3')
    }

    function setLevel(level: number) {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o quê melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, proficionalmente.</p>

                <hr />

                <SelectOption
                    title='Sou iniciante'
                    description='Comecei a programar há menos de dois anos'
                    icon='🥳'
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title='Sou programador'
                    description='Já programo há dois anos ou mais'
                    icon='🥸'
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className="backButton" to='/'>Voltar</Link>

                <button onClick={handleNextStep}>Próximo</button>

            </Container>
        </Theme>
    )
}