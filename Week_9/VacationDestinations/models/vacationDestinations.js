class VacationDestination {
  constructor(id, countryId, name, numVisitors, foundedYear, rating, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.numVisitors = numVisitors;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Number of Visitors: ${this.numVisitors}, Rating: ${this.rating}`;
  }
}

export default VacationDestination;
