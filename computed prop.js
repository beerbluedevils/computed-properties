//Computed properties
const sub1 = "Math";
const sub2 = "Programming";
const teacher = "Molly";
const teacher2 = "Johnson";

const subjectStudy = {
  [sub1] : teacher2,
  [sub2] : teacher
};

const addProp = (obj ,key ,value) => ({...obj, [key] : value });
const result = addProp(subjectStudy, "History", "Vlad");

console.log(result); //{ Math: 'Johnson', Programming: 'Molly', History: 'Vlad' }