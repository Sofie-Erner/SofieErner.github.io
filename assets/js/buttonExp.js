const skillbut1 = document.getElementById('skillBut');
const workbut1 = document.getElementById("workBut");
const acadbut1 = document.getElementById("acadBut");

const divexp = document.getElementById("expDiv");

/* Skills */
function changeToSkills() {
  skills1 = "<!-- Skills --> <h3> Skills </h3><article id='skills1'>";
  skills2 = "<img src='images/Skills_graphic.PNG' width='90%' alt='Graphics displaying skills with associated levels of experience'/>";
  skills3 = "<p>Code available at <a href='https://github.com/Sofie-Erner' target='_blank'>GitHub</a></p><article>";
  skillsT = ''.concat(skills1,skills2,skills3);

  Sskills1 = "<!-- Soft Skills --><h3> Soft Skills </h3><article id='skills2'>";
  Sskills2 = "<div class='grid' style='grid-template-columns:repeat(24, auto);'>";
  Sskills3 = "<div class='gridHead2'>Critical Thinking</div><div class='gridHead2'>Problem Solving</div>";
  Sskills4 = "<div class='gridHead2'>Teamwork</div><div class='gridHead2'>Time Management</div>";
  Sskills5 = "<div class='gridHead2'>Project Management</div><div class='gridHead2'>Team Management</div>";
  SskillsT = ''.concat(Sskills1,Sskills2,Sskills3,Sskills4,Sskills5,"</div></article>");

  lang1 = "<!-- Languages --><h3>Languages </h3><article id='lang1'><div class='column1'>";
  lang2 = "<h4 style='text-align:center;'> Fluent </h4>";
  lang3 = "<img src='images/uk_flag.jpeg' alt='UK flag' class='image'/><div class='inner'><p> English </p></div>";
  lang4 = "<img src='images/danish_flag.jpeg' alt='Danish flag' class='image'/><div class='inner'><p> Danish </p></div>";
  lang5 = "</div><div class='column1'><h4 style='text-align:center;'> Elementary </h4>";
  lang6 = "<img src='images/norwegian_flag.jpeg' alt='Norwegian flag' class='image'/><div class='inner'><p> Norwegian </p></div>";
  lang7 = "<img src='images/swedish_flag.jpeg' alt='Swedish Flag' class='image'/><div class='inner'><p> Swedish </p></div>";
  lang8 = "<img src='images/french_flag.png' alt='French Flag' class='image'/><div class='inner'><p> French </p></div>";
  lang9 = "</div></article></div>";
  langT = ''.concat(lang1,lang2,lang3,"<br> <br>",lang4,lang5,lang6,"<br> <br>",lang7,"<br> <br>",lang8,lang9)

  divexp.innerHTML = ''.concat("<div class='features'>",skillsT,SskillsT,langT,"</div>");
}
skillbut1.addEventListener('click',changeToSkills);

/* Work Experience */
function changeToWork() {
  timeL1 = "<div class='gridHead'>2015</div><div class='gridHead'>2016</div><div class='gridHead'>2017</div>";
  timeL2 = "<div class='gridHead'>2018</div><div class='gridHead'>2019</div><div class='gridHead'>2020</div>";
  timeL3 = "<div class='gridHead'>2021</div><div class='gridHead'>2022</div>";
  timeL4 = "<div class='gridHead'>2023</div><div class='gridHead'>2024</div>";
  timeL5 = "<div class='gridBorder'></div>";
  timtLT = ''.concat(timeL1,timeL2,timeL3,timeL4,timeL5);

  acad1 = "<div class='gridElem acad' style='--s:4;--e:24'>M.Sci.</div>";
  acad2 = "<div class='gridElem acad' style='--s:24;--e:40'>PhD</div>";
  TacadT = ''.concat(acad1,acad2);

  Twork1 = "<div class='gridElem work' style='--s:14;--e:17'>Mentor</div>";
  Twork2 = "<div class='gridElem work' style='--s:28;--e:39'>Demonstrator</div>";
  TworkT = ''.concat(Twork1,Twork2);

  Tvol1 = "<div class='gridElem vol' style='--s:12;--e:20'>Club President</div>";
  Tvol2 = "<div class='gridElem vol' style='--s:30;--e:39'>PhD Representative</div>";
  TvolT = ''.concat(Tvol1,Tvol2);

  timeLT = ''.concat("<div class='grid'>",timtLT,TacadT,TworkT,TvolT,"</div>")

  work1 = "<div  id='work1'> <h3 style='text-align:center'> Teaching </h3> </div>";
  work2 = "<h4> Teaching demonstrator </h4> <p style='margin-top:-10px;'> Department of Physics, Durham University </p>";
  work3 = "<h4> Mentoring Summer Students </h4> <p style='margin-top:-10px;'> Schoold of Physics & Astronomy, University of Glasgow </p>";
  workT = ''.concat("<div class='column1' id='rcorners' style='border: 2px solid lightblue;'>",work1,work2,work3,"</div>");

  vol1 = "<h3 style='text-align:center'> Volunteering </h3>";
  vol2 = "<h4> PhD Student Representative & Co-Chair </h4> <h5 style='margin-top:-10px;'> Post-Graduate Student-Staff Committee </h5>";
  vol3 = "<p style='margin-top:-10px;'> Department of Physics, Durham University </p>";
  vol4 = "<h4> President of Committee </h4>";
  vol5 = "<p style='margin-top:-10px;'> University of Glasgow Fencing Club </p>";
  volT = ''.concat("<div class='column1' id='rcorners' style='border: 2px solid greenyellow;'>",vol1,vol2,vol3,vol4,vol5,"</div>");

  other1 = "<h3 style='text-align:center'> Other </h3> <p>Rounded corners!</p>";
  otherT = ''.concat("<div class='column1' id='rcorners'>",other1,"</div>");
  divexp.innerHTML = ''.concat(timeLT,"<div class='column2'>",workT,volT,"<div>");
}
workbut1.addEventListener('click',changeToWork);

/* Academic Journey */
function changeToAcad() {
  str1 = "<!-- Publications --> <h3> Publications </h3><article id='pubs1'>";
  str2 = "<img src='images/Paper_front.png' alt='' class ='image'/><div class='inner'> ";
  str3 = "<h4> How to Measure the Spin of Invisible States in e<sup>+</sup> + e<sup>-</sup> <i>&#10137; 	&gamma; + X</i> </h4> ";
  str4 = "<p> Study of Dark Photons and Axion-Like Particles at Belle II in mono-photon processes. <br> ";
  str5 = "<a href='https://journals.aps.org/prd/abstract/10.1103/PhysRevD.108.115013' target='_blank' > Phys. Rev. D 108, 115013 </a> </p></div></article>";
  pub1 = ''.concat(str1,str2,str3,str4,str5);

  str6 = "<article id='pubs2'><img src='images/Thesis_front_1.png' alt='' class ='image'/><div class='inner'>";
  str7 = "<h4>Extending the Reach of Collider Searches for Dark Matter </h4>";
  str8 = "<h5> Distinguishing Invisible States at Belle II <br> & ANUBIS Sensitivity Studies </h5>";
  str9 = "<p> PhD Thesis <a href='http://etheses.dur.ac.uk/15562/' target='_blank' > (Link)</a> </p></div></article>";
  thesis1 = ''.concat(str6,str7,str8,str9);

  str10 = "<!-- Collaborations --> <h3> Collaborations </h3><article id='collabs'>";
  str11 = "<img src='images/ANUBIS.png' alt='' class ='image'/><div class='inner'><h4>ANUBIS Collboration</h4>";
  str12 = "<p>Member of the ANUBIS collaboration (<a href='https://twiki.cern.ch/twiki/bin/view/ANUBIS/' target='_blank' >website</a>) worked on the sensitivity study for the detector.</p></div></article>";
  colab1 = ''.concat(str10,str11,str12);

  str13 = "<!-- Education --> <h3> Education </h3><article id='edu1'>";
  str14 = "<h4> PhD specialising in Particle Physics Phenomenology </h4>";
  str15 = "<p style='text-align:left;'>Institute for Particle Physics Phenomenology, Durham University <span style='float:right;'>Oct. 2020 - May 2024</span></p>";
  str16 = "<h4> M.Sci. in Theoretical Physics </h4>";
  str17 = "<p style='text-align:left;'>University of Glasgow <span style='float:right;'>Sep. 2015 - June 2020</span></p></article>";
  edu1 = ''.concat(str13,str14,str15,str16,str17);

  divexp.innerHTML = ''.concat("<div class='features'>",edu1,pub1,thesis1,colab1,"</div>")
}
acadbut1.addEventListener('click',changeToAcad);