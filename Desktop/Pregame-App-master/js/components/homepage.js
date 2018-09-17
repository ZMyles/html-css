"use strict";

const homePage = {
  template: `
  <div class="movingBackground">
        <div class="move">
        <div class="box"><h1>Pre-Game</h3></div>
       
       <nav
            <ul>
                <li><a href="#!/trivia">Start</a></li>
            </ul>
        </nav>
        </div>
     </div>
  `
}





angular
.module("pregame")
.component("homePage",homePage);