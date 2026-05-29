import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nome: '',
        disciplina: '',
        notasTestes: '',
        testes: '',
        notasTrabalhos: '',
        trabalhos: '',
        notaAtitude: '',
        atitude: ''
    });

    function controlNotasTestes(e) {
        const value = e.target.value;
        if (value < 0) {
            setFormData({ ...formData, notasTestes: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, notasTestes: 20 });
        } else {
            setFormData({ ...formData, notasTestes: value });
        }
    }
    function controlTestes(e) {
        const value = e.target.value;
        if (value < 0) {
            setFormData({ ...formData, testes: 0 });
        } else if (value > 100) {
            setFormData({ ...formData, testes: 100 });
        } else {
            setFormData({ ...formData, testes: value });
        }
    }
    function controlNotasTrabalhos(e) {
        const value = e.target.value;
        if (value < 0) {
            setFormData({ ...formData, notasTrabalhos: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, notasTrabalhos: 20 });
        } else {
            setFormData({ ...formData, notasTrabalhos: value });
        }
    }
    function controlTrabalhos(e) {
        const value = e.target.value;
        if (value < 0) {
            setFormData({ ...formData, trabalhos: 0 });
        } else if (value > 100) {
            setFormData({ ...formData, trabalhos: 100 });
        } else {
            setFormData({ ...formData, trabalhos: value });
        }
    }
    function controlNotaAtitude(e) {
        const value = e.target.value;
        if (value < 0) {
            setFormData({ ...formData, notaAtitude: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, notaAtitude: 20 });
        } else {
            setFormData({ ...formData, notaAtitude: value });
        }
    }

    function controlAtitude(e) {
        const value = e.target.value;
        if (value < 0) {
            setFormData({ ...formData, atitude: 0 });
        } else if (value > 100) {
            setFormData({ ...formData, atitude: 100 });
        } else {
            setFormData({ ...formData, atitude: value });
        }
    }

    function mediaTresNotas(e) {
        e.preventDefault();
        const media = (parseFloat(formData.notasTestes) + parseFloat(formData.notasTrabalhos) + parseFloat(formData.notaAtitude)) / 3;
        alert(`A média das três notas é: ${media.toFixed(2)}`);
        if (media >= 9.5) {
            alert('Aprovado!');
        } else {
            alert('Reprovado!');
        }
    }

    function limparFormulario() {
        setFormData({
            nome: '',
            disciplina: '',
            notasTestes: '',
            testes: '',
            notasTrabalhos: '',
            trabalhos: '',
            notaAtitude: '',
            atitude: ''
        });
    }


    return (
        <div className="mt-4 row">

            <div className="w-100">
                <h1>Cálculo da nota final</h1>
                <h2>Dados do Aluno</h2>
            </div>

            <form className="col-12 row">
                <div className="col-8">
                    <div className="form-group">
                        <label>Nome do Aluno</label>
                        <input type="text" className="form-control" value={formData.nome} onChange={(e) =>
                            setFormData({ ...formData, nome: e.target.value })} required />
                    </div>
                </div>

                <div className="col-4">
                    <div className="form-group">
                        <label>Disciplina</label>
                        <input type="text" className="form-control" value={formData.disciplina} onChange={(e) =>
                            setFormData({ ...formData, disciplina: e.target.value })} required />

                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>Notas dos Testes</label>
                        <input type="number" className="form-control" value={formData.notasTestes} onChange={controlNotasTestes} required />
                    </div>

                    <div className="form-group">
                        <label>Notas dos Trabalhos</label>
                        <input type="number" className="form-control" value={formData.notasTrabalhos} onChange={controlNotasTrabalhos} required />
                    </div>

                    <div className="form-group">
                        <label>Nota de Atitude</label>
                        <input type="number" className="form-control" value={formData.notaAtitude} onChange={controlNotaAtitude} required />
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-group">
                        <label>Testes (%)</label>
                        <input type="number" className="form-control" value={formData.testes} onChange={controlTestes} required />
                    </div>
                    <div className="form-group">
                        <label>Trabalhos (%)</label>
                        <input type="number" className="form-control" value={formData.trabalhos} onChange={controlTrabalhos} required />
                    </div>

                    <div className="form-group">
                        <label>Atitude (%)</label>
                        <input type="number" className="form-control" value={formData.atitude} onChange={controlAtitude} required />
                    </div>
                </div>
                <button className="btn btn-primary mt-3" onClick={mediaTresNotas}>Calcular Média</button>
                <button className="btn btn-secondary mt-3 ml-2" onClick={limparFormulario}>Limpar</button>

            </form>
        </div>
    )
}

export default Notas; 