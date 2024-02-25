//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Audit and Assurance Analytics Spcialist Senior Assistant",
    cardImage: "assets/images/experience-page/deloitte.webp",
    place: "Deloitte",
    time: "(Aug, 2021 - Present)",
    desp: "<li>• Built and executed data pipelines and industry-focused dashboards to support audit objectives, using PySpark, SQL Server, and Tableau reducing processing time and cost by 20%</li><li>Implemented logic enhancements in PySpark improving script execution performance and collaborated with specific teams to streamline strategies for production-related issues, maximizing client engagement by 30%</li><li>Analyzed complex financial datasets to discover and analyze patterns, identify anomalies, access risk factors, and provide recommendations for clients to support strategic decision-making</li><li>Facilitated cross-functional communication with audit team members and developers on best practices for testing and documentation through troubleshooting sessions and PR reviews.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/cgi.jpg",
    place: "CGI",
    time: "(Dec, 2017 - Jan, 2021)",
    desp: "<li> Coordinated with business stakeholders and DevOps teams to build and optimize stored procedures in SQL Server and identify performance bottlenecks and areas of improvement based on business requirements</li><li>Improved data warehousing performance by approximately 50%, contributing to overall operational efficiency and faster query response times</li><li>Designed and enhanced multiple maintenance utilities in Python and SQL Server boosting operational troubleshooting and resolving production issues resulting in increased system reliability and minimized downtimes by 20%</li><li>Developed and maintained databases, data models, and dashboards for tracking and reporting weekly key performance indicators (KPIs) for global tire manufacturing client.</li>",
  },
  {
    title: "Associate Software Engineer",
    cardImage: "assets/images/experience-page/stackroute.jpg",
    place: "Stackroute",
    time: "(Aug, 2017 - Dec, 2017)",
    desp: "<li>Worked with MEAN Stack Team to create a Co Browsing Website that empowers customer support agents to collaborate with the customer’s browser in real time.</li><li>Operated under Agile and Scrum frameworks to complete releases every week and well-organized sprints</li>",
  },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "UNICEF 2018-21",
    cardImage: "assets/images/experience-page/unicef.jpg",
    description:
      "Responsible for working closely with partners & communities to combat common infectious childhood diseases and end preventable newborn and child deaths.",
  },
  {
    title: "Smile Foundation 2019",
    cardImage: "assets/images/experience-page/smile.png",
    description:
      "Responsible for working towards girl education and bring many other out-of-school girls to schools.",
  },
  {
    title: "Sightsavers 2019",
    cardImage: "assets/images/experience-page/sightsavers.jpg",
    description:
      "working with hospitals to eliminate avoidable blindness and promote the rights of people with disabilities.",
  },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
  // {
  //   title: "30 DaysofFlutter",
  //   cardImage: "assets/images/experience-page/5.jpg",
  //   description:
  //     "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  // },
  // {
  //   title: "Garuda Hacks",
  //   cardImage: "assets/images/experience-page/6.jpg",
  //   description:
  //     "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


// const mentorshipcards = document.querySelector(".mentorship-cards");
// const mentor = [
//   {
//     title: "HakinCode",
//     image: "assets/images/experience-page/hakin.png",
//     time: "06/2020 - 08/2020",
//     desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
//   },
//   {
//     title: "Google Summer of Code",
//     image: "assets/images/experience-page/gsoc.png",
//     time: "03/2020 - 08/2020",
//     desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
//   },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, time, desp}) =>
//       (output += `        
//       <div class="column mentorshipCard"> 
//       <div class="card card2 mentorshipCardCover">
//         <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
//         <div class="information">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class=""sub-title">${time}</p>
//         </div>
//         <div class="more-information">
//         <ul class="list-group list-group-flush p-0 right-aligned">
//           <div class="list-group-item card2 disclaimer">${desp}</div>
//         </ul>
//         </div>
//         </div>
//       </div>
//       </div>
//       `)
//   );
//   mentorshipcards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
