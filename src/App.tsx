import {useContagem} from './reducers/contagem';


const App = () => {
  const [contagem, contagemdispatch] = useContagem();
 

  return (
   <div className="p-5">
    Contagem: {contagem.count}
    <hr/>
    <button className="p-3" onClick={()=>contagemdispatch({type:'ADD'})}>Adicionar</button>
    <button className="p-3" onClick={()=>contagemdispatch({type:'DEL'})}>Remover</button>
    <button className="p-3" onClick={()=>contagemdispatch({type:'RESET'})}>Resetar</button>
   </div>
  );
}

export default App;