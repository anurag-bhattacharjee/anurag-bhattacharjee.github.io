/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Santander Customer Satisfaction",
    cardImage: "assets/images/project-page/images.png",
    description: "To predict if a customer is satisfied/dissatisfied with their banking experience.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/anurag-bhattacharjee/santander-customer-satisfaction",
  },
  {
    title: "Restaurant Revenue Prediction",
    cardImage: "assets/images/project-page/restaurant.jpeg",
    description: "Predicted the annual restaurant sales of regional locations using commercial data",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "",
    Githublink: "https://github.com/anurag-bhattacharjee/restaurant-revenue-prediction",
  },
  {
    title: "Credit Card Dataset",
    cardImage: "assets/images/project-page/timesheet.jpg",
    description: "Choosing the best clustering algorithm for this dataset and train it on this dataset",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/anurag-bhattacharjee/Credit-Card-Dataset",
  },
  {
    title: "Text Mining using NLTK",
    cardImage: "assets/images/project-page/text.jpeg",
    description: "Text Mining Using Python's Natural Language Tool Kit (NLTK), and Performing two types of feature selection (wrapper and filter type) and comparing their selections",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/anurag-bhattacharjee/Text-Mining-using-NLTK",
  },
  {
    title: "CNN for Image Classification using ResNet50",
    cardImage: "assets/images/project-page/Picture1.jpg",
    description: "Implementing Keras using ResNet50 as the trained model",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/anurag-bhattacharjee/CNN-for-Image-Classification-using-ResNet50",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Githublink }) => {
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="${Githublink}">${title}</a></h1>
            </div>
        <ul class="menu-content"><br>
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>`)
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}


