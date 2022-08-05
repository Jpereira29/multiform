import { ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../context/FormContext";
import { Container } from "./styles";

export function FormStep3() {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])
    function handleNextStep() {
        if (state.email === '' || state.github === ' ') {
            alert('Por favor, preencha todos os campos.')
        } else {
            console.log(state)
            navigate('/step4')
        }
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os seus contatos para conseguirmos falar com você.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu Github?
                    <input 
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link className="backButton" to='/step2'>Voltar</Link>

                <button onClick={handleNextStep}>Finalizar cadastro</button>

            </Container>
        </Theme>
    )
}