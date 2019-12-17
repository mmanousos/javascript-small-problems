// Space Design
// We're putting together some information about our new company Space Design.
// Not all roles have been filled yet. But although we have a CEO and Scrum
// Master, displaying them shows undefined. Why is that?

// Roles (salary still to be determined)

var ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

var developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

var scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

var team = {};

team[ceo] = 'Kim';             // as written, these are all passing the corresponding variables into the object
team[scrumMaster] = 'Alice';   // instead of assigning a key of the corresponding word
team[developer] = undefined;   // to fix, pass in the string version: 'ceo', 'scrumMaster', 'developer' or use dot notation (preferred by AirBnb styleguide)

var company = {
  name: 'Space Design',
  team: team,
  projectedRevenue: 500000,
};

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team[ceo]);                         // similarly here we want to either use quotes around the key name
console.log('Scrum master: ' + company.team[scrumMaster]);        // or dot notation to access the desired value
console.log('Projected revenue: $' + company.projectedRevenue);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
