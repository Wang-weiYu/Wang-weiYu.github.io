#!/bin.sh
file_name=$(date -v-1d +%d%m%Y).html
date_day=$(date +%d)
date_mounth=$(date +%b)
date_year=$(date +%Y)
date_day_oda=$(date -v-1d +%d)
date_mounth_oda=$(date -v-1d +%b)
date_year_oda=$(date -v-1d +%Y)
cp ./acgCoffee.html ./acgCoffee/$file_name
#cp ./acgCoffee.html ./acgCoffee/testtt.html

sed -i".bak" "s/\".\//&..\//" ./acgCoffee/$file_name

sed -i".bak" "s/ACGCoffee/&BackIssue/" ./acgCoffee/$file_name

sed -i".bak" "57i\ 
    <div class=\"backIssue\"><p>Back-issue</p></div>
" ./acgCoffee/$file_name

rm ./acgCoffee/$file_name.bak

sed -i".bak" "60i\ 
          <tr><td><a href=\"./acgCoffee/$file_name\">$date_day_oda $date_mounth_oda. $date_year_oda</a><span style=\"color: red;\"> arXiv everyday</span> </tr>
" acgCoffeeList.html

rm ./acgCoffeeList.html.bak

touch acgCoffee.html
cat >acgCoffee.html<<EOF
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width = device-width, initial-scale = 1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Wang-Wei Yu</title>
        <!-- reset -->
        <link rel="stylesheet" href="./css/reset.css">
        <!-- public -->
        <link rel="stylesheet" href="./css/base.css">
        <!-- current -->
        <link rel="stylesheet" href="./css/ACGCoffee.css">
        <!-- font -->
        <link rel="icon" href="./pic/favicon.ico">
        <!-- Js -->
        <script src="./js/app.js"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</html>

<body>
  <body>
    <div class="topbar-wrapper">
        <div class="topbar w clearfix">
            <nav class="nav-button">
                <div class="bg"></div>
                <button class="button"></button>
            </nav>
            <ul class="service">
                <li><a href="./index.html">Wang-Wei Yu</a></li>
            </ul>

            <ul class="service1">
                <li><a href="./me.html">About Me</a></li>
                <li class="line">|</li>
                <li><a href="./CV.html">CV</a></li>
                <li class="line">|</li>
                <li><a href="./reseach.html">Reseach</a></li>
                <li class="line">|</li>
                <li><a href="./publications.html">Publications</a></li>
                <li class="line">|</li>
                <li><a href="./seminars.html">Seminars</a></li>
                <li class="line">|</li>
                <li><a id="current" href="./acgCoffee.html">ACG Coffee</a></li>
            </ul>
        </div>
    </div>

    <div class="webcover w">
        <img src="./pic/Le_Moulin_de_la_Galette.jpg" alt="blackboard" width="42" height="42">
    </div>
</body>
  
<div class="window"> 
  <div class="fp clearfix">

    <div class="mainTitle">
        <h1>ACG Coffee</h1> 

        <h2>"A" for Astrophysics & "C" for Cosmology & "G" for Gravity</h2>

        <h3>Date: $date_day $date_mounth., $date_year</h3>

        <h4><a href="./acgCoffeeList.html">For more</a></h4>
    </div>

    <div class="ArXiv">
        <h1>arXiv I interested everyday</h1>
        <h2><a href="https://arxiv.org/abs/">[ArXiv:]</a></h2>
        <h3>by <i></i> et al. </h3>
        <p>
        </p>
    <div>
<div>
</div>
  <a style="display: none; font-size: 40px;" href = "javascript:;" class="backToTop" title="Back to Top" id="backToTop"> &#8682; </a>
</body>
</html>
EOF
