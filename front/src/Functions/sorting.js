export const sortAnimals = (animals, value) => {
  const copy = [...animals];

  switch (value) {
    case "Sort by name ascending":
      return copy.sort((a, b) => a.animal_name.localeCompare(b.animal_name));
    case "Sort by name descending":
      return copy.sort((a, b) => b.animal_name.localeCompare(a.animal_name));
    case "Sort by type ascending":
      return copy.sort((a, b) => a.animal.type.localeCompare(b.animal_type));
    case "Sort by type descending":
      return copy.sort((a, b) => b.animal_type.localeCompare(a.animal_type));
    case "Sort by weight ascending":
      return copy.sort((a, b) => a.animal_weight - b.animal_weight);
    case "Sort by weight descending":
      return copy.sort((a, b) => b.animal_weight - a.animal_weight);
    default:
      return animals;
  }
};
