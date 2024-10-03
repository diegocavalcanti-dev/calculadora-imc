import React from "react";

const TabelaIMC = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do peso</td>
                    <td>Abaixo de 18.5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>18.5 - 24.9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>25 - 29.9</td>
                </tr>
                <tr>
                    <td>Obesidade</td>
                    <td>30 ou mais</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TabelaIMC;
