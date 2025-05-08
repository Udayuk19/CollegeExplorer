const colleges = [
    {
      name: "IIT Hyderabad",
      location: "Hyderabad",
      rating: 4.7,
      cutoff: "EAMCET: 500",
      fee: "₹2,20,000/year",
      courses: ["CSE", "ECE", "ME", "AI/DS"],
      desc: "A premier IIT offering cutting-edge engineering programs and research. Known for innovation and high placements.",
      moreInfoLink: "https://iith.ac.in/"
    },
    {
      name: "NIT Trichy",
      location: "Chennai",
      rating: 4.6,
      cutoff: "EAMCET: 800",
      fee: "₹1,80,000/year",
      courses: ["CSE", "EEE", "CIVIL", "ECE"],
      desc: "Consistently ranked among the top NITs with excellent faculty and infrastructure.",
      moreInfoLink: "https://www.nitt.edu/"
    },
    {
      name: "BITS Pilani Hyderabad",
      location: "Hyderabad",
      rating: 4.5,
      cutoff: "BITSAT: 350",
      fee: "₹3,00,000/year",
      courses: ["CSE", "BioTech", "AI", "Mechanical"],
      desc: "Renowned for its flexible curriculum and student-driven culture with top-notch academics.",
      moreInfoLink: "https://www.bits-pilani.ac.in/hyderabad/"
    },
    {
      name: "VIT Vellore",
      location: "Chennai",
      rating: 4.4,
      cutoff: "VITEEE: 10,000",
      fee: "₹2,00,000/year",
      courses: ["CSE", "IT", "Mechatronics", "EEE"],
      desc: "A reputed private university with great placement records and modern campus.",
      moreInfoLink: "https://vit.ac.in/"
    },
    {
      name: "Amrita Coimbatore",
      location: "Coimbatore",
      rating: 4.2,
      cutoff: "EAMCET: 9000",
      fee: "₹1,60,000/year",
      courses: ["CSE", "Cybersecurity", "EEE", "ECE"],
      desc: "Recognized for its value-based education and emphasis on research.",
      moreInfoLink: "https://www.amrita.edu/campus/coimbatore/"
    },
    {
      name: "CUSAT",
      location: "Kochi",
      rating: 4.0,
      cutoff: "CAT: 4000",
      fee: "₹80,000/year",
      courses: ["IT", "CSE", "Marine Engg", "EEE"],
      desc: "A government university known for affordability and strong academic programs.",
      moreInfoLink: "https://www.cusat.ac.in/"
    },
    {
      name: "SRM University",
      location: "Chennai",
      rating: 4.1,
      cutoff: "SRMJEEE: 15,000",
      fee: "₹2,50,000/year",
      courses: ["CSE", "Aerospace", "IT", "EEE"],
      desc: "Popular private university with world-class facilities and foreign collaborations.",
      moreInfoLink: "https://www.srmist.edu.in/"
    },
    {
      name: "SASTRA University",
      location: "Thanjavur",
      rating: 4.0,
      cutoff: "JEE Main: 95 percentile",
      fee: "₹1,20,000/year",
      courses: ["CSE", "ECE", "EEE", "Civil"],
      desc: "Combines technical rigor with cultural values, popular among students for discipline and academics.",
      moreInfoLink: "https://www.sastra.edu/"
    },
    {
      name: "PES University",
      location: "Bengaluru",
      rating: 4.3,
      cutoff: "PESSAT: 800",
      fee: "₹2,80,000/year",
      courses: ["CSE", "AI", "EEE", "ECE"],
      desc: "Bangalore-based university known for strong coding culture and high-tech labs.",
      moreInfoLink: "https://pes.edu/"
    },
    {
      name: "Manipal Institute of Technology",
      location: "Manipal",
      rating: 4.4,
      cutoff: "MET: 2500",
      fee: "₹3,30,000/year",
      courses: ["CSE", "IT", "ECE", "Mechatronics"],
      desc: "A globally recognized private institute offering vast international opportunities.",
      moreInfoLink: "https://www.nitt.edu/"
    },
    {
      name: "IIIT Hyderabad",
      location: "Hyderabad",
      rating: 4.8,
      cutoff: "JEE Advanced: 1000",
      fee: "₹3,00,000/year",
      courses: ["CSE", "ECE", "AI", "Computational Linguistics"],
      desc: "Top-rated for computer science, known for research-oriented curriculum and elite placements.",
      moreInfoLink: "https://www.iiit.ac.in/"
    },
    {
        name: "JNTU Hyderabad",
        location: "Hyderabad",
        rating: 4.0,
        cutoff: "EAMCET: 3000",
        fee: "₹65,000/year",
        courses: ["CSE", "ECE", "Mechanical", "IT"],
        desc: "One of the top government universities in Telangana, known for affordable education and solid placement records.",
        moreInfoLink: "https://jntuh.ac.in/"
      },
      {
        name: "VNR VJIET",
        location: "Hyderabad",
        rating: 4.1,
        cutoff: "EAMCET: 5000",
        fee: "₹1,35,000/year",
        courses: ["CSE", "ECE", "IT", "AI&DS"],
        desc: "Autonomous institute with NAAC 'A++' grade, recognized for academic excellence and industry-aligned curriculum.",
        moreInfoLink: "https://vnrvjiet.ac.in/"
      },
      {
        name: "CBIT",
        location: "Hyderabad",
        rating: 4.2,
        cutoff: "EAMCET: 4500",
        fee: "₹1,40,000/year",
        courses: ["CSE", "IT", "ECE", "EEE"],
        desc: "One of the oldest and most reputed private engineering colleges in Telangana with strong alumni network.",
        moreInfoLink: "https://www.cbit.ac.in/"
      },
      {
        name: "KL University",
        location: "Vijayawada",
        rating: 4.1,
        cutoff: "KLEEE: 20,000",
        fee: "₹2,00,000/year",
        courses: ["CSE", "AI", "Mech", "ECE"],
        desc: "A deemed university offering flexible learning and innovative teaching methodologies with good placement support.",
        moreInfoLink: "https://www.kluniversity.in/"
      },
      {
        name: "SRKR Engineering College",
        location: "Bhimavaram",
        rating: 4.0,
        cutoff: "EAMCET: 7000",
        fee: "₹85,000/year",
        courses: ["CSE", "ECE", "IT", "Civil"],
        desc: "Affiliated to JNTU Kakinada, known for strong faculty and consistent academic results in Andhra Pradesh.",
        moreInfoLink: "https://www.srkrec.edu.in/"
      },
      {
        name: "Gayatri Vidya Parishad College of Engineering",
        location: "Visakhapatnam",
        rating: 4.1,
        cutoff: "EAMCET: 6000",
        fee: "₹90,000/year",
        courses: ["CSE", "IT", "EEE", "ECE"],
        desc: "Reputed autonomous college offering value-based education and industry-relevant training programs.",
        moreInfoLink: "https://www.gvpce.ac.in/"
      }     
  ];
  
  const searchInput = document.getElementById("searchInput");
  const locationFilter = document.getElementById("locationFilter");
  const ratingFilter = document.getElementById("ratingFilter");
  const clearFiltersBtn = document.getElementById("clearFiltersBtn");
  const container = document.getElementById("collegeContainer");
  
  function renderColleges(data, container) {
    container.innerHTML = "";
    if (data.length === 0) {
      container.innerHTML = "<p>No colleges found.</p>";
      return;
    }
  
    data.forEach(college => {
      const card = document.createElement("div");
      card.className = "college-card";
      card.innerHTML = `
        <h3>${college.name}</h3>
        <p class="college-location">📍 ${college.location}</p>
        <p class="college-rating">⭐ Rating: ${college.rating}</p>
        <p class="college-cutoff">📊 Cutoff: ${college.cutoff}</p>
      `;
      card.addEventListener("click", () => showCollegeDetails(college)); // Attach click event
      container.appendChild(card);
    });
  }
  
  function renderCollegesByCategory() {
    const featuredContainer = document.querySelector("#featuredColleges .college-grid");
    const topRatedContainer = document.querySelector("#topRatedColleges .college-grid");
    const eamcetContainer = document.querySelector("#eamcetColleges .college-grid");
  
    const featuredColleges = colleges.slice(0, 3); // Example: First 3 colleges as featured
    const topRatedColleges = colleges.filter(college => college.rating >= 4.5);
    const eamcetColleges = colleges.filter(college => college.cutoff.includes("EAMCET"));
  
    renderColleges(featuredColleges, featuredContainer);
    renderColleges(topRatedColleges, topRatedContainer);
    renderColleges(eamcetColleges, eamcetContainer);
  }
  
  function showCollegeDetails(college) {
    const modal = document.getElementById("collegeDetailsModal");
    modal.querySelector("#modalCollegeName").textContent = college.name;
    modal.querySelector("#modalCollegeLocation").innerHTML = `<strong>Location:</strong> ${college.location}`;
    modal.querySelector("#modalCollegeRating").innerHTML = `<strong>Rating:</strong> ${college.rating}`;
    modal.querySelector("#modalCollegeCutoff").innerHTML = `<strong>Cutoff:</strong> ${college.cutoff}`;
    modal.querySelector("#modalCollegeFee").innerHTML = `<strong>Fee:</strong> ${college.fee}`;
    modal.querySelector("#modalCollegeCourses").innerHTML = `<strong>Courses:</strong> ${college.courses.join(", ")}`;
    modal.querySelector("#modalCollegeDescription").innerHTML = `<strong>Description:</strong> ${college.desc}`;
    document.getElementById('modalCollegeLink').href = college.moreInfoLink; // Set the link
    modal.classList.remove("hidden");
  }
  
  function closeCollegeDetails() {
    const modal = document.getElementById("collegeDetailsModal");
    modal.classList.add("hidden");
  }
  
  function filterColleges() {
    const search = searchInput.value.toLowerCase();
    const location = locationFilter.value;
    const rating = parseFloat(ratingFilter.value);
  
    const filtered = colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(search);
      const matchesLocation = !location || college.location === location;
      const matchesRating = !rating || college.rating >= rating;
      return matchesSearch && matchesLocation && matchesRating;
    });
  
    renderColleges(filtered, document.getElementById("collegeContainer"));
  }
  
  function clearFilters() {
    searchInput.value = "";
    locationFilter.value = "";
    ratingFilter.value = "";
    renderColleges(colleges, document.getElementById("collegeContainer"));
  }
  
  // Event listeners
  searchInput.addEventListener("input", filterColleges);
  locationFilter.addEventListener("change", filterColleges);
  ratingFilter.addEventListener("change", filterColleges);
  clearFiltersBtn.addEventListener("click", clearFilters);
  
  // Initial render
  renderCollegesByCategory();