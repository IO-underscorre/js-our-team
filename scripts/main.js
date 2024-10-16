// Inputs
const teamMembersNames = ['Wayne Barnett' , 'Angela Caroll' , 'Walter Gordon' , 'Angela Lopez' , 'Scott Estrada' , 'Barbara Ramos'];
const teamMembersRoles = ['Founder &amp CEO' , 'Chief Editor' , 'Office Manager' , 'Social Media Manager' , 'Developer' , 'Graphic Designer'];
const teamMembersImages = ['wayne-barnett-founder-ceo.jpg' , 'angela-caroll-chief-editor.jpg' , 'walter-gordon-office-manager.jpg' , 'angela-lopez-social-media-manager.jpg' , 'scott-estrada-developer.jpg' , 'barbara-ramos-graphic-designer.jpg'];

// Class
class teamMember {
    constructor(name , role , image) {
        this.name = name;
        this.role = role;
        this.image = image;
    }

    // Method to return cards
    get cardCreator() {
        const self = this;
        
        const cardTextContainer = document.createElement('div');
        cardTextContainer.innerHTML = `<span>${self.name}</span> <b>${self.role}</b>`;

        const cardImageContainer = document.createElement('div');
        cardImageContainer.innerHTML = `<img src="images/${self.image}" alt="${self.name}">`;
        
        const card = document.createElement('li');
        card.append(cardImageContainer);
        card.append(cardTextContainer);
        return card;
    }
}

const cardsContainer = document.querySelector('.cards-container');

for (let i = 0 ; i < teamMembersNames.length ; i++) {
    const employ = new teamMember (teamMembersNames[i] , teamMembersRoles[i] , teamMembersImages[i]);
    
    cardsContainer.append(employ.cardCreator);
}