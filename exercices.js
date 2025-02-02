const nom_sorcier = "Archibald 🧙‍♂️";
const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};
const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];




// ---- Salutation Aventurier

function salutation(nom){
    console.log(`Salutations Aventurier ! Je me nomme ${nom} pour vous servir.`);
    
}

salutation(nom_sorcier);




// Quel est le tarif d'une potion ?

// function tarifPotion (idPotion, prixPotion, quantite = 1) {
//     console.log(`Le prix de ta commande pour la potion ${idPotion} est :` + prixPotion * quantite);
// }
// tarifPotion("potion de soin", 10, 3);


function tarifPotion (idPotion, prixPotion, quantite =1) {
      prixPotion = inventaire[0].prix;
      console.log(`Le prix de ta commande pour la potion ${idPotion} est :` + prixPotion * quantite);
}

tarifPotion("potion de soin", 10 , 3);




// --- Fabrication de potion

function newPotion (idPotion, prixNewPotion = 10, stockNewPotion = 1){
    inventairenewPotion ={
            id: idPotion,
            prix: prixNewPotion,
            stock: stockNewPotion,
        };

    console.log(`Vous venez d'ajouter une nouvelle potion : Nom :  `+  idPotion + `, Prix : `+ prixNewPotion +`, Stock : `+ stockNewPotion );

    return inventairenewPotion;
};

const potionEndurance = newPotion("Potion Endurance", 20, 8); 

inventaire.push(potionEndurance);

console.log(inventaire);



// --- Ajout de nouvelles potions dans l'inventaire

// function ajoutPotionInventaire (inventaire, Potion) {
    

// };