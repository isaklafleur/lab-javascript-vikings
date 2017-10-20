// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= damage;
};

// Viking
function Viking(name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return this.health > 0
    ? `${this.name} has received ${damage} points of damage`
    : `${this.name} has died in act of combat`;
};

Viking.prototype.battleCry = function() {
  return "Odin Owns You All!";
};

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage;
  return this.health > 0
    ? `A Saxon has received ${damage} points of damage`
    : `A Saxon has died in combat`;
};

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];
}

War.prototype.addViking = function(vikingObject) {
  this.vikingArmy.push(vikingObject);
};
War.prototype.addSaxon = function(saxonObject) {
  this.saxonArmy.push(saxonObject);
};
War.prototype.vikingAttack = function() {
  const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  const saxonWarriorReceivesDamage = this.saxonArmy[randomSaxon].receiveDamage(
    this.vikingArmy[randomViking].strength,
  );
  if (this.saxonArmy[randomSaxon].health <= 0) {
    this.saxonArmy.splice(randomSaxon, 1);
  }
  return saxonWarriorReceivesDamage;
};
War.prototype.saxonAttack = function() {
  const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
  const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
  const vikingWarriorReceivesDamage = this.vikingArmy[
    randomViking
  ].receiveDamage(this.saxonArmy[randomSaxon].strength);
  if (this.vikingArmy[randomViking].health <= 0) {
    this.vikingArmy.splice(randomViking, 1);
  }
  return vikingWarriorReceivesDamage;
};
War.prototype.showStatus = function() {
  if (this.saxonArmy.length === 0) {
    return "Vikings have won the war of the century!";
  } else if (this.vikingArmy.length === 0) {
    return "Saxons have fought for their lives and survive another day...";
  } else {
    return "Vikings and Saxons are still in the thick of battle.";
  }
};
