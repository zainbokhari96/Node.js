class Company {
  constructor(name, location, description) {
    this.name = name;
    this.location = location;
    this.description = description;
  }

  printCompanyData(company) {
    console.log(
      `${company.name} is a ${company.description} which is located at ${company.location}`
    );
  }
}

module.exports = Company;
