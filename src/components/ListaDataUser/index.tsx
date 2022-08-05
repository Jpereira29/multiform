import { Container } from "./styles"

type Props = {
    state: {
        name: string,
        level: number,
        email: string,
        github: string
    }
}

export function ListaDataUser({ state }: Props) {
    let level = 'Sou iniciante'
    if (state.level === 1) {
        level = 'Sou Programador'
    }
    return (
        <Container>
            <table>
                <tr>
                    <th>Nome:</th>
                    <td>{state.name}</td>
                </tr>
                <tr>
                    <th>Nível:</th>
                    <td>{level}</td>
                </tr>
                <tr>
                    <th>E-mail:</th>
                    <td>{state.email}</td>
                </tr>
                <tr>
                    <th>Github:</th>
                    <td>{state.github}</td>
                </tr>
            </table>
        </Container>

    )
}