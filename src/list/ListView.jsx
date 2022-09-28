//aqui haremos la muestra de datos
function ListView({ elements ,funcFilterItems}) { //estamos desestructurando {}
    return (
        <div>
            <input type="text" onChange={ev=> funcFilterItems(ev.target.value)}/>
            <ul>
                {
                    elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
                }
            </ul>
        </div>
    );
}

export default ListView;