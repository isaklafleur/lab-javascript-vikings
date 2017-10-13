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
War.prototype.vikingAttack = function() {};
War.prototype.saxonAttack = function() {};
War.prototype.showStatus = function() {};

const viking = new Viking("Isak", 100, 50);

console.log("Viking health: ", viking.health);
console.log("Damage from a Saxon ", viking.receiveDamage(50));
console.log("Viking health: ", viking.health);

const saxon = new Saxon(100, 50);

console.log("Saxon health: ", saxon.health);
console.log("Damage from a Viking ", saxon.receiveDamage(50));
console.log("Saxon health: ", saxon.health);
