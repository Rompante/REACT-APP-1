function Alerta(tipo) {
  return (
    <div className="alert alert-success" role="alert">
        {tipo.alerta}
    </div>
  );
}

export default Alerta