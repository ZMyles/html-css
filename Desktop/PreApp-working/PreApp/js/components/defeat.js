"use strict";

const defeat = {
  template: `
  <div class="defeatPage">
    <h1>YOU LOSE</h1>
  </div>
  `
}

angular.module("pregame")
        .component("defeat", defeat);