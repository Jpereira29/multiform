import { ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListaDataUser } from "../../components/ListaDataUser";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../context/FormContext";
import { Container } from "./styles";

export function FormStep4() {

    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    function resetState() {
        navigate('/')

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0
        })
        dispatch({
            type: FormActions.setEmail,
            payload: ''
        })
        dispatch({
            type: FormActions.setGithub,
            payload: ''
        })
        dispatch({
            type: FormActions.setLevel,
            payload: 0
        })
        dispatch({
            type: FormActions.setName,
            payload: ''
        })
    }

    useEffect(() => {
        if (state.name === '' || state.email === '' || state.github === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    return (
        <Theme>
            <Container>
                <p>Final</p>
                <h1>Pronto {state.name}, salvamos os seus dados.</h1>
                <p>Assim que possível, entraremos em contato.</p>

                <hr />

                <ListaDataUser state={state} />
                <button onClick={resetState}>Okay</button>

            </Container>
        </Theme>
    )
}