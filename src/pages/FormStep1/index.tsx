import { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../context/FormContext";
import { Container } from "./styles";

export function FormStep1() {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    function handleNextStep() {
        if (state.name === '' || state.name === ' ') {
            alert('Por favor, preencha o campo com seu nome.')
        } else {
            navigate('/step2')
        }
    }

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }
    return (
        <Theme>
            <Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>

            </Container>
        </Theme>
    )
}