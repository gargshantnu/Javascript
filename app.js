    function BaseStructure(species, weight, height, facts){
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.facts = facts;
        this.image = "images/" + species.toLowerCase() + ".png";
    }

    // Create Dino Constructor
    function Dino(species, weight, height, facts) {
        BaseStructure.call(this, species, weight, height, facts);
    }
    Dino.prototype = Object.create(BaseStructure.prototype);
    Dino.prototype.constructor = Dino;


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
