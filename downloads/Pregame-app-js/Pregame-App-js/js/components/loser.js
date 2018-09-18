"use strict";

const loser = {
  template: `
    <h1>YOU LOSE</h1>
  `
}


angular
.module("pregame")
.component("loser",loser);