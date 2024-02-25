import { useState } from "react";

export default function FruitForm ({fruits, setFruits}) {
    /**
        *State 
    */  
    const [fruitName, setFruitName] = useState(""); 

    /**
        *Comportements  
    */  

    // Declaration de la fonction handleSubmit
    const handleSubmit = (event) => {
        // Empêcher le rechargement de la page
        event.preventDefault();
    
        // Vérifier si le champ du formulaire n'est pas vide
        if (fruitName) {
            // Créer un nouvel objet fruit avec un ID unique et le nom du fruit
            const newFruit = {
                id: fruits.length + 1, // Utiliser la longueur actuelle du tableau + 1 comme ID unique
                name: fruitName // Utiliser le nom du fruit récupéré du champ de formulaire
            };

            // Mettre à jour le state des fruits en ajoutant le nouvel objet fruit à la fin du tableau existant
            const newFruits = [...fruits];
            setFruits([...newFruits, newFruit]);
        
            // Vider le champ du formulaire après avoir ajouté le fruit
            setFruitName("");
           
        } else {
            // Afficher une alerte si le champ du formulaire est vide
            alert("Veuillez entrer un fruit");
        }
    };
    
    // Declaration de la fonction handleSChange
    const handleChange = (event) => {
        setFruitName(event.target.value.trim());
    }

    /**
        *Affichage (render)
    */  

    return (
        <form onSubmit={handleSubmit} >
            <input 
                type="text" 
                value={fruitName}
                onChange={handleChange} 
                className='align-middle' 
                placeholder="Add a fruit"
            />
            <button className='btn btn-primary m-2 align-middle'>Add</button>
        </form>
       
    );
}