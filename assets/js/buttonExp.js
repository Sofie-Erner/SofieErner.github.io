const skillbut1 = document.getElementById('skillBut');
const workbut1 = document.getElementById("workBut");
const acadbut1 = document.getElementById("acadBut");

const divexp = document.getElementById("expDiv");

/* Skills */
function changeToSkills() {
  str1 = "<img src='images/Skills_graphic.PNG' width='90%' alt='Graphics displaying skills with associated levels of experience'/>"
  str2 = "<p>Code available at <a href='https://github.com/Sofie-Erner' target='_blank'>GitHub</a></p>"
  divexp.innerHTML = ''.concat(str1,str2);
}
skillbut1.addEventListener('click',changeToSkills);

/* Work Experience */
function changeToWork() {
  divexp.innerHTML = "<p> here will be work experiences </p>";
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

  str6 = "<article id='pubs2'><img src='images/Thesis_front.png' alt='' class ='image'/><div class='inner'>";
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