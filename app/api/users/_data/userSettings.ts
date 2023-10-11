const schools = [
  {
    aeriesID: 28,
    name_full: "Anaheim Elementary Online Academy",
    name: "AEOA",
  },
  { aeriesID: 5, name_full: "Clara Barton Elementary School", name: "Barton" },
  { aeriesID: 6, name_full: "Thomas Edison Elementary School", name: "Edison" },
  {
    aeriesID: 7,
    name_full: "Benjamin Franklin Elementary School",
    name: "Franklin",
  },
  {
    aeriesID: 8,
    name_full: "Melbourne Gauer Elementary School",
    name: "Gauer",
  },
  { aeriesID: 9, name_full: "James Guinn Elementary School", name: "Guinn" },
  { aeriesID: 10, name_full: "Patrick Henry Elementary School", name: "Henry" },
  {
    aeriesID: 11,
    name_full: "Thomas Jefferson Elementary School",
    name: "Jefferson",
  },
  {
    aeriesID: 12,
    name_full: "Benito Juarez Elementary School",
    name: "Juarez",
  },
  {
    aeriesID: 14,
    name_full: "Abraham Lincoln Elementary School",
    name: "Lincoln",
  },
  { aeriesID: 15, name_full: "Loara Elementary School", name: "Loara" },
  {
    aeriesID: 16,
    name_full: "James Madison Elementary School",
    name: "Madison",
  },
  { aeriesID: 17, name_full: "Horace Mann Elementary School", name: "Mann" },
  {
    aeriesID: 18,
    name_full: "John Marshall Elementary School",
    name: "Marshall",
  },
  {
    aeriesID: 26,
    name_full: "Olive Street Elementary School",
    name: "Olive Street",
  },
  {
    aeriesID: 27,
    name_full: "Orange Grove Elementary School",
    name: "Orange Grove",
  },
  { aeriesID: 29, name_full: "Ponderosa Elementary School", name: "Ponderosa" },
  {
    aeriesID: 20,
    name_full: "Adelaide Price Elementary School",
    name: "Price",
  },
  { aeriesID: 21, name_full: "Paul Revere Elementary School", name: "Revere" },
  {
    aeriesID: 22,
    name_full: "Theodore Roosevelt Elementary School",
    name: "Roosevelt",
  },
  { aeriesID: 23, name_full: "Betsy Ross Elementary School", name: "Ross" },
  {
    aeriesID: 24,
    name_full: "Alexander J. Stoddard Elementary School",
    name: "Stoddard",
  },
  { aeriesID: 25, name_full: "Sunkist Elementary School", name: "Sunkist" },
  { aeriesID: 27, name_full: "Westmont Elementary School", name: "Westmont" },
];

export default {
  mySchools: schools,
  theme: "dark",
  columns: [
    { title: "Address", value: true },
    { title: "City", value: true },
    { title: "State", value: true },
    { title: "Zip", value: true },
    { title: "Cash Aid", value: true },
    { title: "Family Size", value: true },
    { title: "Income", value: true },
    { title: "School Preference", value: true },
    { title: "DLI", value: true },
    { title: "Student", value: true },
    { title: "Birthdate", value: true },
    { title: "IEP", value: true },
    { title: "Returning Student", value: true },
  ],
};
