/* DONE */
var objectiveStatement =  "Diligent Computer Science student with business and mathematical background, leadership, organizational skills, and " +
                          "a wide array of trait experience. I am seeking to apply my abilities and education to learn and adapt to an industry" +
                          " environment to further pursue my Computer Science career, and to develop and/or maintain new skills for efficiency " +
                          "and optimization. I believe I have great potential and can fulfill any request given to me along with using strong " +
                          "troubleshooting abilities to debug and optimize code.";
function objectives() {
  document.getElementById("information").innerHTML = "";
  informationHeading = document.createElement("h2");
  informationHeading.appendChild(document.createTextNode("Objectives"));

  document.getElementById("information").appendChild(informationHeading);
  document.getElementById("information").appendChild(document.createTextNode(objectiveStatement));

}

var ouAthleticsActivities  = [ "Dean's Honor Roll", "Cheerleading", "Sooner Off-Road Racing", "Hacklahoma"];
var ouStrongEmphasis  = [ "Object Oriented Design", "Algorithms and Structures", "Analysis and Complexity of Algorithms",
                      "Computer Organization and Operating Systems", "Backend Software Development", "Computational Ethics"];
var nocAthleticsActivities = [ "Dean's Honor Roll", "Computer and Math Class Tutor", "Resident Advisor",
                      "Rho Delta Rho President", "Cheerleading"];
var nocStrongEmphasis = [ "Business Macro/Micro Economics", "Office (Word, Excel, Power Point, Access)",
                      "Financial and Managerial Accounting", "Business Ethics"];
function education() {
  document.getElementById("information").innerHTML = "";

  var ul3 = document.createElement("ul");
  for (i = 0; i < ouStrongEmphasis.length; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(ouStrongEmphasis[i]));
    ul3.appendChild(li);
  }

  var ul2 = document.createElement("ul");
  for (i = 0; i < ouAthleticsActivities.length; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(ouAthleticsActivities[i]));
    ul2.appendChild(li);
  }

  var ul1 = document.createElement("ul");
  li = document.createElement("li");
  li.appendChild(document.createTextNode("B.Sc. Computer Science of Engineering College/ Mathematics Minor"));
  ul1.appendChild(li);
  li = document.createElement("li");
  li.appendChild(document.createTextNode("Athletics & Activities"));
  ul1.appendChild(li);
  ul1.appendChild(ul2);
  li = document.createElement("li");
  li.appendChild(document.createTextNode("Strong Emphasis on"));
  ul1.appendChild(li);
  ul1.appendChild(ul3);

  var edList = document.createElement("ul");
  li = document.createElement("li");
  bold = document.createElement('strong'),
  textnode = document.createTextNode("University of Oklahoma Present Norman, OK");
  bold.appendChild(textnode);
  li.appendChild(bold);
  edList.appendChild(li);
  edList.appendChild(ul1);
  li = document.createElement("li");
  bold = document.createElement('strong'),
  textnode = document.createTextNode("Northern Oklahoma College May 2016 Tonkawa, OK");
  bold.appendChild(textnode);
  li.appendChild(bold);
  edList.appendChild(li);

  ul3 = document.createElement("ul");
  for (i = 0; i < nocStrongEmphasis.length; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(nocStrongEmphasis[i]));
    ul3.appendChild(li);
  }

  ul2 = document.createElement("ul");
  for (i = 0; i < nocAthleticsActivities.length; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode(nocAthleticsActivities[i]));
    ul2.appendChild(li);
  }

  var ul1 = document.createElement("ul");
  li = document.createElement("li");
  li.appendChild(document.createTextNode("AB in Business College Computer Science / Management and information Systems"));
  ul1.appendChild(li);
  li = document.createElement("li");
  li.appendChild(document.createTextNode("Athletics & Activities"));
  ul1.appendChild(li);
  ul1.appendChild(ul2);
  li = document.createElement("li");
  li.appendChild(document.createTextNode("Strong Emphasis on"));
  ul1.appendChild(li);
  ul1.appendChild(ul3);
  edList.appendChild(ul1);

  var informationHeading = document.createElement("h2");
  informationHeading.appendChild(document.createTextNode("Education"));

  document.getElementById("information").appendChild(informationHeading);
  document.getElementById("information").appendChild(edList);

}

var researchList = [];
researchList[0] = ["On-Site-Rep / Field Technician", " Single Digits, Inc. July 2017 - Present", "Creating rapport through customer relations on multiple apartment complexes, interacting with engineers and other technicians to troubleshoot, configure, and maintain hardware through Linux, and establishing network knowledge through frequencies of wireless fidelity, fiber, ethernet connections, and surveillance."];
researchList[1] = ["Consultation and Development", " Commons on Oak Tree October 2017 - Present", "Aiding the apartment complex with on-site technical assistance and developing multiple programs such as Electric Overage Calculators and (Presently In Development) a complex multi-use resident matching, overage, and searching program using multiple languages to inherit the perks of the strengths of the languages."];
researchList[2] = ["Resident Advisor", " Northern Oklahoma College August 2014 - May 2016", "Creating a thriving and sociable living environment for incoming and returning residents in the dormitories within the rules of the college."];
researchList[3] = ["Machinist and Farm Hand", " Moonlight Machine and Peter Farms October 2010 - May 2014", "Enduring long work days and allowing myself satisfaction from optimizing repetitive tasks and being able to visualize and troubleshoot equipment. This has been the basis of my integrity as a hard worker."];
function research() {
  document.getElementById("information").innerHTML = "";

  var table = document.createElement("table");

  for (i = 0; i < researchList.length; i++) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    td.style = "width: 25%;";
    bold = document.createElement('strong');
    bold.appendChild(document.createTextNode(researchList[i][0]));
    td.appendChild(bold);
    td.appendChild(document.createTextNode(researchList[i][1]));
    tr.appendChild(td);
    td = document.createElement("td");
    td.appendChild(document.createTextNode(researchList[i][2]));
    tr.appendChild(td);
    table.appendChild(tr);
  }

  var informationHeading = document.createElement("h2");
  informationHeading.appendChild(document.createTextNode("Research and Experience"));

  document.getElementById("information").appendChild(informationHeading);
  document.getElementById("information").appendChild(table);
}

var skillslist = [];
skillslist[0] = ["General Skills", "Leadership", "Communication", "Time Management", "Adaptability", "Work Well under Pressure", "Expert Troubleshooting", "Microsoft Office"];
skillslist[1] = ["Software Development", "Well Versed with Backend Development", "General Experience with Frontend"];
skillslist[2] = ["Most Used IDE's and Text Editors", "Atom", "Azure", "Eclipse", "Notepad++", "R Studio", "Nano", "Vim", "Emacs", "Visual Studio"];
skillslist[3] = ["Languages(High -> Low)", "C", "C++", "Java", "SQL", "R", "Bash", "Python", "Ruby", "Barebones JavaScript", "Visual Basic", "C#"];
skillslist[4] = ["Collaboration Techniques", "Github", "Github Markdown", "Github Pages", "R Markdown", "LATEX", "Google Cloud Platform", "Google and One Drive", "Teletype"];
skillslist[5] = ["Mathematics", "Fundemental Calculus on Multiple Dimensions", "Differential Equations", "Linear Algebra", "Discrete Mathematics", "Computation Theory"];
skillslist[6] = ["Business", "Evaluating Supply and Demand", "Equilibrium", "Balance Sheets", "Income Statements", "Cash Flow"];

function skills() {
  document.getElementById("information").innerHTML = "";

  informationHeading = document.createElement("h2");
  informationHeading.appendChild(document.createTextNode("Skills"));

  list = document.createElement("ul");
  list.classList.add('list');

  for (i = 0; i < algorithmlist.length; i++) {
    ul = document.createElement("ul");
    li = document.createElement("li");
    bold = document.createElement('strong'),
    textnode = document.createTextNode(skillslist[i][0]);
    bold.appendChild(textnode);
    li.appendChild(bold);
    ul.appendChild(li);
    innerul = document.createElement("ul");
    for (j = 1; j < skillslist[i].length; j++){
      li = document.createElement("li");
      li.appendChild(document.createTextNode(skillslist[i][j]));
      innerul.appendChild(li);
    }
    ul.appendChild(innerul);
    list.appendChild(ul);
  }
  document.getElementById("information").appendChild(informationHeading);
  document.getElementById("information").appendChild(list);
}









var algorithmlist = [];
algorithmlist[0] = ["Data Structures", "Dynamic Arrays", "Hash Tables", "Indexed Sequential Structures", "Queues", "Stacks", "Linked List(Circular and Straight)", "Heaps", "Binary Trees", "B Trees", "Tree Traversal", "Directed Graphs", "Dijkstra", "A* Search"];
algorithmlist[1] = ["Sorting Algortihms", "Insertion", "Selection", "Merge", "Quick", "Bubble", "Radix", "Binary"];
algorithmlist[2] = ["Random Number Algorithms", "Random Number Tables", "Monte Carlo Method", "Las Vegas Method"];
algorithmlist[3] = ["Matrix Algorithms"];
algorithmlist[4] = ["Analysis", "Time Complexity of Algorithms", "Space Complexity of Algorithms", "Linear and Quadratic Models", "T Distributions"];

function algorithms() {
  document.getElementById("information").innerHTML = "";

  informationHeading = document.createElement("h2");
  informationHeading.appendChild(document.createTextNode("Algorithms"));

  list = document.createElement("ul");
  list.classList.add('list');
  for (i = 0; i < algorithmlist.length; i++) {
    ul = document.createElement("ul");
    li = document.createElement("li");
    bold = document.createElement('strong'),
    textnode = document.createTextNode(algorithmlist[i][0]);
    bold.appendChild(textnode);
    li.appendChild(bold);
    ul.appendChild(li);
    innerul = document.createElement("ul");
    for (j = 1; j < algorithmlist[i].length; j++){
      li = document.createElement("li");
      li.appendChild(document.createTextNode(algorithmlist[i][j]));
      innerul.appendChild(li);
    }
    ul.appendChild(innerul);
    list.appendChild(ul);
  }
  document.getElementById("information").appendChild(informationHeading);
  document.getElementById("information").appendChild(list);
}
