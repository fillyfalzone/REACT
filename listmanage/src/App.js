import { useState } from 'react';
import Fruit from './components/Fruit';
import FruitForm from './components/FruitForm';

function App() {
    
    /**
        *State 
    */  
    const [fruits, setFruits] = useState([
        { id: 1, name: 'Banana' },
        { id: 2, name: 'Apple' },
        { id: 3, name: 'Lemon' },
    ]);

    /**
        *Comportements  
    */  

    // Declaration de la fonction handleDelete
    const handleDelete = (id) => {
      // On ne modifie jamais diretment le state il faut faire une copie

      //1. copie du state
      const newFruits = fruits.slice();

      //2. manipulation de la copie
      const rmFruit = newFruits.filter((fruit) => fruit.id !== id); 

      //3. mise à jour du state
      setFruits(rmFruit);
    }

    // comportement alternative pour tester la réutilisabilité de actionClick (décommenter et remplacer handleDelete par showPreferFruit dans les liste ci-dessous pour tester )

    // const showPreferFruit = (fruitName) => {
    //     alert(`My prefer fruit is: ${fruitName}`)
    // }


    /**
        *Affichage (render)
    */  

    return (
        <div className='container'>
            <h1>Fruits Liste</h1>
            <ul>
                {fruits.map((fruit) => (
                    <Fruit fruitInfo={fruit} onClick={() => handleDelete(fruit.id)} key={fruit.id} />
                ))}
            </ul>
                <FruitForm fruits={fruits} setFruits={setFruits} />
        </div>
    );
}

export default App;

// GESTION DE FORMULAIRE
//1. creation d'un formulaire.
//2. soumission du formulaire.
//3. récupération des données.