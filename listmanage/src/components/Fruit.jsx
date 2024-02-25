export default function Fruit ({fruitInfo, onClick}) {

    /**
        *state
    */  

    /**
        *Comportements  
    */  

        /**
        *affichage (render)
    */  
    return (
        <li className='py-2 w-25 d-flex justify-content-between align-items-center'>  
            {fruitInfo.name} 
            <button className='btn btn-danger' onClick={onClick} >X</button> 
        </li>
    )
}