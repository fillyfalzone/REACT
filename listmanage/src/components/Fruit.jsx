export default function Fruit ({fruitInfo, onClick}) {
    // state

    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;

    // comportements

    // affichage (render)
    return (
        <li className='py-2 w-25 d-flex justify-content-between align-items-center'>  
            {fruitInfo.name} 
            <button className='btn btn-danger' onClick={onClick} >X</button> 
        </li>
    )
}