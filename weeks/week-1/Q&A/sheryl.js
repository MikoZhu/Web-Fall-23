//Determine the food choice subtype
let finalChoice;

switch (selectedMenu) {
  case "Pizza":
    switch (pizzaChoice) {
      case "1":
        finalChoice = "Margarita";
        break;
      case "2":
        finalChoice = "Vesuzio";
        break;
      case "3":
        finalChoice = "4-cheese";
        break;
      default:
        alert(`Invalid pizza choice`);
    }
    break;
  case "Pasta":
    switch (pastaChoice) {
      case "1":
        finalChoice = "Pasta Bolognese";
        break;
      case "2":
        finalChoice = "Freshly-made tortellini";
        break;
      case "3":
        finalChoice = "Pasta Carbonara";
        break;
      default:
        alert(`Invalid pasta choice`);
    }
    break;
  case "Salad":
    switch (saladChoice) {
      case "1":
        finalChoice = "Nicoise salad";
        break;
      case "2":
        finalChoice = "Caesar salad";
        break;
      case "3":
        finalChoice = "Goatcheese salad";
        break;
      default:
        alert(`Invalid salad choice`);
    }
    break;
  default:
    alert(`Invalid menu choice.  Please start over.`);
    process.exit(1);
}
