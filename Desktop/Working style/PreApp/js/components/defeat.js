"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1 class="lose">You lose</h1>
  </div>

  <div class="wrapper">
  <nav
       <ul>
        <li><a href="#!/trivia">Try Again?</a></li>
       </ul>
   </nav>
   </div>
  `
}

angular.module("pregame")
        .component("defeat", defeat);