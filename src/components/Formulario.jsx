import React, { useState } from "react";
import TabelaIMC from "./TabelaIMC";

function Formulario() {
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    const calcularIMC = (e) => {
        e.preventDefault();
        const alturaEmMetros = altura / 100; 
        const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros);
        setImc(resultadoIMC);

        // Classificação do IMC
        if (resultadoIMC < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (resultadoIMC < 24.9) {
            setClassificacao("Peso normal");
        } else if (resultadoIMC < 29.9) {
            setClassificacao("Sobrepeso");
        } else {
            setClassificacao("Obesidade");
        }
    };

    return (
        <div className="container">
            <h1>Calculadora de IMC</h1>
            <form onSubmit={calcularIMC}>
                <div>
                    <label htmlFor="peso">Peso (kg):</label>
                    <input
                        type="number"
                        id="peso"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="altura">Altura (cm):</label>
                    <input
                        type="number"
                        id="altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calcular IMC</button>
            </form>

            {/* Exibição do resultado */}
            {imc && (
                <div className="resultado">
                    <h2>Resultado do IMC</h2>
                    <p className="imc">Seu IMC: {imc.toFixed(2)}</p>
                    <p className="classificacao">{classificacao}</p>
                </div>
            )}

            {/* Tabela de classificação do IMC */}
            <TabelaIMC />
        </div>
    );
}

export default Formulario;
